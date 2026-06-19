


const express = require("express");// external module
const todoItemsRouter = express.Router(); 

const todoItemsController = require("../controllers/todoItemsController.js");

todoItemsRouter.get("/", todoItemsController.getTodoItem);
todoItemsRouter.post("/",todoItemsController.createTodoItem);

todoItemsRouter.delete("/:id", todoItemsController.deleteTodoItem);
todoItemsRouter.put("/:id/completed", todoItemsController.itemCompleted);

exports.todoItemsRouter = todoItemsRouter;

