const mongoose = require("mongoose");
const { Schema } = mongoose;

const todoSchema = new Schema({
  todo: String,
  complete: Boolean,
});

module.exports = mongoose.model('Todo', todoSchema)
