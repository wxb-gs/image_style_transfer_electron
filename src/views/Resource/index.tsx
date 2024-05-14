import FilesSvg from "@/assets/files.svg";
import SvgContent from "@/assets/folder.svg";
import OtherSvg from "@/assets/other.svg";
import {
  AppstoreOutlined,
  BarsOutlined,
  MoreOutlined,
  RightSquareOutlined,
} from "@ant-design/icons";
import { Card, Empty, Segmented, Popover, Image, Typography } from "antd";
import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import "./resource.less";
import { useStore } from "@/hooks/useStore";
import {
  OPEN_FILE_DIALOG,
  SELECT_FILE_MESSAGE,
  LIMIT_IMAGE,
  DEFAULT_VIDEO,
} from "@/constants";
import requestAndProcessMessage from "../../utils/requestAndProcessMessage";
import { getSafePath, getFileType } from "@/utils/pathUtils";
import { List } from "antd";
type ListType = "list" | "grid";

const Resource = () => {
  const { recent, addTab } = useStore();
  const [type, setType] = useState<ListType>("list");
  const handleClickOpenFile = () => {
    requestAndProcessMessage(
      OPEN_FILE_DIALOG,
      SELECT_FILE_MESSAGE,
      null,
      (result) => {
        // 判断文件
        addTab(result, result);
      }
    );
  };
  const handleRealTime = () => {
    addTab("实时", ".camera");
  };
  const renderRecent = () => (
    <div className="list-wrapper">
      <List
        className="recent-list"
        bordered
        dataSource={recent}
        renderItem={({ url, name, time }: any) => (
          <List.Item>
            <div
              className="item"
              onClick={() => {
                addTab(name, url);
              }}>
              <div className="item-left">
                <div onClick={(e) => e.stopPropagation()}>
                  <Image
                    width={100}
                    src={
                      LIMIT_IMAGE.includes(getFileType(url)!)
                        ? getSafePath(url)
                        : getSafePath(DEFAULT_VIDEO)
                    }
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
                <div style={{ marginLeft: 40 }}>
                  <Typography.Paragraph
                    style={{ maxWidth: 280 }}
                    ellipsis>
                    <span style={{ color: "#5c5b5b" }}>文件名:</span>
                    <span style={{ fontSize: "17px", marginLeft: "4px" }}>
                      {name}
                    </span>
                  </Typography.Paragraph>
                  <Typography.Paragraph italic>
                    <span style={{ color: "#C4C4C4" }}>日期:</span>
                    <span style={{ fontSize: "16px", marginLeft: "14px" }}>
                      {time}
                    </span>
                  </Typography.Paragraph>
                </div>
              </div>
              <Popover
                trigger="click"
                content={
                  <div>
                    <p>浏览本地文件</p>
                    <p>删除历史记录</p>
                  </div>
                }>
                <MoreOutlined
                  onClick={(e) => e.stopPropagation()}
                  className="moreIcon"
                  style={{ fontSize: 20 }}
                />
              </Popover>
            </div>
          </List.Item>
        )}
      />
    </div>
  );

  return (
    <div className="resource">
      <div className="top">
        <div
          className="open-file"
          onClick={handleClickOpenFile}>
          <div className="left-sec">
            <ReactSVG src={SvgContent} />
            <p>打开文件</p>
          </div>
          <div className="right-sec">
            <RightSquareOutlined />
          </div>
        </div>
        <div className="batch">
          <ReactSVG src={FilesSvg} />
          <p>批量</p>
        </div>
        <div
          className="other"
          onClick={handleRealTime}>
          <ReactSVG src={OtherSvg} />
          <p>其他</p>
        </div>
      </div>

      <div className="bottom">
        <Card
          className="resource-card"
          title="最近文件"
          style={{ height: "100%" }}
          extra={
            <Segmented
              value={type}
              onChange={(value) => setType(value as ListType)}
              options={[
                { label: "列表", value: "list", icon: <BarsOutlined /> },
                {
                  label: "表格",
                  value: "grid",
                  icon: <AppstoreOutlined />,
                },
              ]}
            />
          }>
          {recent.length ? (
            renderRecent()
          ) : (
            <Empty description="无最近打开文件" />
          )}
        </Card>
      </div>
    </div>
  );
};

export default React.memo(Resource);
