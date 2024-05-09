export * from "./menu";
export * from "./messages";
export * from "./actions";
export * from "./protocol";
export * from "./theme";
export * from "./translation";

const TAB_KEYS = {
  RESOURCE: "resource",
  IMAGE_TRANSFER: "image-transfer",
  VIDEO_TRANSFER: "video-transfer",
  SETTING: "setting",
};
const SOKET_URL = "http://localhost:5000";
const LIMIT_IMAGE = ["jpg", "png"];
const LIMIT_VIDEO = ["mp4"];
const LIMIT_CAMERA = "camera";
const LIMIT_FILETYPE = [...LIMIT_IMAGE, ...LIMIT_VIDEO, LIMIT_CAMERA];

const DEFAULT_VIDEO =
  "E:\\myAllProjects\\vue\\electron-vite-project\\flask\\input\\Video.png";
const REAL_TIME = ".camera";

export {
  SOKET_URL,
  TAB_KEYS,
  LIMIT_IMAGE,
  LIMIT_VIDEO,
  LIMIT_CAMERA,
  LIMIT_FILETYPE,
  DEFAULT_VIDEO,
  REAL_TIME,
};
