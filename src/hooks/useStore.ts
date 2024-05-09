import { AppContext } from "@/context";
import { useContext } from "react";
const useStore = () => {
  return useContext(AppContext) as ContextState;
};
export { useStore };
