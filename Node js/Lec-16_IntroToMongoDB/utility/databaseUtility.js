
const mongodb = require("mongodb"); //Import MongoDB package library

const MongoClient = mongodb.MongoClient; //MongoClient is the main class used to: connect our app to MongoDB server

const url = "mongodb+srv://alex:alex@alximpossible.zadlbkc.mongodb.net/?appName=AlxImpossible"; //our connection string who contains username, pass and cluster info

let _db; //_ (underscore) indicates private variable 

const mongoConnect =  (callback) => { // callback: a fn that will be executed after connecting with DB
  MongoClient.connect(url).then( client => { //This connect to your database & Returns a Promise. 
    _db = client.db('bookmystay'); //fetch the database from atlas cluster and assign connection in this variable.
    callback();
  }).catch(error => {
    console.log("Error while connecting to MongoDB: ", error);
  })
}

const getDB = () => {
  if(!_db) {
    throw new Error("Database not connected yet!");
  }
  return _db;
}

exports.mongoConnect = mongoConnect; 
exports.getDB = getDB;

