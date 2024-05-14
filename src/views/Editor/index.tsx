import ImageEditor from "@/components/bussiness/ImageEditor";
import VideoEditor from "@/components/bussiness/VideoEditor";
import { LIMIT_CAMERA, LIMIT_VIDEO, LIMIT_IMAGE } from "@/constants";
import { useEditorStore } from "@/hooks/useEditorStore";
import {
  sendMessage,
  sendTextMessage,
  sendTransfer,
  socket,
} from "@/requests/socket";
import { getFileType } from "@/utils/pathUtils";
import {
  EyeInvisibleOutlined,
  EyeOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Button, Card, FloatButton, message, notification } from "antd";
import Progress from "@/components/common/Progress";
import { Resizable } from "re-resizable";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Config from "./Config";
import "./editor.less";
import Camera from "@/components/bussiness/Camera";

const Editor = () => {
  const {
    source,
    loading,
    startText,
    text,
    styles,
    setProgress,
    setResVideo,
    setLoading,
    setHistories,
    setResImg,
  } = useEditorStore();
  const [messageApi, contextHolder] = message.useMessage();
  const [notificationApi, noteContextHolder] = notification.useNotification();
  const imageRef = useRef();
  const videoRef = useRef<any>(null);
  const [hiddenTransfer, setHiddenTransfer] = useState(false);
  const isFirst = useRef(false);
  const fileType = useMemo(() => {
    const type = getFileType(source);
    if (type) {
      if (LIMIT_VIDEO.includes(type)) return "video";
      else if (LIMIT_CAMERA == type) return "camera";
    }
    return "image";
  }, [source]);

  //本地文件保存后直接处理
  const listener = useCallback(() => {
    console.log("file save");
    console.log(styles);
    if (!startText) {
      sendMessage({
        content_paths: [
          "E:\\myAllProjects\\vue\\electron-vite-project\\dist-electron\\data\\temp\\temp.jpg",
        ],
        style_paths: styles.map((item) => item.path),
        alpha: styles[0].weight,
        weights: styles.map((item) => item.weight),
      } as any);
    } else {
      sendTextMessage({
        content_path:
          "E:\\myAllProjects\\vue\\electron-vite-project\\dist-electron\\data\\temp\\temp.jpg",
        style: text,
      });
    }
  }, [text, startText, styles]);

  useEffect(() => {
    isFirst.current = false;
    window.ipcRenderer.on("get_ready_transfer", listener);
    return () => {
      window.ipcRenderer.removeAllListeners("get_ready_transfer");
    };
  }, [listener]);

  //监听图片转化结束
  useEffect(() => {
    const listener = (res: any) => {
      setResImg(res.filePath);
      setHistories((histories: any) => [res.filePath, ...histories]);
      setLoading(false);
      messageApi.success("转换成功");
    };
    socket.on("transfer-over", listener);
    return () => {
      socket.off("transfer-over", listener);
    };
  }, []);

  //监听视频转化进度
  useEffect(() => {
    const progressListener = (res: any) => {
      const { now, total }: any = res;
      setProgress({ now, total });
    };
    socket.on("progress", progressListener);
    return () => {
      socket.off("progress", progressListener);
    };
  }, []);

  //监听视频转化结束
  useEffect(() => {
    const videoTransOverListener = ({ filePath }: any) => {
      setResVideo(filePath);
      setTimeout(() => {
        setLoading(false);
        notificationApi.destroy("1");
      }, 1000);
    };
    socket.on("transfer-video-over", videoTransOverListener);
    return () => {
      socket.off("transfer-video-over", videoTransOverListener);
    };
  }, []);

  //打开通知的方法
  const openNotification = () => {
    notificationApi.info({
      key: "1",
      message: "视频正在转化中",
      description: <Progress />,
      duration: null,
      placement: "bottomLeft",
    });
  };

  const toggleHidden = () => {
    if (!hiddenTransfer) {
      setHiddenTransfer(true);
    } else {
      setHiddenTransfer(false);
    }
  };
  // 视频转换流程
  const videoTransfer = (transform: any, videoSrc: any) => {
    console.log(transform, videoSrc);
    const { time } = transform;
    sendTransfer({
      content_video: source,
      style_paths: styles.map((item) => item.path),
      alpha: styles[0].weight,
      weights: styles.map((item) => item.weight),
      in: time.in,
      out: time.out,
    });
    openNotification();
    setTimeout(() => {
      setLoading((state: boolean) => {
        if (state) {
          messageApi.error("超时出错,未转化成功");
          return false;
        }
        return state;
      });
    }, 3 * 60 * 1000);
  };

  //开始转换方法
  const startTransfer = () => {
    if (styles.length == 0) {
      messageApi.warning("请选择风格");
      return;
    }
    setLoading(true);
    if (fileType == "image") {
      setTimeout(() => {
        setLoading((state: boolean) => {
          if (state) {
            messageApi.error("超时出错,未转化成功");
            return false;
          }
          return state;
        });
      }, 15000);
      const fn = imageRef.current as any;
      const { imageData, hideLoadingSpinner } = fn({}, true, false);
      hideLoadingSpinner();
      const imageBase64 = imageData.imageBase64;
      window.ipcRenderer.send("transfer", imageBase64);
    } else if (fileType == "video") {
      // 触发save，在save中写逻辑
      videoRef.current.clickSave();
    }
  };

  // transform,videoSrc
  const onSave = (transform: any, videoSrc: any) => {
    videoTransfer(transform, videoSrc);
  };

  return (
    <>
      {contextHolder}
      {noteContextHolder}
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
        {fileType == "image" && (
          <ImageEditor
            ref={imageRef}
            source={source}
          />
        )}
        {fileType == "video" && (
          <VideoEditor
            ref={videoRef}
            onSave={onSave}
            source={source}
          />
        )}
        {fileType == "camera" && <Camera />}
        <Resizable
          enable={{ left: true }}
          handleClasses={{ left: "left-bar" }}
          maxWidth={"800px"}
          minWidth={"200px"}
          defaultSize={{ width: "660px", height: "100%" }}
          className={[
            "right-section",
            hiddenTransfer ? "right-hidden" : "",
            isFirst.current ? "right-none" : "",
          ].join(" ")}>
          <Card
            className="right-config"
            title="风格转换"
            bordered={false}
            extra={
              <Button
                loading={loading}
                type="primary"
                onClick={startTransfer}>
                开始转换
              </Button>
            }>
            <div className="right-down-config">
              <Config />
            </div>
          </Card>
        </Resizable>
      </div>
    </>
  );
};

export default React.memo(Editor);
