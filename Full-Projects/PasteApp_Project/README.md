
# Installation
First we will create vite project with tailwind css : https://tailwindcss.com/docs/installation/using-vite

Then, we will install  "npm i react-router-dom" to routes between different pages.  https://www.npmjs.com/package/react-router-dom
(pages like create paste, view paste, view all listedd paste)

Then we will install redux toolkit for state management. 
 "npm install @reduxjs/toolkit react-redux" from  https://redux-toolkit.js.org/tutorials/quick-start

# Basic setup of redux toolkit
now all installed. 
 - now first we will create store and slice files.
 - now we will connect store with main file & wrap App() with provider
 - in pasteSlice we have added initial state array for storing all pastes and added paste actions.
 - Now we need to import the reducer (pasteReducer fn) function from the pasteSlice and add it to our store. (This reducer fn will handle all states updations of our paste application.)
 - we will pasteReducer and its path into the store file.

# Routing setup
we will add main 3 routes
    ~ / -> Home -> creation or updation of paste
    ~ /pastes -> List of all pastes + edit,delete,view,copy options
    ~ /pastes/:id -> View specific paste
- First we created browserRouter
- Then added Paths & Elements
- Then we have created components and linked/imported in app.jsx

# Defininng each components
- first we will add navlinks in Navbar
- then we will edit/configure Home page
- We will use conditional rendering in Home page where, if we creatig new paste->show -> Create Paste button
for updation ->show-> Update the paste button
- Basically edit/update paste will forwarded from Pastes.jsx page with Paste ID
(we will use paste id as a logic, if paste comes with id->Update paste button, else->Create Paste button) Ex.(http://localhost:5173/?pasteId=00144)

