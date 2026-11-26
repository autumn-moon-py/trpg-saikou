const { app, BrowserWindow, dialog, ipcMain, shell } = require('electron');
const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');
const windowStateKeeper = require('electron-window-state');

const OPEN_CARD_CHANNEL = 'trpg-card:open';
const PULL_CARD_CHANNEL = 'trpg-card:pull';

const CONTEXT_MENU_VERB = 'TrpgSaikouOpenCard';
const CONTEXT_MENU_LABEL = '用 COC车卡 打开角色卡';

// 可承载车卡数据的文本文件后缀（快捷方式指向或参数携带）
const CARD_FILE_EXTS = new Set(['.txt']);

let mainWindow = null;
// 渲染进程就绪前收到的卡数据暂存在这里
let pendingCard = null;

/** 从命令行参数中找出第一个真实存在的文件路径 */
function findFileArg(argv, cwd) {
  // 打包后 argv[0] 是 exe 路径；开发时还会多一个入口脚本路径
  const args = argv.slice(app.isPackaged ? 1 : 2);
  for (const arg of args) {
    if (!arg || arg.startsWith('-')) continue;
    const candidate = path.resolve(cwd || process.cwd(), arg);
    try {
      if (fs.statSync(candidate).isFile()) return candidate;
    } catch {
      // 非路径参数，忽略
    }
  }
  return null;
}

/** 按 Windows 命令行规则粗略拆分带引号的参数 */
function splitCommandLine(input) {
  const result = [];
  const re = /"([^"]*)"|(\S+)/g;
  let matched;
  while ((matched = re.exec(input))) {
    result.push(matched[1] !== undefined ? matched[1] : matched[2]);
  }
  return result;
}

function isExistingFile(filePath) {
  try {
    return fs.statSync(filePath).isFile();
  } catch {
    return false;
  }
}

function isCardFile(filePath) {
  return (
    CARD_FILE_EXTS.has(path.extname(filePath).toLowerCase()) && isExistingFile(filePath)
  );
}

function readCardFile(filePath) {
  const stat = fs.statSync(filePath);
  if (stat.size > 5 * 1024 * 1024) {
    throw new Error('文件过大');
  }
  const content = fs
    .readFileSync(filePath, 'utf8')
    .replace(/^\uFEFF/, '')
    .trim();
  if (!content) throw new Error('文件内容为空');
  return { name: path.basename(filePath), content };
}

/** 解析快捷方式：支持指向 txt、参数里带 txt 路径、参数里直接带卡数据 */
function resolveShortcut(lnkPath, depth) {
  let details;
  try {
    details = shell.readShortcutLink(lnkPath);
  } catch {
    return null;
  }

  // 快捷方式指向另一个文件（车卡 txt 或另一层快捷方式）
  if (details.target) {
    const targetPath = path.resolve(path.dirname(lnkPath), details.target);
    const isSelf = targetPath.toLowerCase() === process.execPath.toLowerCase();
    const isLnk = path.extname(targetPath).toLowerCase() === '.lnk';
    if (!isSelf && (isLnk || isCardFile(targetPath))) {
      return resolveCardPayload(targetPath, depth + 1);
    }
  }

  const baseDir = details.cwd || path.dirname(lnkPath);
  const args = splitCommandLine(details.args || '');

  // 参数里带文件路径
  for (const arg of args) {
    if (!arg || arg.startsWith('-')) continue;
    const candidate = path.resolve(baseDir, arg);
    if (isCardFile(candidate)) {
      return resolveCardPayload(candidate, depth + 1);
    }
  }

  // 参数里直接带卡数据串（LZString URI 压缩结果只包含这些字符）
  const code = args.find((arg) => /^[A-Za-z0-9+\-$]{20,}$/.test(arg));
  if (code) {
    return {
      name: path.basename(lnkPath, path.extname(lnkPath)),
      content: code,
    };
  }

  return null;
}

function resolveCardPayload(filePath, depth = 0) {
  if (depth > 3) return null;
  if (path.extname(filePath).toLowerCase() === '.lnk') {
    return resolveShortcut(filePath, depth);
  }
  if (!isCardFile(filePath)) return null;
  return readCardFile(filePath);
}

