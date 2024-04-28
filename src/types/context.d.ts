interface Action {
  type: string;
  payload: any;
}

interface State {
  id: string;
  styles: string[];
}

interface Message {
  id: string;
}
