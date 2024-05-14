import { REQUEST_WRITE_STYLES } from "@/constants";
import { useEditorStore } from "@/hooks/useEditorStore";
import { useStore } from "@/hooks/useStore";
import { getSafePath } from "@/utils/pathUtils";
import { CaretRightOutlined, DeleteOutlined } from "@ant-design/icons";
import {
  Collapse,
  CollapseProps,
  Dropdown,
  MenuProps,
  Tooltip,
  theme,
} from "antd";
import { Resizable } from "re-resizable";
import { CSSProperties, useCallback, useMemo } from "react";
import { ADD_STYLES } from "../../../actions/addStyles";
import "./selectStyle.less";
const DEFAULT_MAX_HEIGHT = 140;
const DEAULT_MIN_HEIGHT = 2;

// 风格图片
const StyleImage = ({ name, path, selectedMap, handleClick }: any) => {
  const { styles: globalStyls, dispatch } = useStore();
  const { styles, setStyles } = useEditorStore();
  const weight = useMemo(() => {
    const style = styles.find(({ key }) => name == key);
    if (style) {
      return style.weight;
    }
    return 1;
  }, [styles]);

  // 设置权重
  const setWeight = useCallback(
    (num: number) => {
      const newStyles = [...styles];
      const style = newStyles.find(({ key }) => name == key);
      style!.weight = num;
      setStyles(newStyles);
    },
    [styles]
  );
  const handleContextMenu = () => {
    // delete the name from recent.json 的styles中
    const newGlobalStyles = globalStyls.filter((item) => item.key != name);
    dispatch({
      ADD_STYLES,
      payload: {
        styles: newGlobalStyles,
      },
    });
    // 请求写入
    window.ipcRenderer.send(REQUEST_WRITE_STYLES, newGlobalStyles);
    window.ipcRenderer.send("want_update_styles");
  };
  const items: MenuProps["items"] = [
    {
      label: "删除",
      key: "1",
      icon: <DeleteOutlined />,
      onClick: handleContextMenu,
    },
  ];

  return (
    <Dropdown
      trigger={["contextMenu"]}
      menu={{ items }}>
      <div
        className={[
          "img-container",
          selectedMap.has(name) ? "active" : "",
        ].join(" ")}
        key={name}>
        <p onClick={() => handleClick(name)}>{name} </p>
        <div className={["style-content"].join(" ")}>
          <img
            alt=""
            src={getSafePath(path)}
            key={name}
          />
          <div
            className="mask"
            onClick={() => handleClick(name)}></div>
          {selectedMap.has(name) && (
            <Tooltip title={`${(weight * 100).toFixed(0)}%`}>
              <Resizable
                className="resize-mask"
                enable={{ bottom: true }}
                handleClasses={{ bottom: "my-topBar" }}
                maxHeight={DEFAULT_MAX_HEIGHT}
                minHeight={DEAULT_MIN_HEIGHT}
                onResize={(_e, _d, _ref, _delta) => {
                  const height = _ref.clientHeight;
                  const alpha =
                    1 -
                    (1.0 * (height - DEAULT_MIN_HEIGHT)) / DEFAULT_MAX_HEIGHT;
                  setWeight(parseFloat(alpha.toFixed(2)));
                }}
                defaultSize={{
                  height: (1 - weight) * DEFAULT_MAX_HEIGHT,
                  width: 140,
                }}></Resizable>
            </Tooltip>
          )}
        </div>
      </div>
    </Dropdown>
  );
};

// 选择风格界面
const SelectStyle = () => {
  const { styles: _styles } = useStore();
  const { token } = theme.useToken();
  const { styles: selectStyles, setStyles: setSelectStyles } = useEditorStore();
  const styles = useMemo(() => {
    const arr = _styles.filter((item) => item.isCustom == false);
    return arr.map((item) => ({ name: item.key, path: item.path }));
  }, [_styles]);
  const customStyles = useMemo(() => {
    const arr = _styles.filter((item) => item.isCustom == true);
    return arr.map((item) => ({ name: item.key, path: item.path }));
  }, [_styles]);
  const selectedMap = useMemo(() => {
    const map = new Map();
    selectStyles.forEach((item) => {
      map.set(item.key, item);
    });
    return map;
  }, [selectStyles]);
  const panelStyle: React.CSSProperties = {
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: "none",
  };

  const addStyle = () => {
    window.ipcRenderer.send("request_add_style");
  };
  const renderCustom = () => (
    <div className="style-imgs">
      {customStyles.map(({ name, path }: any) => (
        <StyleImage
          name={name}
          path={path}
          key={path}
          selectedMap={selectedMap}
          handleClick={handleClick}
        />
      ))}
      <div
        className="style-add"
        onClick={addStyle}>
        <img
          alt=""
          src="../../../../public/add.png"
        />
      </div>
    </div>
  );

  const getItems: (panelStyle: CSSProperties) => CollapseProps["items"] =
    useCallback(
      (panelStyle) => [
        {
          key: "1",
          label: "预定义",
          children: (
            <div className="style-imgs">
              {styles.map(({ name, path }: any) => (
                <StyleImage
                  name={name}
                  path={path}
                  key={path}
                  selectedMap={selectedMap}
                  handleClick={handleClick}
                />
              ))}
            </div>
          ),
          style: panelStyle,
        },
        {
          key: "2",
          label: "自定义",
          children: renderCustom(),
          style: panelStyle,
        },
      ],
      [_styles, styles, customStyles, selectedMap]
    );

  const handleClick = (keyName: string) => {
    const { path }: any = _styles.find((item: any) => item.key == keyName);

    if (!selectedMap.has(keyName)) {
      const item = {
        key: keyName,
        path: path,
        weight: 1,
      };
      setSelectStyles([...selectStyles, item]);
    } else {
      const newSelectStyles = selectStyles.filter(({ key }) => keyName != key);
      setSelectStyles(newSelectStyles);
    }
  };

  return (
    <Collapse
      bordered={false}
      defaultActiveKey={["1", "2"]}
      expandIcon={({ isActive }) => (
        <CaretRightOutlined rotate={isActive ? 90 : 0} />
      )}
      style={{ marginTop: "10px" }}
      items={getItems(panelStyle)}
    />
  );
};

export default SelectStyle;
