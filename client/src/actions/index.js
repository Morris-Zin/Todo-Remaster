import { GET_TODOS, ADD_TODO, REMOVE_TODO } from "./types";
import { CREATE_TODO, FETCH_TODOS } from "../api";

export const getTodos = () => async (dispatch) => {
  const { data } = await FETCH_TODOS();
  console.log(data.todos)
  dispatch({ type: GET_TODOS, payload: data.todos });
};
export const addTodo = (todo) => async (dispatch) => {
  const { data } = await CREATE_TODO(todo);
  dispatch({ type: ADD_TODO, payload: data.todos });
};

export const toggleComplete = (id) => {
  return {
    type: "TOOGLE_COMPLETE",
    id,
  };
};

export const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    id,
  };
};
