

# To add styling in our node-express project,

- we cannot add direct css file in our views folder, because browser cannot access http://localhost:3005/home.css because its a non static file, our node server provide privacy to on accessing static files

- so we need to make a static css file, by putting it in the public folder.
- after that we will add one middleware in our app.js file (server file) to make public folder as a static folder, then after we can access styling in html file. 
- Middleware:-  app.use(express.static(path.join(rootDir, 'public')));

- note:- we will give direct file link in href="home.css" of html file ()

# We can also add styling using tailwind css. 
- To apply styling of tailwind css, we need two terminals 
    1. to run tailwind compiler (watch mode)
    2. to run node server

- We wil install concurrently package to run them both together
 npm install concurrently --save-dev
- Note that package.json file should have proper scripts :-
    "scripts": {
    "start": "nodemon app.js",
    "tailwind": "tailwindcss -i ./public/style.css -o ./public/output.css --watch",
    "dev": "concurrently \"npm run start\" \"npm run tailwind\""
  },