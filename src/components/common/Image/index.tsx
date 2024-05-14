import React from "react";
import {
  DownloadOutlined,
  RotateLeftOutlined,
  RotateRightOutlined,
  SwapOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
} from "@ant-design/icons";
import { Image, Space } from "antd";
import { CUSTOM_PROTOCOL } from "@/constants";
import { useEffect } from "react";

type Props = {
  src: string;
};

const MyImage: React.FC<Props> = ({ src }: Props) => {
  //   const onDownload = () => {
  //     window.ipcRenderer.send(
  //       "request_save",
  //       src.replace(`${CUSTOM_PROTOCOL}://`, "")
  //     );
  //   };

  const handleRightClick = () => {
    // console.log("右键点击");触发打开本地文件资源
    window.ipcRenderer.send(
      "request_local",
      src.replace(`${CUSTOM_PROTOCOL}://`, "")
    );
  };

  return (
    <Image
      onContextMenu={handleRightClick}
      src={src}
      //   preview={{
      //     toolbarRender: (
      //       _,
      //       {
      //         transform: { scale },
      //         actions: {
      //           onFlipY,
      //           onFlipX,
      //           onRotateLeft,
      //           onRotateRight,
      //           onZoomOut,
      //           onZoomIn,
      //         },
      //       }
      //     ) => (
      //       <Space
      //         size={12}
      //         className="toolbar-wrapper">
      //         <DownloadOutlined onClick={onDownload} />
      //         <SwapOutlined
      //           rotate={90}
      //           onClick={onFlipY}
      //         />
      //         <SwapOutlined onClick={onFlipX} />
      //         <RotateLeftOutlined onClick={onRotateLeft} />
      //         <RotateRightOutlined onClick={onRotateRight} />
      //         <ZoomOutOutlined
      //           disabled={scale === 1}
      //           onClick={onZoomOut}
      //         />
      //         <ZoomInOutlined
      //           disabled={scale === 50}
      //           onClick={onZoomIn}
      //         />
      //       </Space>
      //     ),
      //   }}
    />
  );
};

export default MyImage;
