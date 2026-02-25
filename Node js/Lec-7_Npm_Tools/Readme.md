In this project we will learn everything about npm, packages, scripts, dependencies and npm tools.
we will also learn how to use/manage npm packages and dependencies.

# NPM
NPM (Node Package Manager) is a tool used to install, manage, and share reusable code packages in Node.js.
It comes automatically when you install Node.js.
- It is used to create proper projects. 

# Package
a package is A folder containing reusable code + a package.json file.
Example packages: express, lodash, moment, react, etc

# package.json
It is the heart of your Node project.
It contains: project name, version, dependencies, scripts, Entry file, etc

# npm init :-  creates the package.json file
# npm init -y :- This automatically creates package.json with default values.
Example: {
  "name": "my-app",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "express": "^4.18.2"
  }
}

# we can create our own shortcut scripts in package.json 
Example: add this in scripts of json file :- "start": "node app.js"
Then we can starts our project using :- npm start
"chalu-kr": "node app.js"
to run this:- npm run chalu-kr
(run is needed for custom scripts)

# What is Nodemon?
Nodemon is a development tool that automatically restarts your Node.js application whenever you save changes in your files.
Install:- npm install nodemon --save-dev
Globally:- npm install -g nodemon
Do one time :- nodemon app.js 
Now save file and server restarts automatically.
Note:- Nodemon is only for development. Never use it in production. (in production PM2, docker, cloud services are used)

add :- "start": "nodemon app.js" in scripts 
type :- npm start (nodeman will start working)

