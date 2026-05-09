This is the readme file for the backend journey. This file contains overall conceptwise projects and their descriptions.This file will be updated regularly as we move forward in this journey.

To install default package.json :- npm init -y

To install nodemon:- npm install --save-dev nodemon

To install express.js :- npm install express --save


To import this: (Named Export)
exports.mongoConnect = mongoConnect; 
exports.getDB = getDB;
 
 we import them as a (named import): const {mongoConnect} = require('./ / );
                                     const {getDB} = require('./ / );

- To search any element/method/variable in the project: ctrl + shift+ F
- shift + alt + F12 : to see the every use of particular clicked element/variable/method in entire project
- to replace element/method in multiple files in single click:
 right click on folder name + find in folder or shift + alt + f

- Select/move till end of line: Shift + End 
- Select/move till start of line: shift + home
- Move one word left/right :- Ctrl + Left/right Arrow

- href means: Hypertext Reference

 ## How our app is working: (wrok flow)
 - User sends request like (/homes, /add-home, /favourites, etc)
  → Express route handles it: express search that route in every router file like authRouter, storeRouter, if it finds that route then it call the controller fn related to that route
  → Controller executes logic: actual backend logic executed
  → Mongoose talks to MongoDB
  → Data returns → EJS renders page 
  → Browser shows output.