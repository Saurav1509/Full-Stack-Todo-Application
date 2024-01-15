const express = require("express");
const { createTodo, updateTodo } = require('./types.js')
const { todo } = require('./db.js')
const cors = require('cors')
const app = express();

app.use(express.json());
app.use(cors())

app.get("/todos", async (req, res) => {
  const todos = await todo.find({})

  res.json({ todos })
});

app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);

  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs"
    })
    return;
  }
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false
  })
  res.json({
    message: "Todo Created"
  })
});

app.put("/completed", async (req, res) => {

  await todo.updateOne({
    _id: req.body._id
  }, {
    completed: true
  })

  res.json({
    msg: "marked as completed"
  })
});

app.listen(3000)
