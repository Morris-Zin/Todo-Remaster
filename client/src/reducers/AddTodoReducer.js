import {
  ADD_TODO,
  COMPLETE_TODO,
  GET_TODOS,
  REMOVE_TODO,
} from "../actions/types";

export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case GET_TODOS:
      return action.payload;

    case ADD_TODO:
      return [...state, action.payload];

    case REMOVE_TODO:
      return state.filter((todo) => {
        return todo._id !== action.id;
      });

    case COMPLETE_TODO:
      return state.map((todo) =>
        todo._id === action.payload._id ? action.payload : todo
      );
    default:
      return state;
  }
};
