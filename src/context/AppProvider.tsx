import { useReducer, useMemo, ReactNode, useEffect } from "react";

import AppContext from "./AppContext";
import appReducer from "./appReducer";
import { defaultState } from "@/constants";
import { connect, disconnect } from "@/requests/socket";
const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(appReducer, defaultState);
  const providedValue = useMemo(
    () => ({
      dispatch,
      ...state,
    }),
    [state]
  );
  useEffect(() => {
    connect();
    return () => disconnect();
  }, []);

  return (
    <AppContext.Provider value={providedValue}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
