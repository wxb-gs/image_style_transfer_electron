import { ReactNode, useEffect, useMemo, useReducer } from "react";

import { defaultState, REQUEST_STYLES, STYLES_MESSAGE } from "@/constants";
import { connect, disconnect } from "@/requests/socket";
import { ADD_STYLES } from "../actions/addStyles";
import AppContext from "./AppContext";
import appReducer from "./appReducer";
const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(appReducer, defaultState);
  const providedValue = useMemo(() => {
    return {
      dispatch,
      ...state,
    };
  }, [state]);
  useEffect(() => {
    connect();
    return () => disconnect();
  }, []);

  useEffect(() => {
    //请求项目文件，请求styles文件
    // window.ipcRenderer.send(REQUEST_IMAGES);
    // window.ipcRenderer.on(IMAGE_PATHS_MESSAGE, (_event, results) => {
    //   const imgs = processResults(results);
    //   setImages(imgs);
    // });

    window.ipcRenderer.send(REQUEST_STYLES);
    window.ipcRenderer.on(STYLES_MESSAGE, (_event, results) => {
      //   console.log(results);
      dispatch({
        type: ADD_STYLES,
        payload: {
          styles: results,
        },
      });
    });
  }, []);

  return (
    <AppContext.Provider value={providedValue}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
