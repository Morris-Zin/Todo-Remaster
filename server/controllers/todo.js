const Todo = require("../models/Todo");

// const postTodoSchema = {
//   schema: {
//     body: {
//       type: "object",
//       properties: {
//         todo: { type: "string" },
//         complete: { type: "boolean" },
//       },
//     },
//   },
// };

async function todoRoutes(fastify, options) {
  fastify.get("/todos", async (request, response) => {
    const result = await Todo.find({});
    return { todos: result };
  });

  fastify.post("/addTodo", async (request, response) => {
    const { todo } = request.body;

    if (!todo) return;

    const newTodo = await new Todo(todo);
    await newTodo.save();

    return { todos: newTodo };
  });

  fastify.patch("/todos/:id", async (request, response) => {
    const { id } = request.params;
    const todo = await Todo.findById(id);
    todo.complete = !todo.complete;
    await todo.save();
    return { todos: todo };
  });

  fastify.delete("/todos/:id", async (request, response) => {
    const { id } = request.params;
    await Todo.findByIdAndDelete(id);
    return { success: true };
  });
}

module.exports = todoRoutes;
