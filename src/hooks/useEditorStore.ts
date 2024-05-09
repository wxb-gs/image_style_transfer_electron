import { useContext } from "react";
import EditorContext from "@/context/other/EditorContext";
const useEditorStore = () => {
  return useContext(EditorContext) as EditorContexState;
};
export { useEditorStore };
