import svgContent from "@/assets/react.svg";
import {
  CLOSE_WINDOW,
  MAXIMIZE_MESSAGE,
  MAXIMIZE_WINDOW,
  MenuExample,
  MINIMIZW_WINDOW,
} from "@/constants";
import {
  CloseOutlined,
  FullscreenExitOutlined,
  FullscreenOutlined,
  MinusOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Divider } from "antd";
import { forwardRef, useState } from "react";
import { ReactSVG } from "react-svg";
import "./CustomMenu.less";
export const MyDivider = () => (
  <Divider
    type="vertical"
    style={{ height: "25px", background: "#c5c2c2" }}
  />
);

const CustomMenu = forwardRef<HTMLDivElement>((props, ref) => {
  const [fullScreen, setFullScree] = useState(false);
  const handleFullScreenClick = () => {
    window.ipcRenderer.send(MAXIMIZE_WINDOW);
    window.ipcRenderer.on(MAXIMIZE_MESSAGE, (_event, data) => {
      setFullScree(data);
    });
  };
  //   处理最小化点击
  const handleMinusScreenClick = () => {
    window.ipcRenderer.send(MINIMIZW_WINDOW);
  };
  const handleCloseClick = () => {
    window.ipcRenderer.send(CLOSE_WINDOW);
  };
  return (
    <div
      className="custom-menu"
      ref={ref}>
      <div className="logo">
        <ReactSVG src={svgContent} />
        图像风格转换应用
      </div>
      <MyDivider />
      <div className="menu">
        <Dropdown
          menu={{ items: MenuExample }}
          trigger={["click"]}
          placement="bottom">
          <Button type="text">文件</Button>
        </Dropdown>
        <Dropdown
          menu={{ items: MenuExample }}
          trigger={["click"]}
          placement="bottom">
          <Button type="text">帮助</Button>
        </Dropdown>
      </div>
      <MyDivider />
      <div className="controls">
        <MinusOutlined onClick={handleMinusScreenClick} />
        {fullScreen ? (
          <FullscreenExitOutlined onClick={handleFullScreenClick} />
        ) : (
          <FullscreenOutlined onClick={handleFullScreenClick} />
        )}
        <CloseOutlined onClick={handleCloseClick} />
      </div>
    </div>
  );
});
export default CustomMenu;
