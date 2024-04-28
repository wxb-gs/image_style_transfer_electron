import fs from "fs";
import path from "path";
import { CUSTOM_PROTOCOL } from "../src/constants";

const IMAGE_TYPES = [".jpg", ".jpeg", ".png", ".gif"];

async function loadImageAsBlob(imagePath: string): Promise<string | null> {
  try {
    // 读取图片文件的数据
    const imageData = await fs.promises.readFile(imagePath);
    // 创建 Blob 对象
    const blob = new Blob([imageData], { type: "image/jpeg" });
    // 创建 Blob URL
    const blobURL = URL.createObjectURL(blob);
    return blobURL;
  } catch (error) {
    console.error("加载图片为 Blob 时发生错误:", error);
    return null;
  }
}

async function loadImagesAsBlobs(
  imagePaths: string[]
): Promise<(string | null)[]> {
  // 逐个加载图片文件为 Blob
  const blobPromises = imagePaths.map((imagePath) =>
    loadImageAsBlob(imagePath)
  );
  // 等待所有图片加载完成
  return Promise.all(blobPromises);
}

async function readImagesFromFolder(folderPath: string) {
  try {
    // 读取文件夹中的所有文件和文件夹名称
    const files = await fs.promises.readdir(folderPath);
    // 过滤出图片文件
    const imageFiles = files.filter((file) => {
      // 使用 path.extname 获取文件扩展名，并转换为小写进行比较
      // 确保返回值类型为 boolean
      return IMAGE_TYPES.includes(path.extname(file).toLowerCase());
    });
    // 获取图片文件的完整路径
    const imagePaths = imageFiles.map((file) => path.join(folderPath, file));
    // 返回图片文件路径的数组
    return imagePaths;
  } catch (error) {
    console.error("读取图片时发生错误:", error);
  }
}

async function loadFolderAsBlobs(folderPath: string) {
  const imagePaths = await readImagesFromFolder(folderPath);
  const blobPaths = loadImagesAsBlobs(imagePaths!);
  return blobPaths;
}

async function getStyleInfo(styleFolder: string) {
  const paths = await readImagesFromFolder(styleFolder);
  const styleInfo = paths!.map((item) => {
    const file = path.parse(item);
    return {
      path: item,
      //   name: `${CUSTOM_PROTOCOL}://${file.name}`,
      name: file.name,
    };
  });
  return styleInfo;
}

export { readImagesFromFolder, getStyleInfo, loadFolderAsBlobs };
