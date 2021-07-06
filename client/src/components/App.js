import React from "react";
import AddForm from "./AddForm";
import Header from "./Header";
import Task from "./Task";

const App = () => {
  return (
    <div className="w-screen h-screen overflow-y-scroll overflow-x-hidden ">
      <Header />
      <Task />
      <AddForm />
    </div>
  );
};

export default App;
