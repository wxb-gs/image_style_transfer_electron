import React, { useState } from "react";
import Image from "@/components/common/Image";
import { Pagination, PaginationProps } from "antd";
import "./imageTransfer.less";
import { useEffect } from "react";
import requestAndProcessMessage from "../../utils/requestAndProcessMessage";
import { getSafePath } from "@/utils/pathUtils";
import { Image as MyImage } from "antd";
import { LIMIT_IMAGE } from "@/constants";
import Video from "@/components/common/Video";
const ImageTransfer = () => {
  const [current, setCurrent] = useState(1);
  const onChange: PaginationProps["onChange"] = (page) => {
    console.log(page);
    setCurrent(page);
  };
  const [result, setResult] = useState([]);
  //   加载
  useEffect(() => {
    requestAndProcessMessage(
      "get_trans_histories",
      "send-trans-histories",
      null,
      (result) => {
        setResult(result);
      }
    );
  }, []);

  return (
    <div className="trans-histories">
      <div className="trans-images">
        <MyImage.PreviewGroup>
          {result.map((item: any) =>
            LIMIT_IMAGE.includes(item.type) ? (
              <Image
                src={getSafePath(item.path)}
                key={item.path}
              />
            ) : (
              <Video src={item.path} />
            )
          )}
        </MyImage.PreviewGroup>
      </div>
      <div className="trans-footer">
        <Pagination
          defaultCurrent={1}
          total={4}
        />
      </div>
    </div>
  );
};

export default React.memo(ImageTransfer);
