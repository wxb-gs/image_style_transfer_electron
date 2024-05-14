interface Action {
  type: string;
  payload: any;
}

interface TabItem {
  label: string;
  children: any;
  key: string;
  closable?: boolean;
  source?: string;
}

interface Style {
  key: string;
  path: string;
  isCustom: boolean;
}

interface State {
  id: string;
  styles: Style[];
  recent: object[];
  source: [];
  tabs: {
    items: TabItem[];
    activeKey: string;
  };
}

type ContextState = State & {
  dispatch: Dispatch<Action>;
  findSource: Function;
  addTab: Function;
};

interface EditorContexState {
  editorId: string;
  source: string | undefined;
  loading: boolean;
  resImg: string | undefined;
  styles: SelectedStyle[];
  histories: string[];
  resVideo: string | undefined;
  text: string;
  startText: boolean;
  setStartText: Function;
  setText: Function;
  progress: Progress;
  setProgress: Function;
  setResVideo: Function;
  setStyles: Function;
  setId: Function;
  setSource: Function;
  setResImg: Function;
  setLoading: Function;
  setHistories: Function;
}

interface Message {
  id: string;
}

interface SelectedStyle {
  key: string;
  path: string;
  weight: number;
  isCustom: boolean;
}

interface Progress {
  now: number;
  total: number;
}
