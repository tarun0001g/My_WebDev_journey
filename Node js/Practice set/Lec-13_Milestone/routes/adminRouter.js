

const express = require("express");// external module
const adminRouter = express.Router(); 
const adminController = require("../controllers/adminController.js");


adminRouter.get("/add-home",adminController.getAddHome);

adminRouter.post("/add-home",adminController.postAddHome);

adminRouter.get("/admin-home-list",adminController.getAdminHomes);


exports.adminRouter = adminRouter;
