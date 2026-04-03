const registeredHomes = [];
const Home = require("../models/home.js");

exports.getAddHome =  (req, res, next) => {
    res.render('addHome', {pageTitle: "Enter Home Details", pageName: "Add Home"});
} 


exports.postAddHome =  (req, res, next) => {
  // console.log("The Home is Successfully registered for:",req.body);

  //Destructuring of object's data
  const { HouseName, price, location, rating, photoURL} = req.body;

  //registeredHomes.push(req.body); //Ideally we cannot use this method to save Homes and its data (in controllers )
  //We are trying to save data by making home object (of Home Class)
  const home = new Home (req.body.HouseName, req.body.price, req.body.location, req.body.rating, req.body.photoURL);
  home.save(); //Saved object in registeredHomes[] indirectly through Models
  res.render('homeAdded', {pageTitle: "Home Added Successfully", pageName: "Add Home"});
}


exports.getHomePage = (req, res, next) => {
  const registeredHomes = Home.fetchAll( // This fn returns data of all registered homes indirectly from Models
    (registeredHomes) => { 
    res.render('home', {registeredHomes: registeredHomes, pageTitle: "Welcome to AirBnB!", pageName: "Home"})
  });

}

//Now there is no need to export registeredHomes.
// exports.registeredHomes = registeredHomes;
  