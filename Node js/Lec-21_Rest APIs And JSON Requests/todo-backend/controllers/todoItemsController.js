
const TodoItem = require("../models/todoItem");

//Create new Item
exports.createTodoItem = async (req, res, next) => {
  try {
    console.log(req.body);
    const { task, date } = req.body;
    const todoItem = new TodoItem({task,date,});
    await todoItem.save();
    res.status(201).json(todoItem);

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

//Get all existing items
exports.getTodoItem = async (req, res, next) => {
  const todoItems = await TodoItem.find();
  res.json(todoItems);
}

//Delete item
exports.deleteTodoItem = async (req, res, next) => {
  const {id} = req.params;
  await TodoItem.findByIdAndDelete(id);
  res.status(204).json({_id: id});
}

//Mark item as completed
exports.itemCompleted = async (req, res, next) => {
  const {id} = req.params;
  const todoItem = await TodoItem.findById(id);
  todoItem.completed = true;
  await todoItem.save();
  res.json(todoItem);
}