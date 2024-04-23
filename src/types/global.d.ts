import { Dispatch } from "react";

type TabKey = string | "resource" | "image-transfer" | "video-transfer";

// content切换组件，需要保存的全局状态
interface ParentSaveState {
  images: string[];
  styles: object;
}

type RenderComProps = {
  state: ParentSaveState;
  dispatch: Dispatch;
};

interface Action {}
