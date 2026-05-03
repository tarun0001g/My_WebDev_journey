
const Favourite = require("../models/favourite.js");
const Home = require("../models/home.js");


exports.getHomePage = (req, res, next) => {
Home.find().then( registeredHomes => { // we are using destructured array of all homes(registeredHomes)
   res.render('store/home', {registeredHomes: registeredHomes, pageTitle: "Welcome to BookMyStay!", pageName: "Home"});
});
}

exports.getHomeList = (req, res, next) => {
  Home.find().then( registeredHomes => {
    res.render('store/home-list', {registeredHomes: registeredHomes, pageTitle: "List of Homes!", pageName: "Homes"})
  });
}

exports.getBookings = (req, res, next) => {
    res.render('store/bookings', { pageTitle: "My Bookings!", pageName: "Bookings"})
  };

// exports.getFavoriteList =  (req, res, next) => {
//   Favourite.getFavourites().then(favourites => {
//      favourties = favourites.map( fav => fav.houseId);
//     Home.find().then( registeredHomes => {
//       const favouriteHomes = registeredHomes.filter(home => favourites.includes(home._id.toString()));
//       res.render('store/favorite-list', {favouriteHomes: favouriteHomes, pageTitle: "Favorite Homes", pageName: "Favorites"})
//       });
//   }) 
// }

//Get Favourite Homes
// Method :1 
// exports.getFavoriteList = (req, res, next) => {
//   Favourite.find().then((favourites) => { //find an array of all favourite objects/documents

//     favourites = favourites.map(fav => fav.homeId.toString()); //this is array of favourite Homes Ids

//     Home.find().then(registeredHomes => { //Home.find() :- get all homes from Home collection in Database
//       const favouriteHomes = registeredHomes.filter(home =>
//         favourites.includes(home._id.toString())//Filter homes and keep only those whose IDs exist in favourites list
//       );

//       res.render('store/favorite-list', {
//         favouriteHomes: favouriteHomes,
//         pageTitle: "Favorite Homes",
//         pageName: "Favorites"
//       });
//     });
//   });
// };
//Method: 2 (efficient way)
exports.getFavoriteList = (req, res, next) => {
  Favourite.find()
  .populate("homeId") //Most IMP
  .then((favourites) => {//Now favourites now contains full home data inside each object

  const favouriteHomes = favourites.map(favourite => favourite.homeId); //this is array of favourite Homes Ids
    //.map formats the data
    // .map() is used to extract only the home objects and remove unnecessary nesting.
    
    res.render('store/favorite-list', {
      favouriteHomes: favouriteHomes,
      pageTitle: "Favourite Homes",
      pageName: "Favourites"
    });
  });
}


//Add Home to favourites
exports.postAddToFavourite = (req, res, next) => {
  const homeId = req.body.id;
  Favourite.findOne({homeId: homeId})
  .then( (alreadyFav) => {
    if(alreadyFav){
      console.log("Home is already in favourites!");
    }
    else{
      fav = new Favourite ({homeId: homeId});
      console.log("Added to favourites", homeId);
      return fav.save();
    }
  })
  .then(() => {
      res.redirect("/favourites");
    })
  .catch(error => {
    console.log("Error while adding to favourites!", error);
  });
}


//Remove Home from favourites
exports.postRemoveFromFavourites =  (req, res, next) => {
 const homeId = req.params.homeId;
Favourite.findOneAndDelete({ homeId: homeId }).then(result => {
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


