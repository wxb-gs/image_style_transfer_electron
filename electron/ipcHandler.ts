import { BrowserWindow, ipcMain } from "electron";
import {
  CLOSE_WINDOW,
  IMAGE_PATHS_MESSAGE,
  MAXIMIZE_MESSAGE,
  MAXIMIZE_WINDOW,
  MINIMIZW_WINDOW,
  REQUEST_IMAGES,
  REQUEST_STYLES,
  STYLES_MESSAGE,
} from "../src/constants";
import path from "node:path";
import fs from "node:fs";

import { getStyleInfo, readImagesFromFolder } from "./funtions";

const folderPath =
  "E:\\myAllProjects\\vue\\electron-vite-project\\flask\\input\\content"; // 替换为你的文件夹路径
const styleFolderPath =
  "E:\\myAllProjects\\vue\\electron-vite-project\\flask\\input\\styles"; // 替换为你的文件夹路径

function defineIpcHandler(win: BrowserWindow) {
  ipcMain.on(REQUEST_IMAGES, async () => {
    const imagePaths = await readImagesFromFolder(folderPath);
    // 将图片路径数组发送到渲染进程
    win.webContents.send(IMAGE_PATHS_MESSAGE, imagePaths);
  });

  ipcMain.on(REQUEST_STYLES, async () => {
    const styleInfo = await getStyleInfo(styleFolderPath);
    // 将图片路径数组发送到渲染进程
    win.webContents.send(STYLES_MESSAGE, styleInfo);
  });
}

function defineWindowControl(win: BrowserWindow) {
  ipcMain.on(MINIMIZW_WINDOW, () => {
    win.minimize();
  });

  ipcMain.on(MAXIMIZE_WINDOW, () => {
    if (win.isMaximized()) {
      win.restore();
    } else {
      win.maximize();
    }
    win.webContents.send(MAXIMIZE_MESSAGE, win.isMaximized());
  });

  ipcMain.on(CLOSE_WINDOW, () => {
    win.close();
  });

  ipcMain.on("get-maximize", () => {
    win.webContents.send(MAXIMIZE_MESSAGE, win.isMaximized());
  });
}

function handleVideoPath(win: BrowserWindow) {
  ipcMain.on("get_video", (_e, pathName: string) => {
    const absolutePath =
      "E:\\myAllProjects\\vue\\electron-vite-project\\dist-electron\\data";
    const fileName = path.join(absolutePath, pathName);
    fs.readFile(fileName, (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      win.webContents.send("video-buffer", {
        videoBuffer: data.toString("base64"),
      });
    });
  });
}

export { defineIpcHandler, defineWindowControl, handleVideoPath };
