import Video from "./VideoEditor.js";
import "./videoEditor.less";
import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import { Card } from "antd";

type Props = {
  source: string | undefined;
  onSave: Function;
};
const VideoEditor = forwardRef(({ source, onSave }: Props, ref) => {
  const videoEditorRef = useRef<any>(null);
  const videoDivRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    document.getElementsByClassName("save-button")[0];
    window.ipcRenderer.send("get_video", source);
    window.ipcRenderer.on("video-buffer", (_e, { videoBuffer }) => {
      const blob = new Blob([videoBuffer], { type: "video/mp4" });
      const options: any = {
        src: blob,
        // crop: { width: 7, height: 4 },
        maxHeight: 200,
        transformations: {
          time: { in: 0, out: 2 },
        },
        onSave: (transform: any, videoSrc: any) => {
          // do something with the transformed video
          console.log("Saved!", transform, videoSrc);
          onSave(transform, videoSrc);
        },
      };
      videoEditorRef.current = new Video(options);
      videoEditorRef.current.render(videoDivRef.current);
    });
  }, []);
  useImperativeHandle(
    ref,
    () => {
      return {
        clickSave: () => {
          const btn: HTMLButtonElement = document.getElementsByClassName(
            "save-button"
          )[0] as any;
          btn.click();
        },
      };
    },
    []
  );
  return (
    <Card
      title="视频预览"
      className="video-editor">
      <div
        id="my-video-editor"
        ref={videoDivRef}></div>
    </Card>
  );
});

export default VideoEditor;