/** 注册资源管理器右键菜单（只对打包后的 Windows 版生效，写 HKCU 不需要管理员） */
function registerContextMenu() {
  if (process.platform !== 'win32' || !app.isPackaged) return;

  const markerPath = path.join(app.getPath('userData'), 'context-menu.json');
  const exePath = process.execPath;
  try {
    const marker = JSON.parse(fs.readFileSync(markerPath, 'utf8'));
    if (marker.exePath === exePath && marker.version === app.getVersion()) return;
  } catch {
    // 首次运行或标记损坏，重新注册
  }

  const command = `"${exePath}" "%1"`;
  const verbKeys = [
    `Software\\Classes\\SystemFileAssociations\\.txt\\shell\\${CONTEXT_MENU_VERB}`,
    `Software\\Classes\\lnkfile\\shell\\${CONTEXT_MENU_VERB}`,
  ];

  try {
    for (const key of verbKeys) {
      const fullKey = `HKCU\\${key}`;
      execFileSync('reg', ['add', fullKey, '/ve', '/d', CONTEXT_MENU_LABEL, '/f'], {
        windowsHide: true,
      });
      execFileSync('reg', ['add', fullKey, '/v', 'Icon', '/d', exePath, '/f'], {
        windowsHide: true,
      });
      execFileSync('reg', ['add', `${fullKey}\\command`, '/ve', '/d', command, '/f'], {
        windowsHide: true,
      });
    }
    fs.writeFileSync(markerPath, JSON.stringify({ exePath, version: app.getVersion() }));
  } catch (error) {
    console.error('注册右键菜单失败：', error);
  }
}

function focusMainWindow() {
  if (!mainWindow || mainWindow.isDestroyed()) return;
  if (mainWindow.isMinimized()) mainWindow.restore();
  mainWindow.show();
  mainWindow.focus();
}

/** 渲染进程加载完成后把暂存的卡数据发过去 */
function flushPendingCard() {
  if (!pendingCard || !mainWindow || mainWindow.isDestroyed()) return;
  if (mainWindow.webContents.isLoading()) return;
  mainWindow.webContents.send(OPEN_CARD_CHANNEL, pendingCard);
  pendingCard = null;
}

function deliverCard(payload) {
  pendingCard = payload;
  focusMainWindow();
  flushPendingCard();
}

function openCardFile(filePath) {
  let payload = null;
  try {
    payload = resolveCardPayload(filePath);
  } catch (error) {
    console.error('读取角色卡失败：', error);
  }

  if (!payload) {
    dialog.showErrorBox('无法打开角色卡', `无法从以下文件读取角色卡数据：\n${filePath}`);
    return;
  }

  deliverCard(payload);
}

const createWindow = () => {
  // 加载上次保存的窗口状态，如果没有则使用默认值
  const mainWindowState = windowStateKeeper({
    defaultWidth: 1080,
    defaultHeight: 720,
  });

  mainWindow = new BrowserWindow({
    x: mainWindowState.x,
    y: mainWindowState.y,
    width: mainWindowState.width,
    height: mainWindowState.height,
    isMaximized: mainWindowState.isMaximized,
    // 使用系统原生标题栏（含最小化/最大化/关闭按钮）
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  // 让 windowStateKeeper 监听窗口状态变化
  mainWindowState.manage(mainWindow);

  mainWindow.loadFile(path.join(__dirname, '../dist/index.html'));

  // 页面加载完成后再投递启动时暂存的卡数据
  mainWindow.webContents.on('did-finish-load', flushPendingCard);

  mainWindow.once('ready-to-show', () => {
    // 如果上次是最大化状态，则恢复最大化
    if (mainWindowState.isMaximized) {
      mainWindow.maximize();
    }
    mainWindow.show();
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
};

ipcMain.handle(PULL_CARD_CHANNEL, () => {
  const payload = pendingCard;
  pendingCard = null;
  return payload;
});

// 右键菜单可能反复触发启动，单实例可以复用已有窗口
const gotSingleInstanceLock = app.requestSingleInstanceLock();

if (!gotSingleInstanceLock) {
  app.quit();
} else {
  app.on('second-instance', (_event, argv, workingDirectory) => {
    focusMainWindow();
    const filePath = findFileArg(argv, workingDirectory);
    if (filePath) openCardFile(filePath);
  });

  app.whenReady().then(() => {
    registerContextMenu();

    // 右键菜单 / 文件关联启动时命令行里会带文件路径
    const startFile = findFileArg(process.argv, process.cwd());

    createWindow();
    if (startFile) openCardFile(startFile);

    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
  });
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
