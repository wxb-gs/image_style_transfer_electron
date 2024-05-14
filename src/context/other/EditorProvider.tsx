import { ReactNode, useMemo, useState } from "react";
import EditorContext from "./EditorContext";
type Props = {
  children: ReactNode;
  editorId: string;
  source: string | undefined;
};
const EditorProvider = ({
  children,
  editorId: _id,
  source: _source,
}: Props) => {
  const [id, setId] = useState(_id);
  const [source, setSource] = useState(_source);
  const [loading, setLoading] = useState(false);
  const [resImg, setResImg] = useState(
    // "E:/myAllProjects/vue/electron-vite-project/flask/input/output/20240430112705_1sYt6tUn7J.jpg"
    undefined
  );
  const [styles, setStyles] = useState<SelectedStyle[]>([
    {
      key: "刷笔笔触",
      path: "E:\\myAllProjects\\vue\\electron-vite-project\\flask\\input\\styles\\刷笔笔触.jpg",
      weight: 1,
      isCustom: false,
    },
  ]);

  const [histories, setHistories] = useState<string[]>([]);
  const [progress, setProgress] = useState<Progress>({
    now: 0,
    total: 100,
  });
  const [resVideo, setResVideo] = useState();
  const [text, setText] = useState("");
  const [startText, setStartText] = useState(false);
  const providedValue: EditorContexState = useMemo(
    () => ({
      editorId: id,
      source,
      loading,
      resImg,
      styles,
      histories,
      resVideo,
      progress,
      text,
      startText,
      setResVideo,
      setStartText,
      setProgress,
      setHistories,
      setStyles,
      setId,
      setSource,
      setResImg,
      setLoading,
      setText,
    }),
    [
      id,
      source,
      loading,
      resImg,
      styles,
      text,
      histories,
      resVideo,
      progress,
      startText,
    ]
  );

  return (
    <EditorContext.Provider value={providedValue}>
      {children}
    </EditorContext.Provider>
  );
};
export default EditorProvider;
