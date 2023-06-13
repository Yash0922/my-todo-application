import { TODO } from "./ActionType";
import { DELETE } from "./ActionType";
import { MARK_AS_COMPLETE } from "./ActionType";
import axios from "axios"
export const todoAction=(data)=>{
    return {
        type:TODO,
        Payload:data
        
    }
}
const URL  =  process.env.REACT_APP_BACKEND_URL;
console.log("URL",URL)
export const getTodo=()=>{
    return (dispatch)=>{
        axios.get(`${URL}/tasks`)
        .then((res)=> {
            return dispatch(todoAction(res.data))
            
        })
      
    }
}
export const postTodos = (data)=>{
    return (dispatch)=>{
        axios.post(`${URL}/tasks`,{
            name:data,
            // complete:false
        }).then((res)=>{
            return dispatch(getTodo())
        })
    }
}

export const deleteTodo=(id)=>{
    return (dispatch)=>{
        axios.delete(`${URL}/tasks/${id}`)
        .then((res)=> {
           return dispatch(getTodo())})
        
    }
}
export const toggleMark=(id)=>{
    return (dispatch)=>{
        axios.patch(`${URL}/tasks/${id}`,{
        })
        .then((res )=>{
           return dispatch(getTodo())})
      }
}

export const searchTasks =  (searchQuery) => {
    return (dispatch)=>{
        axios.get(`${URL}/tasks/search?query=${searchQuery}`)
        .then((res)=> {
          
            return dispatch({type:"FILTER",Payload:res.data})
           
            
        })
      
    }
  };