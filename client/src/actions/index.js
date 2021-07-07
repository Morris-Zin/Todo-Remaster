import { GET_TODOS, ADD_TODO, REMOVE_TODO, COMPLETE_TODO } from "./types";
import { CREATE_TODO, DELETE_TODO, FETCH_TODOS, TOOGLE_TODO } from "../api";

export const getTodos = () => async (dispatch) => {
  const { data } = await FETCH_TODOS();
  dispatch({ type: GET_TODOS, payload: data.todos });
};

export const addTodo = (todo) => async (dispatch) => {
  const { data } = await CREATE_TODO(todo);
  dispatch({ type: ADD_TODO, payload: data.todos });
};

export const toggleComplete = (id) => async (dispatch) => {
  const { data } = await TOOGLE_TODO(id);
  dispatch({ type: COMPLETE_TODO, payload: data.todos });
};

export const removeTodo = (id) => async (dispatch) => {
  await DELETE_TODO(id);
  dispatch({ type: REMOVE_TODO, id });
};
