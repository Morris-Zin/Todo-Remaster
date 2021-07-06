import { ADD_TODO, REMOVE_TODO } from "./types";
import { v4 as uuid } from "uuid";

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: {
      todo,
      id: uuid(),
      complete: false,
    },
  };
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
