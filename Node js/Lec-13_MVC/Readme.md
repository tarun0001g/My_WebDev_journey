
- In this project, we will make a MVC architecture for this application. 
- first we create controller, and put all logic and fns and connections(wiring of html/ejs) from all routers, to make routers more clean clear and looks more as a router. (who will contains only routing related code)
- then we will add errors controller who will contains the logic related to errors handling (like 404 Error)

- After that we will create models for data handling(storing)

- Then, we set up to write user's data into file, so it will not get dissapeared while restarting the server (In model folder).
 after adding this data folder and executing server we cannot able to see the registered homes on home page because of the nodemon problem is occured here!
why nodemon problem ? 
 Because when we register any home at that time new file(homes.json) will be created, then nodemon thinks(feel) something(code) has changed in the server therefore it restarts the server and because we have not yet added any data retrieval code from DB that's why we cannot able to see the data on home page.
How to solve ?
we need to tell nodemon that when data folder(homes.json created) is changed , that does'n mean the actual server code is changed. so u should ignore re-starting the server in that case.

- Now we will try to add feature so that server can read/fetch/retrieve the data from file(local storage)
for that we will add some code in fetchAll() Fn
-> In fetchAll() we wil add readFile operation, 
but it is actually async operation!-> Means It takes some time to execute (read/fetch) and add data into registeredHomes.It doesn't executed linearly. So at the end fetchAll() doesn't return anything to homes.js
-> So we need to add callback FN
-> for that we will pass a callbackFn(fileRead) as a argument in fetchAll().
-> Callback function = A function passed as an argument to another function, and executed later
==> After it all, we got our saved data(registeredHomes) even after restarting the server.