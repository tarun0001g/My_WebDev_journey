
const Favourite = require("../models/favourite.js");
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
  Favourite.getFavourites(favourites => {
    Home.fetchAll( (registeredHomes) => { 
      const favouriteHomes = registeredHomes.filter(home => favourites.includes(home.id));
      res.render('store/favorite-list', {favouriteHomes: favouriteHomes, pageTitle: "Favorite Homes", pageName: "Favorites"})
      });
  })
 
}

exports.getHomeId =  (req, res, next) => {
    const homeId = req.params.homeId;
    Home.findById(homeId, home => {
      if(!home){
        console.log("Home not Found!");
        res.redirect("/homes");
      }
      else{
          // console.log("Home Details found: ", home);
          res.render('store/home-detail', { pageTitle: "Home Detail", pageName: "Homes", home: home});
      }
    });
}

exports.postAddToFavourite = (req, res, next) => {
  console.log("In the favourites page", req.body);
  Favourite.addToFavourites(req.body.id, error => {
    if(error){
      console.log("Error while marking favourite: ", error);
    }
     res.redirect("/favourites");
  })
}
