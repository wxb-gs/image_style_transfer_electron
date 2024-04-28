import ImageEditor from "@/components/bussiness/ImageEditor";
import {
  EyeInvisibleOutlined,
  EyeOutlined,
  RightOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Card, FloatButton } from "antd";
import { Resizable } from "re-resizable";
import { useState, useRef, useEffect } from "react";
import Config from "./Config";
import "./editor.less";
import Buttons from "./Buttons";

const Editor = () => {
  const [hiddenTransfer, setHiddenTransfer] = useState(false);
  const isFirst = useRef(false);
  useEffect(() => {
    isFirst.current = false;
  }, []);
  const toggleHidden = () => {
    if (!hiddenTransfer) {
      setHiddenTransfer(true);
    } else {
      setHiddenTransfer(false);
    }
  };
  return (
    <div className="relative flex w-full h-full editor">
      <FloatButton.Group
        trigger="hover"
        type="primary"
        style={{ right: 45, zIndex: 100000 }}
        icon={<SettingOutlined />}>
        <FloatButton
          tooltip={!hiddenTransfer ? "隐藏风格转换面板" : "显示风格转换面板"}
          icon={
            !hiddenTransfer ? (
              <EyeInvisibleOutlined onClick={toggleHidden} />
            ) : (
              <EyeOutlined onClick={toggleHidden} />
            )
          }
        />
      </FloatButton.Group>
      <ImageEditor />

      <Resizable
        enable={{ left: true }}
        handleClasses={{ left: "left-bar" }}
        maxWidth={"800px"}
        minWidth={"200px"}
        defaultSize={{ width: "600px", height: "100%" }}
        className={[
          "right-section",
          hiddenTransfer ? "right-hidden" : "",
          isFirst.current ? "right-none" : "",
        ].join(" ")}>
        <Card
          className="right-config"
          title="AI风格转换"
          bordered={false}
          extra={
            <>
              <RightOutlined
                className="right-outlined"
                onClick={toggleHidden}
              />
            </>
          }>
          <div className="right-down-config">
            <Config />
          </div>
        </Card>
      </Resizable>
    </div>
  );
};

export default Editor;
