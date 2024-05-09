import { ReactNode, useCallback, useEffect, useMemo } from "react";

import { SET_TABS } from "@/actions/setTabs";
import {
  RECENT_MESSAGE,
  REQUEST_RECENT,
  REQUEST_STYLES,
  STYLES_MESSAGE,
} from "@/constants";
import { connect, disconnect } from "@/requests/socket";
import requestAndProcessMessage from "@/utils/requestAndProcessMessage";
import Editor from "@/views/Editor";
import Home from "@/views/Home";
import { nanoid } from "nanoid";
import { useImmerReducer } from "use-immer";
import { ADD_STYLES } from "../actions/addStyles";
import { SET_RECENT } from "../actions/setRecent";
import AppContext from "./AppContext";
import appReducer from "./appReducer";
import EditorProvider from "./other/EditorProvider";
const defaultState: State = {
  id: "1",
  styles: [],
  recent: [],
  source: [],
  tabs: {
    items: [{ label: "主页", children: <Home />, key: "1", closable: false }],
    activeKey: "1",
  },
};
const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useImmerReducer(appReducer, defaultState);
  const findSource = useCallback(
    (key: string) => {
      const nowTab = state.tabs.items.filter((item) => item.key == key);
      return nowTab[0].source;
    },
    [state.tabs.items]
  );

  const addTab = useCallback(
    (label: string = "图片编辑", source?: string) => {
      const newActiveKey = nanoid();
      const newPanes = [...state.tabs.items];
      newPanes.push({
        label,
        children: (
          <EditorProvider
            editorId={newActiveKey}
            source={source}>
            <Editor />
          </EditorProvider>
        ),
        key: newActiveKey,
        source,
      });
      dispatch({
        type: SET_TABS,
        payload: {
          items: newPanes,
          activeKey: newActiveKey,
        },
      });
    },
    [state.tabs.items]
  );

  //   const addRealTime = useCallback(() => {
  //     const newActiveKey = nanoid();
  //     const newPanes = [...state.tabs.items];
  //     newPanes.push({
  //       label: "实时",
  //       children: (
  //         <EditorProvider
  //           editorId={newActiveKey}
  //           source=".camera">
  //           <Editor />
  //         </EditorProvider>
  //       ),
  //       key: newActiveKey,
  //       source: ".camera",
  //     });
  //     dispatch({
  //       type: SET_TABS,
  //       payload: {
  //         items: newPanes,
  //         activeKey: newActiveKey,
  //       },
  //     });
  //   }, [state.tabs.items]);

  const providedValue = useMemo(() => {
    return {
      dispatch,
      findSource,
      addTab,
      ...state,
    };
  }, [state]);

  useEffect(() => {
    connect();
    return () => {
      disconnect();
    };
  }, []);

  useEffect(() => {
    requestAndProcessMessage(
      REQUEST_STYLES,
      STYLES_MESSAGE,
      null,
      (results) => {
        dispatch({
          type: ADD_STYLES,
          payload: {
            styles: results,
          },
        });
      }
    );
    requestAndProcessMessage(REQUEST_RECENT, RECENT_MESSAGE, null, (result) => {
      dispatch({
        type: SET_RECENT,
        payload: result,
      });
    });
  }, []);

  return (
    <AppContext.Provider value={providedValue}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
