const fs = require("fs"); //In-Built(core) module -> Used for file handling (read, write, delete)
const path  = require("path"); //In-Built(core) module
const rootDir = require("../utility/fileHelperUtility");
const { json } = require("stream/consumers");
const { error } = require("console");
const { data } = require("autoprefixer");
const Favourite = require("./favourite");

const homeDataPath = path.join(rootDir, 'data', 'homes.json');

module.exports = class Home {
  constructor( id, HouseName, price, location, rating, photoURL) {
    this.id = id;
    this.HouseName = HouseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoURL = photoURL;
    
  }

  save() {  //generally this fn saves the data(of constructor) into file/Database
    //IMP LOGIC
    Home.fetchAll((registeredHomes) => {
      if(this.id){ //edit home case : if this.id is already exist
        registeredHomes = registeredHomes.map(home => // map and update the home whose is is this.id 
          home.id == this.id ? this : home); // if this.id match then add this home , otherwise return existing home
      }//
      else{ //add home case
        this.id = Math.random().toString(); // if this.id not exist then add new random id
        registeredHomes.push(this);
      }
      
      fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), error => {
        console.log("File wiritng concluded ", error);
        });
    })
    
  }

  static fetchAll(callback){//This fn returns data of all registered homes
    fs.readFile(homeDataPath, (error, data) => { //Async OP
      callback(!error ? JSON.parse(data): []);
    })
  }

  static findById(homeId, callback){
    this.fetchAll(homes => {
     const homeFound = homes.find(home => home.id === homeId );
     callback(homeFound);
    });
  }

  static deleteById(homeId, callback){
    this.fetchAll(homes => {
       homes = homes.filter(home => home.id !== homeId);//if homeId match then filter it, otherwise keep the homes
        fs.writeFile(homeDataPath, JSON.stringify(homes), error => {
          Favourite.deleteById(homeId, callback);
        });
        //after delete/update/add, this stores the final array permanently.
        // fs.writeFile(): create file OR overwrite existing file content -> here it updates: homes.json
        // JSON.stringify(): convert array into text format,  Because file can only store text, not JS objects directly.
    });
  }
}