export const SET_ARGS = "set_args";

const setArgs = (state: State, payload: any) => ({
  ...state,
  args: payload,
});

export default setArgs;
