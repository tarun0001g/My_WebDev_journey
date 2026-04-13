const registeredHomes = [];
const Home = require("../models/home.js");

exports.getAddHome =  (req, res, next) => {
    res.render('admin/addHome', {pageTitle: "Enter Home Details", pageName: "Add Home"});
} 

exports.getAdminHomes = (req, res, next) => {
  Home.fetchAll( // This fn returns data of all registered homes indirectly from Models
    (registeredHomes) => { 
    res.render('admin/admin-home-list', {registeredHomes: registeredHomes, pageTitle: "Admin's Homes!", pageName: "admin-homes"})
  });
}

exports.postAddHome =  (req, res, next) => {
  const home = new Home (req.body.HouseName, req.body.price, req.body.location, req.body.rating, req.body.photoURL);
  home.save(); //Saved object in registeredHomes[] indirectly through Models
  res.render('admin/homeAdded', {pageTitle: "Home Added Successfully", pageName: "Add Home"});
}


