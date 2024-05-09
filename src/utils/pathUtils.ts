import { CUSTOM_PROTOCOL } from "@/constants";
/**Add normal path with the prefix
 * the prefix is a custom_protocol
 *
 * @param {stirng} path
 * @returns {string}
 */
function getSafePath(path: string): string {
  if (!path) {
    throw Error("getSafePath(): path is undefined");
  }
  return `${CUSTOM_PROTOCOL}://${path}`;
}
/**Gernerate Random string hash value
 *
 * @param {number} length
 * @returns {string}
 */
function getHash(length: number = 32): string {
  let hashID = "";
  const alphabet =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < length; i++) {
    hashID += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
  }
  return hashID;
}
/** Encode URL, replacing all URL-unsafe
 *  characters (except slash) with hex representation
 * @param {string} path
 * @returns {string}
 */
function getUrlSafePath(path: string): string {
  let colonCharPlacholder = `PLACEHOLDER-${getHash()}`;
  return path
    .replace(/\\/g, "/")
    .replace(/:/g, colonCharPlacholder)
    .split("/")
    .map((pathItem) => encodeURIComponent(pathItem))
    .join("/")
    .replace(new RegExp(colonCharPlacholder, "g"), ":");
}

const processResults = (results: string[]) => {
  return results.map((imagePath) => {
    const processPath = getSafePath(getUrlSafePath(imagePath));
    // console.log(`处理后的路径是：${processPath}`);
    return processPath;
  });
};

const getFileType = (filePath: string | undefined) => {
  if (filePath) {
    let index = filePath.indexOf(".");
    const type = filePath.substring(index + 1);
    return type;
  }
};

export { getSafePath, processResults, getFileType };
