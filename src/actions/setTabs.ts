export const SET_TABS = "set-tabs";
const setTabs = (
  draft: State,
  payload: {
    items?: TabItem[];
    activeKey?: string;
  }
) => {
  const { items, activeKey } = payload;
  if (items) {
    draft.tabs.items = items;
  }
  if (activeKey) {
    draft.tabs.activeKey = activeKey;
  }
  console.log(activeKey);
  return draft;
};
export default setTabs;
