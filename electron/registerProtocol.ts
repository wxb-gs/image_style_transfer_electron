import { CUSTOM_PROTOCOL, VIDEO_PROTOCOL } from "../src/constants";
import { protocol } from "electron";
import fs from "node:fs";
import path from "node:path";
import mime from "mime";
export default function registerProtocol() {
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
