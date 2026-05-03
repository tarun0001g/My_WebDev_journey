const registeredHomes = [];
const Home = require("../models/home.js");

exports.getAddHome =  (req, res, next) => { //we also need to pass editing flag here
    res.render('admin/edit-home', {pageTitle: "Enter Home Details", pageName: "Add Home", editing: false}); 
} 

exports.getAdminHomes = (req, res, next) => {
  Home.find().then( registeredHomes => {
    res.render('admin/admin-home-list', {registeredHomes: registeredHomes, pageTitle: "Admin's Homes!", pageName: "admin-homes", })
  });
}

//Edit home details
exports.getEditHome = (req, res, next) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing === 'true'; //Query parameter/variable

  Home.findById(homeId).then( home => { //home details fetching
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
 
  const { houseName, price, location, rating, photoURL, description} = req.body;

  const home = new Home ( {houseName, price, location, rating, photoURL, description } ); // { } makes it data Obj

  home.save().then(() => {
    console.log("Home Saved Successfully!");
  });  
  res.redirect('/admin/admin-home-list');
}

//After Editing Home
exports.postEditHome =  (req, res, next) => {
  const { id, houseName, price, location, rating, photoURL, description} = req.body;
  Home.findById(id).then((home) => {
    home.houseName = houseName;
    home.location = location;
    home.rating = rating;
    home.photoURL = photoURL;
    home.description = description;

    home.save().then(result => {
      console.log("Home Updated", result);
    }).catch(err => {
      console.log("Error while updating home", err);
    })
    res.redirect('/admin/admin-home-list');

  }).catch(err => {
    console.log("Error while finding home", err);
  });
} 


//Delete Home
exports.postDeleteHome =  (req, res, next) => {
  const homeId = req.params.homeId;

  Home.findByIdAndDelete(homeId).then(() => {
    res.redirect('/admin/admin-home-list'); 
    console.log("Home deleted successfully!", homeId);
  })
  .catch(error => {
    if(error){
      console.log("Error while deleting home!", error);
    }
  });
}



