
const path = require("path"); //core module

const express = require("express");// external module
const rootDir = require("../utility/fileHelperUtility.js")

const adminRouter = express.Router(); 

adminRouter.get("/add-home", (req, res, next) => {
    res.render('addHome', {pageTitle: "Enter Home Details", pageName: "Add Home"});
})

const registeredHomes = [];

adminRouter.post("/add-home", (req, res, next) => {
  console.log("The Home is Successfully registered for:",req.body);
  // registeredHomes.push({HouseName: req.body.HouseName});
    registeredHomes.push(req.body); //here we will push entire object
  // console.log(req.body);
  res.render('homeAdded', {pageTitle: "Home Added Successfully", pageName: "Add Home"});
})

//It exports two things,now they will be exported as an object and imported also as an object
exports.adminRouter = adminRouter;
exports.registeredHomes = registeredHomes;