import axios from "axios";
let API;

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  // dev code
  API = axios.create({ baseURL: "http://localhost:8000/api" });
} else {
  // production code
  API = axios.create({
    baseURL: "https://myUrl.herokuapp.com/api",
  });
}

export const FETCH_TODOS = () => API.get("/todos");
export const CREATE_TODO = (todo) => API.post("/addTodo", { todo });
export const DELETE_TODO = (id) => API.delete(`/todos/${id}`);
export const TOOGLE_TODO = (id) => API.patch(`/todos/${id}`);
