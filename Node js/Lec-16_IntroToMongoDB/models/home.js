const db = require("../utility/databaseUtility"); //Database Accessing
const { getDB } = require("../utility/databaseUtility");
const { ObjectId } = require("mongodb");

module.exports = class Home {
  constructor(_id, houseName, price, location, rating, photoURL, description) {
    if (_id) {
      this._id = _id;
    }
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoURL = photoURL;
    this.description = description;
  }

  save() {
    const db = getDB();

    if (this._id) {
      // Update Home
      const updateFields = {
        houseName: this.houseName,
        price: this.price,
        location: this.location,
        rating: this.location,
        photoURL: this.photoURL,
        description: this.description,
      };
      return db.collection("homes").updateOne(
        
        { _id: new ObjectId(String(this._id)) }, // “Find the document whose _id equals this._id”
        { $set: updateFields },
        //{$set: this} cannot be used, because it will update _id field too & that is not allowed in mongoDB
      );
      
    } else {
      //Add New Home
      return db
        .collection("homes")
        .insertOne(this)
        .then((result) => {
          //add new home in homes collection in the DB
          console.log(result);
        });
    }
  }

  static fetchAll() {
    //No need of callback fn
    const db = getDB();
    return db.collection("homes").find().toArray(); // returns promise of array of all recorded homes in the DB
  }

  static findById(homeId) {
    console.log("Home id: ", homeId);
    const db = getDB();
    return db
      .collection("homes")
      .find({ _id: new ObjectId(String(homeId)) })
      .next();
    //ObjectId(...) converts the string into MongoDB’s ID format.
    // MongoDB stores _id as an ObjectId, not a plain string
  }

  static deleteById(homeId, callback) {
    console.log("Deleting Home whose id is: ", homeId);
    const db = getDB();
    return db
      .collection("homes")
      .deleteOne({ _id: new ObjectId(String(homeId)) });
  }
};
