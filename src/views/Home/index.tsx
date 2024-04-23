import { TAB_KEYS } from "@/constants";
import {
  DesktopOutlined,
  PieChartOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import React, { useState } from "react";
import SelectContent from "./SelectContent";
const { Content, Sider } = Layout;
type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: TabKey,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("资源库", TAB_KEYS.RESOURCE, <PieChartOutlined />),
  getItem("风格转换", "sub1", <TeamOutlined />, [
    getItem("图片转换", TAB_KEYS.IMAGE_TRANSFER, <DesktopOutlined />),
    getItem("视频转换", TAB_KEYS.VIDEO_TRANSFER, <DesktopOutlined />),
  ]),
];

const backgroundColor = { backgroundColor: "#EDEDED" };

const defaultKey = [TAB_KEYS.RESOURCE];

const Home: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState<string[]>(defaultKey);
  const handleSelected = ({ selectedKeys }: any) => {
    setSelectedKey(selectedKeys);
  };
  return (
    <Layout style={{ minHeight: "100%" }}>
      <Sider
        theme="light"
        collapsible
        style={backgroundColor}
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}>
        <Menu
          style={backgroundColor}
          defaultSelectedKeys={defaultKey}
          defaultOpenKeys={["sub1"]}
          selectedKeys={selectedKey}
          onSelect={handleSelected}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        {/* <Header style={{ padding: 0, background: colorBgContainer }} /> */}
        <Content style={{ margin: "0 16px" }}>
          {/* 如果我们不希望状态消失,那么请提取到父组件中进行保存 */}
          <SelectContent tabKey={selectedKey[0]} />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;
