

const express = require("express"); // external module

const homeController = require("../controllers/homes");


const userRouter = express.Router();

userRouter.get("/", homeController.getHomePage);

module.exports = userRouter;

