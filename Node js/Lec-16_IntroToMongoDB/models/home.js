
const db = require('../utility/databaseUtility'); //Database Accessing
const {getDB} = require("../utility/databaseUtility");

module.exports = class Home {
  constructor( id, houseName, price, location, rating, photoURL, description) {
    this.id = id;
     this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoURL = photoURL;
    this.description = description;
  }

  save() {  
    const db = getDB();
    return db.collection('homes').insertOne(this).then((result) => { //this will add the home details to the homes collection in the DB
      console.log(result);
    });
  }


  static fetchAll(){ //No need of callback fn
    const db = getDB();
    return db.collection('homes').find().toArray();// returns promise of array of all recorded homes in the DB
  }

  static findById(homeId, callback){

  }

  static deleteById(homeId, callback){

  }
}