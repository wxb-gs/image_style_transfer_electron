import dayjs from "dayjs";
import { BrowserWindow, dialog, ipcMain } from "electron";
import fs from "node:fs";
import path from "node:path";
import {
  CLOSE_WINDOW,
  IMAGE_PATHS_MESSAGE,
  LIMIT_FILETYPE,
  MAXIMIZE_MESSAGE,
  MAXIMIZE_WINDOW,
  MINIMIZW_WINDOW,
  RECENT_MESSAGE,
  REQUEST_IMAGES,
  REQUEST_RECENT,
  REQUEST_STYLES,
  REQUEST_WRITE_RECENT,
  STYLES_MESSAGE,
} from "../src/constants";

import { Low } from "lowdb";
import { OPEN_FILE_DIALOG, SELECT_FILE_MESSAGE } from "../src/constants";
import { Data, getValue, RecentRecord } from "./db";
import { getStyleInfo, readImagesFromFolder } from "./funtions";

const folderPath =
  "E:\\myAllProjects\\vue\\electron-vite-project\\flask\\input\\content"; // 替换为你的文件夹路径
const styleFolderPath =
  "E:\\myAllProjects\\vue\\electron-vite-project\\flask\\input\\styles"; // 替换为你的文件夹路径

const DATA_PATH =
  "E:\\myAllProjects\\vue\\electron-vite-project\\dist-electron\\data";

function defineIpcHandler(win: BrowserWindow, db: Low<Data>) {
  ipcMain.on(REQUEST_IMAGES, async () => {
    const imagePaths = await readImagesFromFolder(folderPath);
    win.webContents.send(IMAGE_PATHS_MESSAGE, imagePaths);
  });

  ipcMain.on(REQUEST_STYLES, async () => {
    const styleInfo = await getStyleInfo(styleFolderPath);
    win.webContents.send(STYLES_MESSAGE, styleInfo);
  });
  // 在主进程中监听来自渲染器的消息并显示对话框
  ipcMain.on(OPEN_FILE_DIALOG, async () => {
    const file = dialog.showOpenDialogSync({
      title: "选择文件",
      //   properties: ['openFile', 'multiSelections'],
      properties: ["openFile"],
      //设置规则
      filters: [
        {
          name: "Image Files or Video",
          extensions: LIMIT_FILETYPE,
        },
      ],
    });
    if (file) {
      //   写入recent中
      const absolutePath = path.parse(file[0]);
      const time = dayjs();
      db.data.recent = [
        {
          key: absolutePath.name,
          url: file[0],
          name: absolutePath.name,
          time: time.format("MM/DD HH:mm"),
          transfer: [],
        },
        ...db.data.recent,
      ];
      win.webContents.send(SELECT_FILE_MESSAGE, file[0]);
      await db.write();
      // 再发一个recentMessage
      win.webContents.send(RECENT_MESSAGE, db.data.recent);
    }
  });
}

// lowdb读取相关
function lowdbHandler(win: BrowserWindow, db: Low<Data>) {
  ipcMain.on(REQUEST_RECENT, async (_e, key = "recent") => {
    const recentData = getValue(db, key);
    win.webContents.send(RECENT_MESSAGE, recentData);
  });

  ipcMain.on(REQUEST_WRITE_RECENT, async (_e, content: RecentRecord) => {
    db.data.recent.push(content);
    db.write();
  });

  ipcMain.on("transfer", (_e, base64) => {
    const filePath = path.join(DATA_PATH, "./temp/temp.jpg");
    // 解析base64字符串
    const matches = base64.match(/data:([A-Za-z-+\/]+);base64,(.+)/);
    if (matches.length !== 3) {
      throw new Error("Invalid base64 string");
    }

    const mime = matches[1];
    const data = matches[2];

    // 将base64解码为二进制
    const byteCharacters = atob(data);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }

    // 将二进制数据转换为Blob对象
    const blob = new Blob(byteNumbers, { type: mime });

    // 创建一个指向Blob的URL
    const imgURL = URL.createObjectURL(blob);

    // 使用Electron的fs模块保存图像
    const imgBuffer = Buffer.from(byteNumbers);
    fs.promises
      .writeFile(filePath, imgBuffer)
      .then(() => {
        console.log("Image saved as", filePath);
        win.webContents.send("get_ready_transfer", filePath);
      })
      .catch((error) => {
        console.error("Error saving image:", error);
      });

    // 清理Object URL
    URL.revokeObjectURL(imgURL);
  });
}

// 窗口最大、最小化
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

// 读取视频
function handleVideoPath(win: BrowserWindow) {
  ipcMain.on("get_video", (_e, pathName: string) => {
    let absolutePath;
    let fileName;
    if (!path.isAbsolute(pathName)) {
      absolutePath =
        "E:\\myAllProjects\\vue\\electron-vite-project\\dist-electron\\data";
      fileName = path.join(absolutePath, pathName);
    } else {
      fileName = pathName;
    }
    fs.readFile(fileName, (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      win.webContents.send("video-buffer", {
        // videoBuffer: data.toString("base64"),
        videoBuffer: data,
      });
    });
  });

  ipcMain.on("get_video_base64", (_e, pathName: string) => {
    let absolutePath;
    let fileName;
    if (!path.isAbsolute(pathName)) {
      absolutePath =
        "E:\\myAllProjects\\vue\\electron-vite-project\\dist-electron\\data";
      fileName = path.join(absolutePath, pathName);
    } else {
      fileName = pathName;
    }
    fs.readFile(fileName, (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      win.webContents.send("video-buffer_base64", {
        videoBuffer: data.toString("base64"),
      });
    });
  });
}

export { defineIpcHandler, defineWindowControl, handleVideoPath, lowdbHandler };
