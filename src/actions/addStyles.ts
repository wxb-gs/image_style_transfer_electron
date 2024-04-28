export const ADD_STYLES = "ADD_STYLES";

const addStyles = (state: State, payload: any) => ({
  ...state,
  styles: payload.styles,
});

export default addStyles;
