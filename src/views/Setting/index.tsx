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

        // canvas!.width = video.videoWidth;
        // canvas!.height = video.videoHeight;
        // const width = 512;
        // const height = 256;
        console.log(video.videoHeight, video.videoHeight);
        if (canvas) {
          canvas.width = 512;
          canvas.height = 512;
        }
        canvas!.getContext("2d")!.drawImage(video, 0, 0, 300, 150);
        // 将canvas转换为base64字符串

        const imageData = canvas!.toDataURL("image/jpeg");
        // 发送当前帧到服务器
        socket.emit("video_frame", imageData);
      }, 1000 / 5); // 大约5帧每秒
    }
    if (displayCanvas.current) {
      //   const processedVideo = processedVideoRef.current;
      const ctx = displayCanvas.current?.getContext("2d");
      // 监听服务器发送的处理后的帧
      socket.on("processed_frame", (processedFrame) => {
        // 将接收到的图像数据转换为Blob对象
        console.log("transfer result");
        const blob = new Blob([processedFrame], { type: "image/jpeg" });
        // // 更新video元素的srcObject属性以显示新的帧
        // processedVideo!.src = URL.createObjectURL(blob);
        const img = new Image();
        img.onload = () => {
          // 绘制图像到 canvas
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
      {/* <video
        ref={processedVideoRef}
        width="640"
        height="480"
        autoPlay></video> */}
      <canvas
        style={{ width: "512px", height: "384px" }}
        ref={displayCanvas}></canvas>
    </div>
  );
};

export default Setting;
