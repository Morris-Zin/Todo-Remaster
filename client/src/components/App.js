import React, { useEffect } from "react";
import Header from "./Header";
import AddForm from "./AddForm";
import Task from "./Task";
import { getTodos } from "../actions";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return (
    <div className="w-screen h-screen overflow-y-scroll overflow-x-hidden ">
      <Header />
      <Task />
      <AddForm />
    </div>
  );
};

export default App;
