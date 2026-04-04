
const Home = require("../models/home.js");


exports.getHomePage = (req, res, next) => {
Home.fetchAll( // This fn returns data of all registered homes indirectly from Models
    (registeredHomes) => { 
    res.render('store/home', {registeredHomes: registeredHomes, pageTitle: "Welcome to AirBnB!", pageName: "Home"})
  });
}

exports.getHomeList = (req, res, next) => {
  Home.fetchAll( // This fn returns data of all registered homes indirectly from Models
    (registeredHomes) => { 
    res.render('store/home-list', {registeredHomes: registeredHomes, pageTitle: "List of Homes!", pageName: "Homes"})
  });
}

exports.getBookings = (req, res, next) => {
    res.render('store/bookings', { pageTitle: "My Bookings!", pageName: "Bookings"})
  };

exports.getFavoriteList =  (req, res, next) => {
 Home.fetchAll( 
    (registeredHomes) => { 
    res.render('store/favorite-list', {registeredHomes: registeredHomes, pageTitle: "Favorite Homes", pageName: "Favorites"})
  });
}

