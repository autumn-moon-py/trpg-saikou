"use strict";
const { app, BrowserWindow } = require("electron");
const path = require("node:path");
const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 1080,
    height: 720,
    // 禁用工具栏
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, "../preload/index.js")
    }
  });
  mainWindow.loadFile(path.join(__dirname, "../dist/index.html"));
  mainWindow.once("ready-to-show", () => {
    mainWindow.maximize();
    mainWindow.show();
  });
};
app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
