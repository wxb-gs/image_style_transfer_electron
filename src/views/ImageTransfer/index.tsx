import {
  IMAGE_PATHS_MESSAGE,
  REQUEST_IMAGES,
  REQUEST_STYLES,
  STYLES_MESSAGE,
} from "@/constants";
import { sendMessage } from "@/requests/socket";
import { processResults } from "@/utils/pathUtils";
import { Button, Image } from "antd";
import React from "react";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
const ImageTransfer = () => {
  const [images, setImages] = useState<string[]>([]);
  const [styles, setStyles] = useState<string[]>([]);
  useEffect(() => {
    window.ipcRenderer.send(REQUEST_IMAGES);
    window.ipcRenderer.on(IMAGE_PATHS_MESSAGE, (_event, results) => {
      const imgs = processResults(results);
      setImages(imgs);
    });

    window.ipcRenderer.send(REQUEST_STYLES);
    window.ipcRenderer.on(STYLES_MESSAGE, (_event, results) =>
      setStyles(processResults(results))
    );
  }, []);
  const handleClick = () => {
    sendMessage({ id: "123" });
  };
  return (
    <div>
      <Button onClick={handleClick}>测试一下</Button>
      <Image.PreviewGroup
        preview={{
          onChange: (current, prev) =>
            console.log(`current index: ${current}, prev index: ${prev}`),
        }}>
        <input type="text" />
        {images.map((src) => {
          return (
            <img
              alt="12"
              src={src}
              key={nanoid()}
            />
          );
        })}
        <Image
          width={200}
          src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
        />
        <Image
          width={200}
          src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
        />
      </Image.PreviewGroup>
    </div>
  );
};

export default React.memo(ImageTransfer);
