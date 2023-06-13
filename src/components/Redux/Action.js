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
export const getTodo=()=>{
    return (dispatch)=>{
        axios.get(`http://localhost:3001/tasks`)
        .then((res)=> {
            return dispatch(todoAction(res.data))
            
        })
      
    }
}
export const postTodos = (data)=>{
    return (dispatch)=>{
        axios.post(`http://localhost:3001/tasks`,{
            name:data,
            // complete:false
        }).then((res)=>{
            return dispatch(getTodo())
        })
    }
}

export const deleteTodo=(id)=>{
    return (dispatch)=>{
        axios.delete(`http://localhost:3001/tasks/${id}`)
        .then((res)=> {
           return dispatch(getTodo())})
        
    }
}
export const toggleMark=(id)=>{
    return (dispatch)=>{
        axios.patch(`http://localhost:3001/tasks/${id}`,{
        })
        .then((res )=>{
           return dispatch(getTodo())})
      }
}

export const searchTasks =  (searchQuery) => {
    return (dispatch)=>{
        axios.get(`http://localhost:3001/tasks/search?query=${searchQuery}`)
        .then((res)=> {
          
            return dispatch({type:"FILTER",Payload:res.data})
           
            
        })
      
    }
  };