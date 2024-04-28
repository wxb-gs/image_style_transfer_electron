// import { TAB_KEYS } from "@/constants";
// import {
//   DesktopOutlined,
//   PieChartOutlined,
//   TeamOutlined,
// } from "@ant-design/icons";
// import type { MenuProps } from "antd";
// import { Layout, Menu } from "antd";
// import React, { useMemo, useState } from "react";
// const { Content, Sider } = Layout;
// import KeepAlive from "keepalive-for-react";
// import Resource from "@/views/Resource";
// import ImageTransfer from "../ImageTransfer";
// import VideoTransfer from "../VideoTransfer";
// import "./home.less";

// type MenuItem = Required<MenuProps>["items"][number];

// function getItem(
//   label: React.ReactNode,
//   key: TabKey,
//   icon?: React.ReactNode,
//   children?: MenuItem[]
// ): MenuItem {
//   return {
//     key,
//     icon,
//     children,
//     label,
//   } as MenuItem;
// }

// const items: MenuItem[] = [
//   getItem("资源库", TAB_KEYS.RESOURCE, <PieChartOutlined />),
//   getItem("风格转换", "sub1", <TeamOutlined />, [
//     getItem("图片转换", TAB_KEYS.IMAGE_TRANSFER, <DesktopOutlined />),
//     getItem("视频转换", TAB_KEYS.VIDEO_TRANSFER, <DesktopOutlined />),
//   ]),
// ];

// const tabItems = [
//   { name: TAB_KEYS.RESOURCE, cache: true, component: Resource },
//   { name: TAB_KEYS.IMAGE_TRANSFER, cache: true, component: ImageTransfer },
//   { name: TAB_KEYS.VIDEO_TRANSFER, cache: true, component: VideoTransfer },
// ];

// const backgroundColor = { backgroundColor: "#EDEDED" };

// const defaultKey = [TAB_KEYS.RESOURCE];

// const Home: React.FC = () => {
//   const [collapsed, setCollapsed] = useState(false);
//   const [selectedKey, setSelectedKey] = useState<string[]>(defaultKey);
//   const page = useMemo(() => {
//     return tabItems.find((tab) => tab.name === selectedKey[0]);
//   }, [selectedKey]);
//   const handleSelected = ({ selectedKeys }: any) => {
//     setSelectedKey(selectedKeys);
//   };

//   return (
//     <Layout style={{ maxHeight: "100%", height: "100%" }}>
//       <Sider
//         theme="light"
//         collapsible
//         style={backgroundColor}
//         collapsed={collapsed}
//         onCollapse={(value) => setCollapsed(value)}>
//         <Menu
//           style={backgroundColor}
//           defaultSelectedKeys={defaultKey}
//           defaultOpenKeys={["sub1"]}
//           selectedKeys={selectedKey}
//           onSelect={handleSelected}
//           mode="inline"
//           items={items}
//         />
//       </Sider>
//       <Layout style={{ margin: "0 0 10px 16px" }}>
//         {/* <Header style={{ padding: 0, background: colorBgContainer }} /> */}
//         <Content>
//           <KeepAlive
//             max={20}
//             strategy={"PRE"}
//             activeName={selectedKey[0]}
//             cache={page?.cache}>
//             {page && <page.component />}
//           </KeepAlive>
//         </Content>
//       </Layout>
//     </Layout>
//   );
// };

// export default Home;

import { useEffect, useRef } from "react";
type Props = {};

const Home = (props: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    window.ipcRenderer.send("get_video", "/example.mp4");
    window.ipcRenderer.on("video-buffer", (_e, { videoBuffer }) => {
      // 将Buffer转换为base64字符串
      const base64String = videoBuffer.toString("base64");
      // 创建base64数据URI
      const videoUrl = `data:video/mp4;base64,${base64String}`;
      // 将Object URL设置为<video>元素的src属性
      videoRef.current!.src = videoUrl;
    });
  }, []);
  return (
    <div className="home">
      <video
        id="video-tag"
        ref={videoRef}
        autoPlay
        loop
        controls={false}></video>
    </div>
  );
};
export default Home;
