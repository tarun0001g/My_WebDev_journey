const fs = require("fs"); //In-Built(core) module -> Used for file handling (read, write, delete)
const path  = require("path"); //In-Built(core) module
const rootDir = require("../utility/fileHelperUtility");
const { json } = require("stream/consumers");
const { error } = require("console");
const { data } = require("autoprefixer");


//fake database in memory
// let registeredHomes = [];

module.exports = class Home {
  constructor(HouseName, price, location, rating, photoURL) {

    this.HouseName = HouseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoURL = photoURL;
  }

  save() {  //generally this fn saves the data(of constructor) into file/Database
    Home.fetchAll((registeredHomes) => {
      registeredHomes.push(this);
    const homeDataPath = path.join(rootDir, 'data', 'homes.json');
    fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), error => {
      console.log("File wiritng concluded ", error);
      })
    })
    
  }

  static fetchAll(callback){//This fn returns data of all registered homes
    const homeDataPath = path.join(rootDir, 'data', 'homes.json');
    fs.readFile(homeDataPath, (error, data) => { //Async OP
      // console.log("file data read ", error, data);
      callback(!error ? JSON.parse(data): []);
    })
    
  }

}