import { useStore } from "@/hooks/useStore";
import { getSafePath } from "@/utils/pathUtils";
import "./selectStyle.less";
import { Card } from "antd";
const SelectStyle = () => {
  const { styles } = useStore();
  return (
    <div className="style-imgs">
      {styles.map(({ name, path }: any) => (
        <div className="img-container">
          <p>{name} </p>
          <img
            alt=""
            src={getSafePath(path)}
            key={name}
          />
        </div>
      ))}
    </div>
  );
};

export default SelectStyle;
