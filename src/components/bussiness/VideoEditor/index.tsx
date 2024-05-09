import Video from "./VideoEditor.js";
import "./videoEditor.less";
import { useEffect, useRef } from "react";
import { Card } from "antd";

type Props = {
  source: string | undefined;
};
const VideoEditor = ({ source }: Props) => {
  const videoEditorRef = useRef<any>(null);
  const videoDivRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
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
        onSave: (transform, videoSrc) => {
          // do something with the transformed video
          console.log("Saved!", transform, videoSrc);
        },
      };
      videoEditorRef.current = new Video(options);
      //   const domRef = document.getElementById("my-video-editor");
      //   console.log(domRef);
      console.log("render video");
      videoEditorRef.current.render(videoDivRef.current);
    });
  }, []);

  return (
    <Card
      title="视频预览"
      className="video-editor">
      <div
        id="my-video-editor"
        ref={videoDivRef}></div>
    </Card>
  );
};

export default VideoEditor;
