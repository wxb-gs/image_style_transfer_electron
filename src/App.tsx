import { Tabs, TabsProps } from "antd";
import React, { useLayoutEffect, useRef, useState } from "react";
import "./App.less";
import CustomMenu from "./components/other/CustomMenu";
import Editor from "./views/Editor/index";
import Home from "./views/Home";

type TargetKey = React.MouseEvent | React.KeyboardEvent | string;

const initialItems = [
  { label: "主页", children: <Home />, key: "1", closable: false },
  { label: "Tab 2", children: <Editor />, key: "2" },
];

const App: React.FC = () => {
  const [activeKey, setActiveKey] = useState(initialItems[0].key);
  const [items, setItems] = useState(initialItems);
  const [menuWidth, setMenuWidth] = useState(200);
  const menuRef = useRef<HTMLDivElement>(null);
  const newTabIndex = useRef(0);

  useLayoutEffect(() => {
    if (menuRef.current) {
      const { width } = menuRef.current.getBoundingClientRect();
      setMenuWidth(width);
    }
  }, []);

  const onChange = (newActiveKey: string) => {
    setActiveKey(newActiveKey);
  };

  const add = () => {
    const newActiveKey = `newTab${newTabIndex.current++}`;
    const newPanes = [...items];
    newPanes.push({
      label: "New Tab",
      children: "Content of new Tab",
      key: newActiveKey,
    });
    setItems(newPanes);
    setActiveKey(newActiveKey);
  };

  const remove = (targetKey: TargetKey) => {
    let newActiveKey = activeKey;
    let lastIndex = -1;
    items.forEach((item, i) => {
      if (item.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const newPanes = items.filter((item) => item.key !== targetKey);
    if (newPanes.length && newActiveKey === targetKey) {
      if (lastIndex >= 0) {
        newActiveKey = newPanes[lastIndex].key;
      } else {
        newActiveKey = newPanes[0].key;
      }
    }
    setItems(newPanes);
    setActiveKey(newActiveKey);
  };

  const onEdit = (
    targetKey: React.MouseEvent | React.KeyboardEvent | string,
    action: "add" | "remove"
  ) => {
    if (action === "add") {
      add();
    } else {
      remove(targetKey);
    }
  };

  const renderTabBar: TabsProps["renderTabBar"] = (props, DefaultTabBar) => (
    <DefaultTabBar
      {...props}
      style={{ left: menuWidth + "px" }}
    />
  );

  return (
    <>
      <div className="top-area"></div>
      <CustomMenu ref={menuRef} />
      <Tabs
        type="editable-card"
        renderTabBar={renderTabBar}
        animated={{ inkBar: true, tabPane: true }}
        onChange={onChange}
        activeKey={activeKey}
        onEdit={onEdit}
        items={items}
      />
    </>
  );
};

export default React.memo(App);
