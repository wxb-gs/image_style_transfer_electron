import { useEditorStore } from "@/hooks/useEditorStore";
import { useStore } from "@/hooks/useStore";
import { getSafePath } from "@/utils/pathUtils";
import { Tooltip } from "antd";
import { Resizable } from "re-resizable";
import { useMemo, useState, useCallback } from "react";
import "./selectStyle.less";
const DEFAULT_MAX_HEIGHT = 140;
const DEAULT_MIN_HEIGHT = 2;
const StyleImage = ({ name, path, selectedMap, handleClick }: any) => {
  const { styles, setStyles } = useEditorStore();
  const weight = useMemo(() => {
    const style = styles.find(({ key }) => name == key);
    if (style) {
      return style.weight;
    }
    return 1;
  }, [styles]);
  const setWeight = useCallback(
    (num: number) => {
      const newStyles = [...styles];
      const style = newStyles.find(({ key }) => name == key);
      style!.weight = num;
      setStyles(newStyles);
    },
    [styles]
  );
  return (
    <div
      className={["img-container", selectedMap.has(name) ? "active" : ""].join(
        " "
      )}
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
                  1 - (1.0 * (height - DEAULT_MIN_HEIGHT)) / DEFAULT_MAX_HEIGHT;
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
  );
};

const SelectStyle = () => {
  const { styles } = useStore();
  const { styles: selectStyles, setStyles: setSelectStyles } = useEditorStore();
  const selectedMap = useMemo(() => {
    const map = new Map();
    selectStyles.forEach((item) => {
      map.set(item.key, item);
    });
    return map;
  }, [selectStyles]);
  const handleClick = (keyName: string) => {
    const { path }: any = styles.find((item: any) => item.name == keyName);

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
  );
};

export default SelectStyle;
