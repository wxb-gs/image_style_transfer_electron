import { app, BrowserWindow, protocol } from "electron";
import path from "node:path";

import {
  CUSTOM_PROTOCOL,
  LOCALDATA_PROTOCOL,
  VIDEO_PROTOCOL,
} from "../src/constants";
import {
  defineIpcHandler,
  defineWindowControl,
  handleVideoPath,
  lowdbHandler,
} from "./ipcHandler";
import registerProtocol from "./registerProtocol";
// import loadFlask from "./loadFlask";
import { initDB } from "./db";
// The built directory structure
//
// ├─┬─┬ dist
// │ │ └── index.html
// │ │
// │ ├─┬ dist-electron
// │ │ ├── main.js
// │ │ └── preload.js
// │
process.env.DIST = path.join(__dirname, "../dist");
process.env.VITE_PUBLIC = app.isPackaged
  ? process.env.DIST
  : path.join(process.env.DIST, "../public");

const VITE_DEV_SERVER_URL = process.env["VITE_DEV_SERVER_URL"];

let win: BrowserWindow | null;
let flaskProcess: any;
let db: any;

// 注册自定义文件协议
protocol.registerSchemesAsPrivileged([
  {
    scheme: CUSTOM_PROTOCOL, // 自定义协议名称
    privileges: {
      standard: true, // 允许标准请求
      secure: true, // 允许安全请求
    },
  },
  {
    scheme: VIDEO_PROTOCOL,
    privileges: {
      standard: true, // 允许标准请求
      secure: true, // 允许安全请求
    },
  },
  {
    scheme: LOCALDATA_PROTOCOL,
    privileges: {
      standard: true, // 允许标准请求
      secure: true, // 允许安全请求
    },
  },
]);

async function createWindow() {
  win = new BrowserWindow({
    width: 1280,
    height: 650,
    minHeight: 450,
    minWidth: 650,
    icon: path.join(process.env.VITE_PUBLIC, "electron-vite.svg"),
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // Test active push message to Renderer-process.
  win.webContents.on("did-finish-load", () => {
    win?.webContents.send("main-process-message", new Date().toLocaleString());
  });
  // 注册协议
  registerProtocol();
  //   初始化后端及本地数据管理
  //   flaskProcess = loadFlask();
  db = await initDB();
  //注册监听相关ipc handler
  defineIpcHandler(win, db);
  lowdbHandler(win, db);
  defineWindowControl(win);
  handleVideoPath(win);

  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL);
  } else {
    // win.loadFile('dist/index.html')
    win.loadFile(path.join(process.env.DIST, "index.html"));
  }
}

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
    win = null;
    if (flaskProcess) flaskProcess.kill();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

app.whenReady().then(createWindow);
