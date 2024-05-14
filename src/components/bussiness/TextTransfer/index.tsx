import { useEditorStore } from "@/hooks/useEditorStore";
import { Collapse, CollapseProps, Input, Switch, Typography } from "antd";
import "./textTransfer.less";
const { TextArea } = Input;
const authors = ["Van Gogh", "Kandinsky"];
const { Paragraph } = Typography;

const RecommendTags = authors.map((item) => (
  //   <Tag
  //     bordered={false}
  //     color="error">
  //     error
  //   </Tag>
  <Paragraph copyable>{item}</Paragraph>
));

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: "艺术家",
    children: RecommendTags,
  },
  {
    key: "2",
    label: "其他",
    children: RecommendTags,
  },
];

const TextTransfer = () => {
  const { text, setText, startText, setStartText } = useEditorStore();
  const handleCahnge = (e: any) => {
    setText(e.target.value);
  };
  return (
    <div className="text-trans">
      <p style={{ marginTop: 20, marginBottom: 10 }}>
        文本风格转换：
        <Switch
          checkedChildren="开启"
          unCheckedChildren="关闭"
          // defaultChecked
          checked={startText}
          onChange={(e) => setStartText(e)}
        />
      </p>
      <div className="top-sec">
        <p>描述你理想的风格:</p>
        <TextArea
          rows={8}
          allowClear
          value={text}
          onChange={handleCahnge}
          placeholder="输入文本描述"
          maxLength={20}
        />
      </div>
      <div className="text-collapse">
        <Collapse
          defaultActiveKey={["1", "2"]}
          ghost
          items={items}
        />
      </div>
      {/* <div className="text-btn">
        <Button
          onClick={handleClick}
          type="primary"
          loading={loading}>
          文本转换
        </Button>
      </div> */}
    </div>
  );
};

export default TextTransfer;
