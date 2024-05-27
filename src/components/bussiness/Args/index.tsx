import { CaretRightOutlined } from "@ant-design/icons";
import type { CollapseProps } from "antd";
import { Collapse, Segmented, Switch, theme } from "antd";
import type { CSSProperties } from "react";
import React from "react";
import "./args.less";
const text = "";

const BasicSetting = () => (
  <div className="basic-setting">
    <p>
      保留原图色彩：
      <Switch
        checkedChildren="开启"
        unCheckedChildren="关闭"
        // defaultChecked
      />
    </p>
    <p>
      中心剪裁:
      <Switch
        checkedChildren="开启"
        unCheckedChildren="关闭"
        // defaultChecked
      />
    </p>
    <p>
      清晰度(像素):
      <Segmented
        options={["160x120", "352x288", "512x512", "640x480", "720p", "1080p"]}
        onChange={(value) => {
          console.log(value); // string
        }}
      />
    </p>
    <p>
      生成图片格式:
      <Segmented
        options={["png", "jpg", "gif"]}
        onChange={(value) => {
          console.log(value); // string
        }}
      />
    </p>
    <p>
      生成视频格式:
      <Segmented
        options={["mp4", "avi"]}
        onChange={(value) => {
          console.log(value); // string
        }}
      />
    </p>
  </div>
);

const CustomSetting = () => (
  <div className="basic-setting">
    <p>
      {/* <Dropdown
        menu={[{ title: "134" }, { title: "transfer" }]}
        trigger={["contextMenu"]}>
        AdaIN
      </Dropdown> */}
    </p>
  </div>
);

const getItems: (panelStyle: CSSProperties) => CollapseProps["items"] = (
  panelStyle
) => [
  {
    key: "1",
    label: "基本设置",
    children: <BasicSetting />,
    style: panelStyle,
  },
  //   {
  //     key: "2",
  //     label: "自定义风格",
  //     children: <CustomSetting />,
  //     style: panelStyle,
  //   },
  //   {
  //     key: "3",
  //     label: "模型选择",
  //     children: <p>{text}</p>,
  //     style: panelStyle,
  //   },
];

const Args: React.FC = () => {
  const { token } = theme.useToken();

  const panelStyle: React.CSSProperties = {
    marginTop: 10,
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: "none",
  };

  return (
    <Collapse
      bordered={false}
      defaultActiveKey={["1"]}
      expandIcon={({ isActive }) => (
        <CaretRightOutlined rotate={isActive ? 90 : 0} />
      )}
      style={{ background: token.colorBgContainer, overflow: "hidden" }}
      items={getItems(panelStyle)}
    />
  );
};

export default Args;
