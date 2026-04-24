
const db = require('../utility/databaseUtility'); //Database Accessing

 // db.execute() RETURNS THE PROMISE who contains the array of data objects
// .then(result => { }) 
//result will return one array(who contains two arrays:1st who contains actual data obj & 2nd contains table properties
// we will improve result by array destructuring  

// .then(([rows, fields]) => {
//   console.log("The database data is: ", rows);
// })
// .catch(error => {
//   console.log("Error while reading data", error);
// });

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
    if(this.id){ //UPDATE :- IF ID ALREADY EXIST
      return db.execute('UPDATE  homes SET houseName=?, price=?, location=?, rating=?, photoURL=?, description=? WHERE id=?' ,
      [ this.houseName, this.price, this.location, this.rating, this.photoURL, this.description, this.id ]);

    }

    //ADD :- IF ID NOT EXIST
    else{ 
    //Safe Query:
    return db.execute("INSERT INTO homes ( houseName, price, location, rating, photoURL, description) VALUES (?, ?, ?, ?, ?, ?) ", 
      [this.houseName, this.price, this.location, this.rating, this.photoURL, this.description ]);

    //The following query can be sql injected by attacker
    // return db.execute(` INSERT INTO homes ( HouseName, price, location, rating, photoURL, description)
    // VALUES ('${this.HouseName}','${this.price}','${this.location}','${this.rating}','${this.photoURL}','${this.description}') `);
    }
  }


  static fetchAll(){ //No need of callback fn
    return db.execute('SELECT * FROM homes'); //This will returns promise which contain all homes from the database
  }

  static findById(homeId, callback){
    return db.execute('SELECT * FROM homes WHERE id=?', [homeId]);
  }

  static deleteById(homeId, callback){
    return db.execute('DELETE FROM homes WHERE id=?', [homeId]);
  }

}