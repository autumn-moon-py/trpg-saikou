const { app, BrowserWindow } = require('electron');
const path = require('node:path');

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    // 禁用工具栏
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, '../preload/index.js'),
    },
  });

  // 加载 index.html
  mainWindow.loadFile(path.join(__dirname, '../dist/index.html'));

  // 当页面加载完成后显示并最大化窗口
  mainWindow.once('ready-to-show', () => {
    mainWindow.maximize(); // 最大化窗口
    mainWindow.show(); // 显示窗口
  });

  // 打开开发工具
  // mainWindow.webContents.openDevTools()
};

// 这段程序将会在 Electron 结束初始化
// 和创建浏览器窗口的时候调用
// 部分 API 在 ready 事件触发后才能使用。
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    // 在 macOS 系统内, 如果没有已开启的应用窗口
    // 点击托盘图标时通常会重新创建一个新窗口
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// 除了 macOS 外，当所有窗口都被关闭的时候退出程序。 因此, 通常
// 对应用程序和它们的菜单栏来说应该时刻保持激活状态,
// 直到用户使用 Cmd + Q 明确退出
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
