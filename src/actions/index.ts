import addFilter, { ADD_FILTER } from "./addFilter";
import addStyles, { ADD_STYLES } from "./addStyles";
import setArgs, { SET_ARGS } from "./setArgs";
export { ADD_FILTER, ADD_STYLES, SET_ARGS };
export default {
  [ADD_FILTER]: addFilter,
  [ADD_STYLES]: addStyles,
  [SET_ARGS]: setArgs,
};
