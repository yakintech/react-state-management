import { combineReducers } from "redux";
import { counterReducer } from "./counter.reducer";
import { todoreducer } from "./todo.reducer";


export default combineReducers({
    counterReducer,
    todoreducer
})  