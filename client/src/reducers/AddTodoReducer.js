export const addTodoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "REMOVE_TODO":
      return state.filter((todo) => {
        return todo.id !== action.id;
      });
      case "TOOGLE_COMPLETE" : 
        return state.map(todo => { 
           if(todo.id === action.id) { 
              return {...todo, complete: !todo.complete}
           }
           return todo; 
        })
    default:
      return state;
  }
};
