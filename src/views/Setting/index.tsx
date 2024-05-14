import { socket } from "@/requests/socket";
import { useEffect, useRef } from "react";

const Setting = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  //   const processedVideoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const displayCanvas = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    let intervalFuncId = null;
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      console.log(video);
      // 设置getUserMedia获取视频流
      navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
        video.srcObject = stream;
        video.play();
      });

      // 每隔一段时间发送一帧到服务器
      intervalFuncId = setInterval(() => {
        const canvas = canvasRef.current;
        console.log(video.videoHeight, video.videoHeight);
        if (canvas) {
          canvas.width = 512;
          canvas.height = 512;
        }
        canvas!.getContext("2d")!.drawImage(video, 0, 0, 300, 150);
        const imageData = canvas!.toDataURL("image/jpeg");
        socket.emit("video_frame", imageData);
      }, 1000 / 10); // 大约5帧每秒
    }
    if (displayCanvas.current) {
      const ctx = displayCanvas.current?.getContext("2d");
      socket.on("processed_frame", (processedFrame) => {
        console.log("transfer result");
        const blob = new Blob([processedFrame], { type: "image/jpeg" });
        const img = new Image();
        img.onload = () => {
          ctx!.drawImage(img, 0, 0);
        };
        img.src = URL.createObjectURL(blob);
      });
    }
    return () => {
      if (intervalFuncId) clearInterval(intervalFuncId);
      socket.off("processed_frame");
    };
  }, []);
  return (
    <div className="flex">
      <canvas
        ref={canvasRef}
        style={{ display: "none" }}></canvas>
      <video
        ref={videoRef}
        width="512px"
        height="384px"
        autoPlay></video>
      <canvas
        style={{ width: "512px", height: "384px" }}
        ref={displayCanvas}></canvas>
    </div>
  );
};

export default Setting;
