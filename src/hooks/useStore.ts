import { Dispatch, useContext } from "react";
import {AppContext} from '@/context'
type ContextState=State&{
    dispatch:Dispatch<Action>
}
const useStore = ()=>{
 return useContext(AppContext) as ContextState
}
export {useStore}