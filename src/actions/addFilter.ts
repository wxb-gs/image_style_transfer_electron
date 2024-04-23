export const ADD_FILTER = 'ADD_FILTER';

const addFilter = (state:State, payload:any) => ({
  ...state,
  id:payload.id
});

export default addFilter;
