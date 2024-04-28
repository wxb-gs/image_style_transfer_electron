import Result from "@/components/bussiness/Result";
import SelectStyle from "@/components/bussiness/SelectStyle";
import { Segmented } from "antd";
import { AnimatePresence, motion } from "framer-motion";
import KeepAlive, { useKeepaliveRef } from "keepalive-for-react";
import React, { useMemo, useState } from "react";
import "./config.less";
type Option = {
  label: string;
  cache: boolean;
  component: React.FC;
};

const text = () => <p>123</p>;

const OPTIONS: Option[] = [
  { label: "结果", cache: true, component: Result },
  {
    label: "风格选择",
    cache: true,
    component: SelectStyle,
  },
  { label: "自定义参数", cache: true, component: text },
];

const Config: React.FC = () => {
  const [page, setPage] = useState<Option>(OPTIONS[0]);
  const aliveRef = useKeepaliveRef();
  const options = useMemo(() => OPTIONS.map((item) => item.label), []);
  return (
    <div className="flex flex-col w-full h-full config-main">
      <Segmented
        options={options}
        onChange={(value) => {
          setPage(OPTIONS.find((item) => value == item.label)!);
        }}
        block
      />
      <AnimatePresence mode="wait">
        <motion.div
          className="config-content"
          key={page ? page.label : "empty"}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.3 }}>
          <KeepAlive
            aliveRef={aliveRef}
            max={20}
            strategy={"PRE"}
            activeName={page?.label}
            cache={page?.cache}>
            {page && <page.component />}
          </KeepAlive>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Config;
