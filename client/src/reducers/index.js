import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { todoReducer } from "./AddTodoReducer";

export default combineReducers({
  todoReducer: todoReducer,
  form: formReducer, 
})