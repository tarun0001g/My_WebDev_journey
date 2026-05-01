const { getDB } = require("../utility/databaseUtility");



module.exports = class Favourite {

   constructor(houseId ) {
    this.houseId = houseId;
  }

  // Add home to favourites
  save(){
    const db = getDB();
    return db.collection("favourites").findOne({houseId : this.houseId}).then( alreadyFav => {
      if(!alreadyFav){
        return db.collection("favourites").insertOne(this); //add  home in favourite homes collection in the DB
      }
      return Promise.resolve(); // if home is already in fav, then we will return resolved promise to avoid error in the console
    })
    
  }



  // Get all favourite homes
   static getFavourites(){//This fn returns data of all registered homes
      const db = getDB();
      return db.collection("favourites").find().toArray();// returns promise array of favourite homes 
    }

  // Remove home from favourites
    static deleteById(delHomeId){
        const db = getDB();
        return db.collection("favourites").deleteOne({ houseId: delHomeId });
      }
  
}

 

