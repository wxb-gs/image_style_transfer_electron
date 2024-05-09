import { useEditorStore } from "@/hooks/useEditorStore";
import { getSafePath, getFileType } from "@/utils/pathUtils";
import { Collapse, Dropdown, Empty, Image, Spin } from "antd";
import React, { useEffect, useMemo, useRef } from "react";
import "./result.less";
import { LIMIT_IMAGE } from "@/constants";

const TransferResult = React.memo(
  ({
    source,
    type,
  }: {
    source: string | undefined;
    type: "image" | "video";
  }) => {
    const { loading, resVideo } = useEditorStore();
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
      if (type == "video" && resVideo) {
        window.ipcRenderer.send("get_video_base64", resVideo);

        window.ipcRenderer.on("video-buffer_base64", (_e, { videoBuffer }) => {
          // 将Buffer转换为base64字符串

          const base64String = videoBuffer.toString("base64"); // 创建base64数据URI

          const videoUrl = `data:video/mp4;base64,${base64String}`; // 将Object URL设置为<video>元素的src属性

          if (videoRef.current) {
            videoRef.current.src = videoUrl;
          }
        });
      }
    }, [type, resVideo]);

    const renderContent = (
      <>
        {source ? (
          type == "image" && (
            <Image
              className="source-img"
              src={getSafePath(source)}
            />
          )
        ) : (
          <Empty description="点击上方开始转换按钮" />
        )}
        <video
          className={type == "image" || !resVideo ? "none" : ""}
          ref={videoRef}
          autoPlay
          loop
          controls></video>
      </>
    );
    return (
      <div className="flex flex-col w-full h-full">
        <div className="transfer-result">
          {loading ? <Spin /> : renderContent}
        </div>
      </div>
    );
  }
);

const TransferHistory = () => {
  const { histories } = useEditorStore();
  const handleClick = (path: string) => {
    console.log(path);
  };
  return (
    <div className="transfer-histories">
      <Image.PreviewGroup
        preview={{
          onChange: (current, prev) =>
            console.log(`current index: ${current}, prev index: ${prev}`),
        }}>
        {histories.length == 0 && <Empty description="暂无历史记录" />}
        {histories.map((path) => (
          <Dropdown
            menu={{
              items: [
                {
                  label: "另存为",
                  key: "1",
                  onClick: () => handleClick(path),
                },
              ],
            }}
            trigger={["contextMenu"]}>
            <Image
              width={120}
              src={getSafePath(path)}
            />
          </Dropdown>
        ))}
      </Image.PreviewGroup>
    </div>
  );
};

const Result = () => {
  const { source, resImg, resVideo } = useEditorStore();
  const fileType = useMemo(() => {
    const type = getFileType(source);
    if (type && LIMIT_IMAGE.includes(type)) return "image";
    else return "video";
  }, [source]);

  const result = useMemo(
    () => ({
      key: "1",
      label: "转换结果",
      children: (
        <TransferResult
          source={fileType == "image" ? resImg : resVideo}
          type={fileType}
        />
      ),
    }),
    [resImg, resVideo, fileType]
  );
  const history = useMemo(
    () => ({
      key: "2",
      label: "历史记录",
      children: <TransferHistory />,
    }),
    []
  );

  const items = [result, history];

  return (
    <Collapse
      defaultActiveKey={["1", "2"]}
      ghost
      items={items}
    />
  );
};

export default React.memo(Result);
