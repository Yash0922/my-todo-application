import { createStore,applyMiddleware } from "redux";
import { Reducer } from "./Reducer";
import logger from 'redux-logger'
import thunk from 'redux-thunk'
 const myStore  =  createStore(Reducer,applyMiddleware(thunk,logger));

 export default myStore;
