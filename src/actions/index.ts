import addFilter, { ADD_FILTER } from "./addFilter";
import addStyles, { ADD_STYLES } from "./addStyles";
import setArgs, { SET_ARGS } from "./setArgs";
import setRecent, { SET_RECENT } from "./setRecent";
import setSource, { SET_SOURCE } from "./setSource";
import setTabs, { SET_TABS } from "./setTabs";
export { ADD_FILTER, ADD_STYLES, SET_ARGS, setSource };
export default {
  [ADD_FILTER]: addFilter,
  [ADD_STYLES]: addStyles,
  [SET_ARGS]: setArgs,
  [SET_RECENT]: setRecent,
  [SET_SOURCE]: setSource,
  [SET_TABS]: setTabs,
};
