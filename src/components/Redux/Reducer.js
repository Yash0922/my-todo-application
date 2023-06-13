import { TODO } from "./ActionType"
// import { DELETE } from "./ActionType"
// import { MARK_AS_COMPLETE } from "./ActionType"
const initialState = {
   todo:[],
    fdata:[]
}


export const Reducer =(state=initialState,action)=>{

    switch(action.type){
        case TODO:
           return {
             ...state,  todo: action.Payload
           }
         case "FILTER":
            return {
                ...state, fdata: action.Payload
            }
           default:
            return state
            
      }
      
}