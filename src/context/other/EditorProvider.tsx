import EditorContext from "./EditorContext";
import { useState, useMemo, ReactNode } from "react";
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
      key: "antimonocromatismo",
      path: "E:\\myAllProjects\\vue\\electron-vite-project\\flask\\input\\styles\\antimonocromatismo.jpg",
      weight: 1,
    },
  ]);
  const [histories, setHistories] = useState<string[]>([]);
  const [progress, setProgress] = useState<Progress>({
    now: 0,
    total: 100,
  });
  const [resVideo, setResVideo] = useState();
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
      setResVideo,
      setProgress,
      setHistories,
      setStyles,
      setId,
      setSource,
      setResImg,
      setLoading,
    }),
    [id, source, loading, resImg, styles, histories, resVideo, progress]
  );
  return (
    <EditorContext.Provider value={providedValue}>
      {children}
    </EditorContext.Provider>
  );
};
export default EditorProvider;
