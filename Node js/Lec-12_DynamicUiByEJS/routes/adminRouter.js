
const path = require("path"); //core module

const express = require("express");// external module
const rootDir = require("../utility/fileHelperUtility.js")

const adminRouter = express.Router(); 

adminRouter.get("/add-home", )

const registeredHomes = [];

adminRouter.post("/add-home", (req, res, next) => {
  console.log("The Home is Successfully registered for:",req.body.HouseName);
  registeredHomes.push({HouseName: req.body.HouseName});
  // console.log(req.body);
  res.render('homeAdded', {pageTitle: "Home Added Successfully"});
})

//It exports two things,now they will be exported as an object and imported also as an object
exports.adminRouter = adminRouter;
exports.registeredHomes = registeredHomes;

