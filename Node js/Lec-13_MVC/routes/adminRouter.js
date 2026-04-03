

const express = require("express");// external module
const adminRouter = express.Router(); 
const homeController = require("../controllers/homes.js");


adminRouter.get("/add-home",homeController.getAddHome);

adminRouter.post("/add-home",homeController.postAddHome);

exports.adminRouter = adminRouter;
