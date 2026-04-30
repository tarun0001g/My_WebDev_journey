

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
- return db.collecton('homes') means we are fetching all the records from homes collection
- .find() returns a cursor on the first record of the collection, using that cursor we can iterate through all the records of the collection
- but we want to fetch all homes from the records, not the first home record
- toArray() will fetch all the home records from the collection and return them all in single array
now db.collecton('homes').find().toArray() will return array of all homes instead of cursor on the first record
- now fetchAll will return a promise of array who contains all homes records 
- we can also apply .then(), and .catch() method on it