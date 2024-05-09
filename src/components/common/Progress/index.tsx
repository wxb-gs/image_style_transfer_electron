import { useEditorStore } from "@/hooks/useEditorStore";
import { Progress as AntdProgress } from "antd";

const Progress = () => {
  const { progress } = useEditorStore();
  const percent = 100 * ((1.0 * progress.now) / progress.total);
  return (
    <AntdProgress
      type="circle"
      percent={parseInt(percent.toFixed(0))}
    />
  );
};

export default Progress;
