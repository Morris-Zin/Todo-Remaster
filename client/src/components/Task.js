import { connect } from "react-redux";
import { removeTodo, toggleComplete } from "../actions";

const Task = ({ todos, removeTodo, toggleComplete }) => {
  const handleComplete = (id) => {
    toggleComplete(id);
  };

  const handleDelete = (id) => {
    removeTodo(id);
  };

  return (
    <div className="grid mt-2 md:grid-cols-5 md:px-24 px-3 mb-8">
      <div className="md:col-start-1 md:col-end-6 items-center">
        {todos.map((todo, index) => {
          return (
            <div
              className="flex justify-between items-center space-y-2 mb-3"
              key={index}
            >
              <div className="flex items-center w-32 md:w-auto	">
                <label
                  onClick={() => handleComplete(todo.id)}
                  htmlFor={todo.id}
                  className={
                    todo.complete
                      ? `md:text-lg text-red-700 font-semibold md:tracking-wide line-through opacity-50 text-sm`
                      : `md:text-lg text-gray-700 font-semibold md:tracking-wider text-sm`
                  }
                >
                  {todo.todo}
                </label>
              </div>
              <div>
                <button
                  onClick={() => handleComplete(todo.id)}
                  className="text-xs md:text-sm focus:outline-none transform  hover:-translate-y-1 text-red-500 font-bold ml-4 border-red-500 rounded-lg hover:border-0 hover:bg-red-500 hover:text-white transition border p-1 md:py-2 md:px-2"
                >
                  Complete
                </button>
                <button
                  onClick={() => handleDelete(todo.id)}
                  className="text-xs md:text-sm focus:outline-none transform hover:-translate-y-1 text-red-500 font-bold ml-4 border-red-500 rounded-lg hover:border-0 hover:bg-red-500 hover:text-white transition border p-1 md:py-2 md:px-2"
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { todos: state.todoReducer };
};

export default connect(mapStateToProps, { removeTodo, toggleComplete })(Task);
