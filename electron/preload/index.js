const { contextBridge, ipcRenderer } = require('electron');

const OPEN_CARD_CHANNEL = 'trpg-card:open';
const PULL_CARD_CHANNEL = 'trpg-card:pull';

// 渲染进程注册监听前收到的卡数据先缓存，避免挂载完成前丢消息
const bufferedCards = [];
const listeners = new Set();

ipcRenderer.on(OPEN_CARD_CHANNEL, (_event, payload) => {
  if (!payload) return;
  if (listeners.size === 0) {
    bufferedCards.push(payload);
    return;
  }
  listeners.forEach((listener) => listener(payload));
});

contextBridge.exposeInMainWorld('trpgDesktop', {
  isElectron: true,
  isWindows: process.platform === 'win32',
  // 启动时由主进程暂存的卡数据（例如通过右键菜单启动）
  pullPendingCard: () => ipcRenderer.invoke(PULL_CARD_CHANNEL),
  // 应用已运行时再次打开文件，主进程推送新的卡数据
  onOpenCard: (callback) => {
    listeners.add(callback);
    while (bufferedCards.length > 0) {
      callback(bufferedCards.shift());
    }
    return () => listeners.delete(callback);
  },
});
