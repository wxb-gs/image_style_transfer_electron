import { app, BrowserWindow, protocol } from "electron";
import mime from "mime";
import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { CUSTOM_PROTOCOL, VIDEO_PROTOCOL } from "../src/constants";
import {
  defineIpcHandler,
  defineWindowControl,
  handleVideoPath,
} from "./ipcHandler";
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
]);

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

function registerProtocol() {
  protocol.handle(CUSTOM_PROTOCOL, async (request) => {
    // 带着协议名的url，处理后返回
    // 使用 net.fetch 获取文件内容
    // 检查文件是否存在
    const url = decodeURIComponent(request.url)
      .replace(`${CUSTOM_PROTOCOL}://`, "")
      .replace(/(.*)(#t=.*)/, "$1"); // remove "#t=*" query at the end (used in video paths)
    // 这里小写的request.url无法直接读取访问
    let pathToOpen = url;
    if (!path.isAbsolute(url)) {
      pathToOpen = pathToOpen[0] + ":" + pathToOpen.substring(1);
    }
    // 直接返回url不行，需要自行读取然后设置返回值类型
    try {
      // 读取文件内容
      const content = fs.readFileSync(pathToOpen);
      const mimeType = mime.getType(pathToOpen); // 根据文件路径获取MIME类型
      return new Response(content, {
        headers: { "Content-Type": mimeType! },
      });
    } catch (error) {
      console.error("Failed to load image:", error);
      return new Response("Error loading image", { status: 404 });
    }
  });

  protocol.handle(VIDEO_PROTOCOL, async (request) => {
    let url = request.url;
    url = url.replace(/^video:\/\//, "");
    if (url[url.length - 1] == "/") {
      url = url.substring(0, url.length - 1);
    }
    let videoFileName = url;
    const absolutePath = path.join(
      "E:\\myAllProjects\\vue\\electron-vite-project\\dist-electron\\data",
      videoFileName
    );
    try {
      // 读取视频文件为二进制数据
      const videoData = await fs.promises.readFile(absolutePath);
      // 设置正确的MIME类型，这里以 'video/mp4' 为例
      const mimeType = "video/mp4";
      // 返回包含视频数据和MIME类型的响应
      return new Response(videoData, {
        headers: {
          "Content-Type": mimeType,
        },
      });
    } catch (error) {
      console.error("Failed to load video:", error);
      // 如果发生错误，返回一个错误响应
      return new Response("Error loading video file", {
        status: 404,
        statusText: "Not Found",
      });
    }
  });
}

function createWindow() {
  win = new BrowserWindow({
    width: 1280,
    height: 650,
    minHeight: 450,
    minWidth: 650,
    icon: path.join(process.env.VITE_PUBLIC, "electron-vite.svg"),
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      //   webSecurity: false,
    },
  });

  // Test active push message to Renderer-process.
  win.webContents.on("did-finish-load", () => {
    win?.webContents.send("main-process-message", new Date().toLocaleString());
  });

  registerProtocol();
  // loadFlask();
  defineIpcHandler(win);
  defineWindowControl(win);
  handleVideoPath(win);

  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL);
  } else {
    // win.loadFile('dist/index.html')
    win.loadFile(path.join(process.env.DIST, "index.html"));
  }
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
