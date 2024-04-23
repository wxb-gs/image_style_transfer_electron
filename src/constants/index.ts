export * from "./menu";
export * from "./messages";
export * from "./actions";

const defaultState: State = {
  id: "1",
};
const TAB_KEYS = {
  RESOURCE: "resource",
  IMAGE_TRANSFER: "image-transfer",
  VIDEO_TRANSFER: "video-transfer",
};
const SOKET_URL = "http://localhost:5000";

export { SOKET_URL, TAB_KEYS };
export { defaultState };
