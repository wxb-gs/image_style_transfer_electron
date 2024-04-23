import { app, BrowserWindow, ipcMain } from "electron";
import { spawn } from "node:child_process";
import path from "node:path";
import {
  IMAGE_PATHS_MESSAGE,
  REQUEST_IMAGES,
  REQUEST_STYLES,
  STYLES_MESSAGE,
} from "../src/constants";
import {
  getStyleInfo,
  loadFolderAsBlobs,
  readImagesFromFolder,
} from "./funtions";
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

let win: BrowserWindow | null;
// 🚧 Use ['ENV_NAME'] avoid vite:define plugin - Vite@2.x
const VITE_DEV_SERVER_URL = process.env["VITE_DEV_SERVER_URL"];

let flaskProcess: any;
const folderPath =
  "E:\\myAllProjects\\vue\\electron-vite-project\\flask\\input\\content"; // 替换为你的文件夹路径
const styleFolderPath =
  "E:\\myAllProjects\\vue\\electron-vite-project\\flask\\input\\styles"; // 替换为你的文件夹路径

function loadFlask() {
  let pythonPath: string = "";
  if (process.platform === "win32") {
    // Windows下的Python解释器路径
    pythonPath = "E:\\anaconda\\envs\\AdaIN\\python.exe"; // 根据实际情况修改路径
  } else {
    // 非Windows平台下的Python解释器路径
    pythonPath = "/usr/bin/python3"; // 根据实际情况修改路径
  }

  const flaskPath = path.join(__dirname, "../flask/app.py");
  const flaskCwd = path.join(__dirname, "../flask");
  // 加载Flask应用
  flaskProcess = spawn(pythonPath, [flaskPath], {
    cwd: flaskCwd,
  });

  // 监听Flask进程的输出
  flaskProcess.stdout.on("data", (data: any) => {
    console.log(`stdout: ${data}`);
  });

  flaskProcess.stderr.on("data", (data: any) => {
    console.error(`stderr: ${data}`);
  });
}

function loadNodeAPi(win: BrowserWindow) {
  // // 异步读取文件并响应渲染器
  // ipcMain.handle("read-local-image", async (event, imagePath) => {
  //   try {
  //     const imageBuffer = await fs.promises.readFile(imagePath);
  //     return imageBuffer;
  //   } catch (error) {
  //     console.error("Error reading the image file:", error);
  //     throw error;
  //   }
  // });

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

function createWindow() {
  win = new BrowserWindow({
    width: 1280,
    height: 650,
    icon: path.join(process.env.VITE_PUBLIC, "electron-vite.svg"),
    // frame: false,
    // titleBarStyle: "hidden",
    titleBarStyle: "hidden",
    titleBarOverlay: {
      color: "white",
      symbolColor: "blue",
      height: 40,
    },
    // transparent: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      webSecurity: false,
      // contextIsolation: false,
    },
  });

  // Test active push message to Renderer-process.
  win.webContents.on("did-finish-load", () => {
    win?.webContents.send("main-process-message", new Date().toLocaleString());
  });

  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL);
  } else {
    // win.loadFile('dist/index.html')
    win.loadFile(path.join(process.env.DIST, "index.html"));
  }

  loadFlask();
  loadNodeAPi(win);
}

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
    win = null;
    flaskProcess.kill();
  }
});

app.on("activate", () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

app.whenReady().then(createWindow);
