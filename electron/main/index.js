const { app, BrowserWindow } = require('electron');
const path = require('node:path');
const windowStateKeeper = require('electron-window-state');

const createWindow = () => {
  // 加载上次保存的窗口状态，如果没有则使用默认值
  const mainWindowState = windowStateKeeper({
    defaultWidth: 1080,
    defaultHeight: 720,
  });

  const mainWindow = new BrowserWindow({
    x: mainWindowState.x,
    y: mainWindowState.y,
    width: mainWindowState.width,
    height: mainWindowState.height,
    isMaximized: mainWindowState.isMaximized,
    // 使用系统原生标题栏（含最小化/最大化/关闭按钮）
    webPreferences: {
      preload: path.join(__dirname, '../preload/index.js'),
    },
  });

  // 让 windowStateKeeper 监听窗口状态变化
  mainWindowState.manage(mainWindow);

  mainWindow.loadFile(path.join(__dirname, '../dist/index.html'));

  mainWindow.once('ready-to-show', () => {
    // 如果上次是最大化状态，则恢复最大化
    if (mainWindowState.isMaximized) {
      mainWindow.maximize();
    }
    mainWindow.show();
  });
};

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
