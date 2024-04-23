import { sendMessage } from "@/requests/socket";
import { RenderComProps } from "@/types/global";
import { Image, Button } from "antd";
import { nanoid } from "nanoid";
import React from "react";
const ImageTransfer = ({ state, dispatch }: RenderComProps) => {
  const { images } = state;
  const handleClick = () => {
    sendMessage({ id: "123" });
  };
  return (
    <div>
      <Button onClick={handleClick}>测试一下</Button>
      {images.map((item) => (
        <img
          alt="nothing"
          src={item}
          key={nanoid()}
        />
      ))}
      <Image.PreviewGroup
        preview={{
          onChange: (current, prev) =>
            console.log(`current index: ${current}, prev index: ${prev}`),
        }}>
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
