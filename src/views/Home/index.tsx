import { TAB_KEYS } from "@/constants";
import {
  ClockCircleOutlined,
  ProfileOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import KeepAlive from "keepalive-for-react";
import React, { useMemo, useState } from "react";
import Resource from "../Resource";
import Setting from "../Setting";
import "./home.less";
import ImageTransfer from "../ImageTransfer";
const { Content, Sider } = Layout;
type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: TabKey,
  icon: React.ReactNode,
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
  getItem("最近", TAB_KEYS.RESOURCE, <ClockCircleOutlined />),
  getItem("转换记录", TAB_KEYS.IMAGE_TRANSFER, <ProfileOutlined />),
  getItem("设置", TAB_KEYS.SETTING, <SettingOutlined />),
];

const tabInfo = {
  [TAB_KEYS.RESOURCE]: {
    label: TAB_KEYS.RESOURCE,
    cache: true,
    component: Resource,
  },
  [TAB_KEYS.IMAGE_TRANSFER]: {
    label: TAB_KEYS.IMAGE_TRANSFER,
    cache: false,
    component: ImageTransfer,
  },
  [TAB_KEYS.SETTING]: {
    label: TAB_KEYS.SETTING,
    cache: false,
    component: Setting,
  },
};

const backgroundColor = { backgroundColor: "#EDEDED" };

const defaultKey = [TAB_KEYS.RESOURCE];

const Home: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState<string[]>(defaultKey);
  const page = useMemo(() => {
    const key = selectedKey[0];
    console.log(tabInfo[key]);
    return tabInfo[key];
  }, [selectedKey[0]]);
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
        <Content>
          <KeepAlive
            max={20}
            strategy={"PRE"}
            activeName={page?.label}
            cache={page?.cache}>
            {page && <page.component />}
          </KeepAlive>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;
