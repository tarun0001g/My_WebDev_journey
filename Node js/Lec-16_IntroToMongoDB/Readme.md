

mongodb+srv://alex:alex@alximpossible.zadlbkc.mongodb.net/?appName=AlxImpossible

## First we will Connect To MongoDB cloud atlass server
- we will write db connection code in databaseutility.js file
- this file will fetch data from db

## Now we will call connection from app.js file.
- first we will connect to db and then we will start our server. ( as we passed this fn as a callback to mongoConnect fn. )

## Cleaning home.js model files

## we have connected our app with database server, but still we are not interacting with data
- for that we need to create one db object 
- using our fetched client we can connect with any database from db server. ex. client.db("stayFinder");
we can store that db connection in a variable: _db = client.db("stayFinder");
- also we will put that db connetcion in a function getDb() which returns that database connection 

## Saving home logic
- now we will add logic for save() method in homde.js model
- import getDB() fn
- we will add home details of single home in homes using insertOne() method of mongoDB
- we will also add .then() method in postAddHome controller Fn to confirm that details are added or not 

## Now we will Install, learn and use mongoDB compass (GUI tool of mongoDB)
MongoDB Compass is a graphical tool that allows developers to interact with MongoDB databases visually—performing CRUD operations, analyzing schema, and running queries without using the command line.

## Install mongoDB in vs
- Playground = a JavaScript file where you can run MongoDB queries directly
- Think of it like:  “Practice area / query runner for your database”

## fetchAll() method code implementation
- fetchAll will returns one promise of collection of homes
- we want to fetch all homes from the records(DB)
- return db.collecton('homes') :-  means we are fetching all the records from homes collection
- .find() returns a cursor on the first record of the collection, using that cursor we can iterate through all the records of the collection
- but we want to fetch all homes from the records, not the first home record
- toArray() will fetch all the home records from the collection and return them all in single array
-  db.collecton('homes').find().toArray() :- will return array of all homes instead of cursor on the first record
- now fetchAll will return a promise of array who contains all homes records 
- we can also apply .then(), and .catch() method on it

## findById() : fetch single home using id
- we will pass id as a parameter to this method
- now we will pass matching criteria in find() method to fetch correct home record
- we will pass: return.db.collection('homes).find({_id: homeId}).next(); 
- find({_id : homeId}) will return the cursor on matching record but we want that home's details, for that we will use .next() method.
- here .next() will return the home object of that cursor 
- ObjectId(...) converts the string into MongoDB’s ID format. MongoDB stores _id as an ObjectId, not a plain string
- we will change id to _id in entire project

## Delete Home button
- for that we will add logic in deleteById() method of home.js model
- we will use deleteOne() method of mongo to delete the particular home record from homes collection

## Edit Home Details 
- for that we will add logic in save() method of home.js model, where we will use conditions to Update Or Create new Home record
- $set updates only specified fields in document like houseName. now rest of fields will remain same only house name will be updated in the document.
- But we used $set: this means we want to update the whole document. 
$set: this :- says Take ALL properties of current object and update them”
- But problem is we here $set: this is updating the _id field too, and that is not awllowed to update in mangoDB, beacuse _id is immutable in MongoDB. 
- so now we have to remove _id field from the home object before updating the document.

## Impelementing Favourite Homes features with MongoDB

# add To Favourites
- removed all unnecessary code and files
- constructor created using houseId, and that houseId will be stored in favourite collection of DB
- using houseId we will fetch and removed home from favourites collection of DB
- we have added logic in postAddToFavourite conrtoller fn to add homeId in favourites
- we also have added .then, .catch, and .finally methods with this controller fn.

# Get Favourites
- we will use same logic as we used in fetchAll() method of home.js model to fetch all favourite homeIds from db

# Remove from faavourites
- using same logic from home.js deleteVyId() method

## HW Task: we want to prevent saving duplicate records in favourites collection from DB
- means we we want to stop saving same homeid in favourites db. 
- To prevent that we will deal with save() method of favourites.js model

 resolve: a fn that tells, “Task completed successfully ✅”
 Promise: in JavaScript is an object that represents: a value that will be available in the future
 return Promise.resolve(); :- “Return a promise that is already completed successfully (resolved)”

 