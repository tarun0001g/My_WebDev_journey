
const Favourite = require("../models/favourite.js");
const Home = require("../models/home.js");


exports.getHomePage = (req, res, next) => {
Home.fetchAll().then( registeredHomes => { // we are using destructured array of all homes(registeredHomes)
   res.render('store/home', {registeredHomes: registeredHomes, pageTitle: "Welcome to AirBnB!", pageName: "Home"});
});
}

exports.getHomeList = (req, res, next) => {
  Home.fetchAll().then( registeredHomes => {
    res.render('store/home-list', {registeredHomes: registeredHomes, pageTitle: "List of Homes!", pageName: "Homes"})
  });
}

exports.getBookings = (req, res, next) => {
    res.render('store/bookings', { pageTitle: "My Bookings!", pageName: "Bookings"})
  };

// exports.getFavoriteList =  (req, res, next) => {
//   Favourite.getFavourites().then(favourites => {
//      favourties = favourites.map( fav => fav.houseId);
//     Home.fetchAll().then( registeredHomes => {
//       const favouriteHomes = registeredHomes.filter(home => favourites.includes(home._id.toString()));
//       res.render('store/favorite-list', {favouriteHomes: favouriteHomes, pageTitle: "Favorite Homes", pageName: "Favorites"})
//       });
//   }) 
// }

//Get Favourite Homes
exports.getFavoriteList = (req, res, next) => {
  Favourite.getFavourites().then(favourites => {

    const favouriteIds = favourites.map(fav => fav.houseId.toString());

    Home.fetchAll().then(registeredHomes => {

      const favouriteHomes = registeredHomes.filter(home =>
        favouriteIds.includes(home._id.toString())
      );

      res.render('store/favorite-list', {
        favouriteHomes,
        pageTitle: "Favorite Homes",
        pageName: "Favorites"
      });
    });
  });
};

//Add Home to favourites
exports.postAddToFavourite = (req, res, next) => {
  const homeId = req.body.id;
  const fav = new Favourite(homeId);
  fav.save().then(result => {
    console.log("Adding in fav: ", result);
  })
  .catch( error => {
    console.log("Error while adding favourites: ", error);
  })
  .finally(() => {
    res.redirect("/favourites");
  });
}

//Remove Home from favourites
exports.postRemoveFromFavourites =  (req, res, next) => {
 const homeId = req.params.homeId;
 Favourite.deleteById(homeId).then(result => {
    console.log("Removing from fav: ", result);
  })
  .catch( error => {
    console.log("Error while removing favourites: ", error);
  })
  .finally(() => {
    res.redirect("/favourites");
  });
}
 



//Get Home details
exports.getHomeId =  (req, res, next) => {
    const homeId = req.params.homeId;
    Home.findById(homeId).then( home  => { //home details fetching
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


