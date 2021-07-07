const mongoose = require("mongoose");

const fastify = require("fastify")({ logger: true });

require("dotenv").config();
require("./dbConnctor")(mongoose);

fastify.register(require("fastify-cors"));

fastify.get("/", async (request, reply) => {
  return { hello: "world" };
});
fastify.register(require("./controllers/todo"), { prefix: "/api" });

const PORT = process.env.PORT || 8000;

//Routes

const startServer = async () => {
  try {
    await fastify.listen(PORT);
  } catch (error) {
    console.log("Error in starting the server", error);
    process.exist(1);
  }
};

startServer();
