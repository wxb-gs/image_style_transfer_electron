import { spawn } from "node:child_process";
import path from "node:path";
export default function loadFlask() {
  let flaskProcess;
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
  return flaskProcess;
}
