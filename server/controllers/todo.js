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
  fastify.get("/getTodos", async (request, response) => {

    const result = await Todo.find({});
    console.log("this is result", result);  
    return { todos: result };
  });

  fastify.post("/addTodo", async (request, response) => {
    const { todo } = request.body;

    if (!todo) return;

    const newTodo =  await new Todo(todo); 
    await newTodo.save(); 
    
    return { todos: newTodo }; 
  });
}

module.exports = todoRoutes;
