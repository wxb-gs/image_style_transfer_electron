export const SET_SOURCE = "set_source";

const setSource = (state: State, payload: any) => ({
  ...state,
  source: payload.source,
});

export default setSource;
