import { Button, Divider, Dropdown } from "antd";
import { forwardRef, ReactNode } from "react";
import "./CustomMenu.less";
import { ReactSVG } from "react-svg";
import svgContent from "@/assets/react.svg";
import { MenuExample } from "@/constants";
const MyDivider = () => (
  <Divider
    type="vertical"
    style={{ height: "25px", background: "#c5c2c2" }}
  />
);

const CustomMenu = forwardRef<HTMLDivElement>((props, ref) => {
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
    </div>
  );
});

export default CustomMenu;
