export const SET_RECENT = "SET_RECENT";

const setRecent = (state: State, payload: any) => ({
  ...state,
  recent: payload,
});

export default setRecent;
