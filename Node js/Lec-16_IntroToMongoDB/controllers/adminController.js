const registeredHomes = [];
const Home = require("../models/home.js");

exports.getAddHome =  (req, res, next) => { //we also need to pass editing flag here
    res.render('admin/edit-home', {pageTitle: "Enter Home Details", pageName: "Add Home", editing: false}); 
} 

exports.getAdminHomes = (req, res, next) => {
  Home.fetchAll().then( registeredHomes => {
    res.render('admin/admin-home-list', {registeredHomes: registeredHomes, pageTitle: "Admin's Homes!", pageName: "admin-homes", })
  });
}

//Edit home details
exports.getEditHome = (req, res, next) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing === 'true'; //Query parameter/variable
  Home.findById(homeId).then( ([homes])  => { //home details fetching
    const home = homes[0];
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
  const home = new Home (null, req.body.houseName, req.body.price, req.body.location, req.body.rating, req.body.photoURL, req.body.description);
  home.save().then(() => {
    console.log("Home Saved Successfully!");
  });  
  res.redirect('/admin/admin-home-list');
}

exports.postEditHome =  (req, res, next) => {
  const home = new Home (  req.body.id, req.body.houseName, req.body.price, req.body.location, req.body.rating, req.body.photoURL, req.body.description);
  home.save(); 
  res.redirect('/admin/admin-home-list');
}

//Delete Home
exports.postDeleteHome =  (req, res, next) => {
  const homeId = req.params.homeId;

  Home.deleteById(homeId).then(() => {
    res.redirect('/admin/admin-home-list'); 
  })
  .catch(error => {
    if(error){
      console.log("Error while deleting home!");
    }
  });
}



