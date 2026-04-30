const fs = require("fs"); //In-Built(core) module -> Used for file handling (read, write, delete)
const path  = require("path"); //In-Built(core) module
const rootDir = require("../utility/fileHelperUtility");
const { json } = require("stream/consumers");
const { error } = require("console");
const { data } = require("autoprefixer");


const favouriteDataPath = path.join(rootDir, 'data', 'favourite.json');

module.exports = class Favourite {

    static addToFavourites(homeId, callback){
      Favourite.getFavourites((favourites) => {
        if(favourites.includes(homeId)){
          callback("Home is already in favourites!");
          // console.log("Home is already in favourites!");
          // alert("Home is already in favourites!");
        }
        else{
          favourites.push(homeId);
          fs.writeFile(favouriteDataPath, JSON.stringify(favourites), callback);
        }
      });
    }

   static getFavourites(callback){//This fn returns data of all registered homes
      fs.readFile(favouriteDataPath, (error, data) => { //Async OP
        callback(!error ? JSON.parse(data): []);
      });
    }

    //remove home from favourites
    static deleteById(delHomeId, callback){
        Favourite.getFavourites(homeIds => {
            homeIds = homeIds.filter(homeId => delHomeId !== homeId);//if homeId match then filter it, otherwise keep the homes
            fs.writeFile(favouriteDataPath, JSON.stringify(homeIds), callback);
        });
      }
  
}

 

