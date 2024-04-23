import {
  IMAGE_PATHS_MESSAGE,
  REQUEST_IMAGES,
  REQUEST_STYLES,
  SET_IMAGES,
  SET_STYLES,
  STYLES_MESSAGE,
  TAB_KEYS,
} from "@/constants";
import { ParentSaveState, RenderComProps } from "@/types/global";
import ImageTransfer from "@/views/ImageTransfer";
import Resource from "@/views/Resource";
import { useEffect, useReducer } from "react";
import VideoTransfer from "../VideoTransfer";
import React from "react";
type Props = {
  tabKey: string;
};

const keyToComponent: Record<string, React.FC<RenderComProps>> = {
  [TAB_KEYS.RESOURCE]: Resource,
  [TAB_KEYS.IMAGE_TRANSFER]: ImageTransfer,
  [TAB_KEYS.VIDEO_TRANSFER]: VideoTransfer,
};

//返回新的状态
function reducer(state: ParentSaveState, action: Action) {
  const { type, payload } = action;
  switch (type) {
    // payload.imgUrl
    case "add-image":
      return {
        ...state,
        images: [...state.images, payload.imgUrl],
      };

    case SET_IMAGES:
      return {
        ...state,
        images: payload.images,
      };

    case SET_STYLES:
      return {
        ...state,
        styles: payload.styles,
      };
    default:
      throw Error("Unknown action.");
  }
}

const SelectContent = ({ tabKey }: Props) => {
  const [state, dispatch] = useReducer(reducer, { images: [], styles: [] });
  useEffect(() => {
    window.ipcRenderer.send(REQUEST_IMAGES);
    window.ipcRenderer.send(REQUEST_STYLES);
    // 添加对应的监听器
    window.ipcRenderer.on(IMAGE_PATHS_MESSAGE, (_event, results) => {
      dispatch({
        type: SET_IMAGES,
        payload: {
          images: results,
        },
      });
    });
    window.ipcRenderer.on(STYLES_MESSAGE, (_event, results) => {
      dispatch({
        type: SET_STYLES,
        payload: {
          styles: results,
        },
      });
    });
  }, []);
  const RenderComponent = keyToComponent[tabKey];
  return (
    <RenderComponent
      state={state}
      dispatch={dispatch}
    />
  );
};

export default React.memo(SelectContent);
