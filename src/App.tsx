import { useStore } from "@/hooks/useStore";
import { Tabs, TabsProps } from "antd";
import React, { useLayoutEffect, useRef, useState } from "react";
import { SET_TABS } from "./actions/setTabs";
import "./App.less";
import CustomMenu from "./components/other/CustomMenu";
import { OPEN_FILE_DIALOG, SELECT_FILE_MESSAGE } from "./constants";
import requestAndProcessMessage from "./utils/requestAndProcessMessage";

type TargetKey = React.MouseEvent | React.KeyboardEvent | string;

const App: React.FC = () => {
  const { tabs, dispatch, addTab } = useStore();
  const { items, activeKey } = tabs;
  const [menuWidth, setMenuWidth] = useState(200);
  const menuRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (menuRef.current) {
      const { width } = menuRef.current.getBoundingClientRect();
      setMenuWidth(width);
    }
  }, []);

  const onChange = (newActiveKey: string) => {
    dispatch({
      type: SET_TABS,
      payload: {
        activeKey: newActiveKey,
      },
    });
  };

  const add = () => {
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
    dispatch({
      type: SET_TABS,
      payload: {
        items: newPanes,
        activeKey: newActiveKey,
      },
    });
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
