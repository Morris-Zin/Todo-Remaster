import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const totalTodos = useSelector((state) => state.todoReducer);

  const completedTodos = useSelector((state) =>
    state.todoReducer.filter((todo) => todo.complete)
  );

  return (
    <div className="py-6 px-24">
      <nav className="flex justify-between">
        <img
          className="w-12 h-12 object-cover"
          src="https://bit.ly/3xjJAa5"
          alt=""
        />
        <h4 className="font-mono font-bold text-green-400 text-2xl">Toxi</h4>
      </nav>
      <hr className="mt-5" />
      <h1 className="text-center  text-3xl text-gray-800 font-semibold mt-3">
        My Tasks
      </h1>
      <p className="font-semibold text-center text-base mt-2 text-green-300">
        {!totalTodos.length && !completedTodos.length
          ? "No todos yet"
          : `Completed ${completedTodos.length} of ${totalTodos.length} ${
              totalTodos.length > 1 ? "tasks" : "task"
            } `}
      </p>
    </div>
  );
};

export default Header;
