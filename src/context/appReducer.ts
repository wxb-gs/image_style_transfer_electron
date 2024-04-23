import actions  from '@/actions';
type Reducer=(state:State, action:Action) =>State

const appReducer:Reducer = (state:State, action:Action) =>{
 let ans:State = actions[action.type]
    ? actions[action.type](state, action.payload) || state
    : state;
 return ans
}
export default appReducer;
