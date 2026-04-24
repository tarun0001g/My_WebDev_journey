
const Favourite = require("../models/favourite.js");
const Home = require("../models/home.js");


exports.getHomePage = (req, res, next) => {
Home.fetchAll().then(([registeredHomes, fields]) => { // we are using destructured array of all homes(registeredHomes)
   res.render('store/home', {registeredHomes: registeredHomes, pageTitle: "Welcome to AirBnB!", pageName: "Home"});
});
}

exports.getHomeList = (req, res, next) => {
Home.fetchAll().then(([registeredHomes, fields]) => {
    res.render('store/home-list', {registeredHomes: registeredHomes, pageTitle: "List of Homes!", pageName: "Homes"})
  });
}

exports.getBookings = (req, res, next) => {
    res.render('store/bookings', { pageTitle: "My Bookings!", pageName: "Bookings"})
  };

exports.getFavoriteList =  (req, res, next) => {
  Favourite.getFavourites(favourites => {
    Home.fetchAll().then(([registeredHomes, fields]) => {
      const favouriteHomes = registeredHomes.filter(home => favourites.includes(home.id));
      res.render('store/favorite-list', {favouriteHomes: favouriteHomes, pageTitle: "Favorite Homes", pageName: "Favorites"})
      });
  })
}
exports.postRemoveFromFavourites =  (req, res, next) => {
 const homeId = req.params.homeId;
 Favourite.deleteById(homeId, error => {
  if(error){
    console.log("Error while removing home!", error);
  }
  res.redirect("/favourites");
 })
} 


//Get Home details
exports.getHomeId =  (req, res, next) => {
    const homeId = req.params.homeId;
    Home.findById(homeId).then( ([homes])  => { //it will be array of homes, but actually there is only one home by matching id
      const home = homes[0];
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
