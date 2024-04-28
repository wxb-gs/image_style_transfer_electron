import { Collapse, Image } from "antd";
import { Resizable } from "re-resizable";
import { useMemo, useState, useRef } from "react";
import "./result.less";

const TransferResult = () => {
  //   const [width, setWidth] = useState(50);
  //   const [height, setHeight] = useState(50);
  const imgRef = useRef<HTMLImageElement>(null);
  return (
    <div className="flex flex-col w-full h-full">
      <div className="transfer-result">
        {/* <div className="result-container flex relative">
          <div className="source-container">
            <img
              className="source-img"
              src="custom:E:\myAllProjects\vue\electron-vite-project\src\assets\styles\antimonocromatismo.jpg"
              ref={imgRef}
            />
          </div>
          <Resizable
            enable={{ right: true }}
            handleClasses={{ right: "cover-bar" }}
            defaultSize={{ height: "100%", width: 50 }}
            // onResize={(_e, _d, _n, { width }) => setWidth(width)}
            className="transfer-cover"
            minWidth={0}
            maxWidth={"100%"}>
            <div>
              <img
                className="source-img"
                src="custom:E:\myAllProjects\vue\electron-vite-project\src\assets\styles\trial.jpg"
              />
            </div>
          </Resizable>
        </div> */}
        <img
          className="source-img"
          src="custom:E:\myAllProjects\vue\electron-vite-project\src\assets\styles\trial.jpg"
        />
      </div>
    </div>
  );
};

const TransferHistory = () => {
  return (
    <div>
      <Image.PreviewGroup
        preview={{
          onChange: (current, prev) =>
            console.log(`current index: ${current}, prev index: ${prev}`),
        }}>
        <Image
          width={200}
          src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
        />
        <Image
          width={200}
          src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
        />
      </Image.PreviewGroup>
    </div>
  );
};

const Result = () => {
  const [left, setLeft] = useState();
  const result = useMemo(
    () => ({
      key: "1",
      label: "转换结果",
      children: <TransferResult />,
    }),
    []
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

export default Result;
