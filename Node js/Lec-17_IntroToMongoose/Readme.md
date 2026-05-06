



In this project we will install and use Mongoose in our project.

Mongoose:- is an ODM library for MongoDB that provides schema-based structure, validation, and easy interaction with the database in Node.js.

## Install the mongoose
- npm install mongoose 
- then we will add some changes in app.js file for connecting the mongoDB 
- import mongoose
- we will use mongoose.connect(url).then().cathch(); in app.js to connect with DB
- now we will delete db util file and also remove the usage of it in our project
- 
## Create home schema
- we will delete existing bookmystay DB, existing home model code
- And then we will create new Home schema in Home model

- first import mongoose
- then create ur owm home schema using mongoose.schema() 

## SAVING HOME using MongoDB
- now we will create a model using this schema
- Model = class created from schema
- Using model u can create, read, update ,delete data easily
ex. for Home model: const Home = mongoose.model("Home", homeSchema);

another way: module.exports = mongoose.model('Home', homeSchema);
 Modifying postAddHome
- we will wrap data field in { } so it become data object
- now we will check by adding new home, so in db homes collection is created

## fetching all homes
- we will replace fetchAll() with find() method in entire project

## now we will anable fn of Edit home
- we have changed controller fn of postEditHome 

## Delete Home
- we will apply one one change from deleteById to findByIdAndDelete() method

## Implementing mongoose for Favourite feature
- First we will delete existing favourite model code.
- then we will create new favourite schema in the favourite model file.
 we have added homeId and specified its data fields.

- Then we will fix following functionalities:
  ~ Getting all favourites
  - To get all favourites we will configure getFavouriteList
  - we will change method from getFavourites() to find()
  ~ Adding to favourites
  - now we will handle logic of adding favourites
  - first we had find Favourite.findOne({homeId: homeId}) if already in fav or not 
  - we have applied if-else condition to add home in favourties 

  ~ Removing from a favourite 
  - to remove any home from favourites we have changed only one method from:
  - from: Favourite.deleteById() to Favourite.findOneAndDelete({ homeId: homeId })

- Removing favourite while deleting home
 we want to remove home from favourites too when the admin delete the home.
 To solve it we will add pre Hook in home model


## fetching relations 
- in get favourites list, first we fetched all registered homes from DB
- then we filtered with favourite home's IDs, and then we showed on UI
How To Solve it ?
- here we can fetch favourite every home one by one using its IDs from DB
- Other solution is .populate() method
it tells: Get all favourites and automatically fetch full Home data instead of just IDs
 .populate("homeId") :- This replaces the ID with full data








































































