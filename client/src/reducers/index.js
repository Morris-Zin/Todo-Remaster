import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { addTodoReducer } from "./AddTodoReducer";

export default combineReducers({
  todoReducer: addTodoReducer,
  form: formReducer, 
})