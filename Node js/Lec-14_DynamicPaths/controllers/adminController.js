const registeredHomes = [];
const Home = require("../models/home.js");

exports.getAddHome =  (req, res, next) => { //we also need to pass editing flag here
    res.render('admin/edit-home', {pageTitle: "Enter Home Details", pageName: "Add Home", editing: false}); 
} 

exports.getAdminHomes = (req, res, next) => {
  Home.fetchAll( // This fn returns data of all registered homes indirectly from Models
    (registeredHomes) => { 
    res.render('admin/admin-home-list', {registeredHomes: registeredHomes, pageTitle: "Admin's Homes!", pageName: "admin-homes", })
  });
}

exports.getEditHome = (req, res, next) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing === 'true'; //Query parameter/variable
  Home.findById(homeId, home => { //home details fetching
    if(!home){
      console.log("Home not found for editing!");
      res.redirect("/admin/admin-home-list");
    }
       //passed home details
      console.log(homeId, editing, home);
      res.render('admin/edit-home', { pageTitle: "Edit Your Home", pageName: "admin-homes", editing: editing, home: home});
  });
    
}



exports.postAddHome =  (req, res, next) => {
  const home = new Home (   null, req.body.HouseName, req.body.price, req.body.location, req.body.rating, req.body.photoURL);
  home.save(); //Saved object in registeredHomes[] indirectly through Models
  // res.render('admin/homeAdded', {pageTitle: "Home Added Successfully", pageName: "Add Home"});
  res.redirect('/admin/admin-home-list');
}

exports.postEditHome =  (req, res, next) => {
  const home = new Home (  req.body.id, req.body.HouseName, req.body.price, req.body.location, req.body.rating, req.body.photoURL);
  home.save(); //Saved object in registeredHomes[] indirectly through Models
  res.redirect('/admin/admin-home-list');
}

exports.postDeleteHome =  (req, res, next) => {
  const homeId = req.params.homeId;
  console.log("Come to delete home :", homeId);
  Home.deleteById(homeId, error => {
    if(error){
      console.log("Error while deleting home!");
    }
    res.redirect('/admin/admin-home-list'); //Always shown if error occur or not
  })
  
}



