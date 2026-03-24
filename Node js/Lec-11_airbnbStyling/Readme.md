

# To add styling in our node-express project,

- we cannot add direct css file in our views folder, because browser cannot access http://localhost:3005/home.css because its a non static file, our node server provide privacy to on accessing static files

- so we need to make a static css file, by putting it in the public folder.
- after that we will add one middleware in our app.js file (server file) to make public folder as a static folder, then after we can access styling in html file. 
- Middleware:-  app.use(express.static(path.join(rootDir, 'public')));

- note:- we will give direct file link in href="home.css" of html file ()

# We can also add styling using tailwind css. 