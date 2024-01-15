const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://sauravsayana:f7mSmRGtdu7fQ8TR@pracmongoose.crrpbib.mongodb.net/todo-application")

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean
})

const todo = mongoose.model('todos', todoSchema)

module.exports = {
  todo
}
