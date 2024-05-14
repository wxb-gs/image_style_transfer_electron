import React, { useRef } from "react";
import { useEffect } from "react";

type Props = {
  src: string;
};

const Video = ({ src }: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    window.ipcRenderer.send("get_video", src);

    window.ipcRenderer.on("video-buffer", (_e, { videoBuffer }) => {
      // 将Buffer转换为base64字符串

      const base64String = videoBuffer.toString("base64");

      // 创建base64数据URI

      const videoUrl = `data:video/mp4;base64,${base64String}`;

      // 将Object URL设置为<video>元素的src属性

      videoRef.current!.src = videoUrl;
    });
  }, []);

  return <video ref={videoRef}></video>;
};

export default Video;
