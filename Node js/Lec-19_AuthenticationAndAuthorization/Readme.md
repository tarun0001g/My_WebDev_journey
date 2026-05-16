

## we will add signup page to register new users.

## Now we will add server side validations for User Signup and Login forms.
- we will use express validator package in authController to validate incoming user's data.
- we will add check/validate on user's every input data, on postSignUp controller fn.
- at the end we will add final handler middleware to show the error on UI. 
- In signup ejs file we will check if error exists, then print them in in list on top of signup form
- Now after reload we want show the oldInput of user when error occurs
- for that we will add ternary operator in value like:
- Ex:   value="<%= typeof oldInput.firstName !== 'undefined' ? oldInput.firstName : '' %>"

## Now we will store User's details on Database.
- first we will add User Model file to handle databse handling logic.
- we will create userSchema and then define every fields.
- also define the conditions of every fields like type, required, unique, etc and then export as a 'User' model/class
- now we will handle the logic of save() in postSignUp authcontroller

## Now we will encrypt the password and then save it.
- for that we will install bcryptjs package
- Now we will import bcryptjs
- then, bcrypt.hash(password, 12).then(...) we will redirect to login/signup page

## Implementing Login
- Now we will validate user's account and then let user to sign in
- Here the server will read the email and pass from DB and then verify it and sign in
- for that we need to make postLogin async-await.
- We will find user by, const user = await new User.findOne({email})
- Now we will show actual errors to user on UI while loging
- now we will push error checking and printing code on partial and use it in both file in signup.ejs and signin.ejs page
- if user found, then we will use bcrypt compare fn to compare passwords from Db, if match then let user explore bookmystay.
- if pass not match then we will throw error on UI.
- we are passing entire user obj in sesssion, to access user's details quickly on UI (like Name of user)

## Adding user functions based on Usertype.
- Now we are going to personalize Navbar based on user type.
- Nav items will be showed based on user'type (guest/admin).
- for that we will pass user: req.session.user; to every rendering page. (by find and replace)
- we will pass user: {} in authController's every render() method. because authentication page has no need of user's type.
- But after login every user/admin's UI pages need the user'type to show proper and correct Navbar. 

## User specific favourites
- Now we will add seperate storage of favourite homes for each user.
- we will store favourite home's ids in as an array of favourites in database.
- Now we will remove favourite model completely.
- now favouriteHomes will be just an array of homeIds.
- we will add another field of favourites in user model. with reference of Home.
- for get favourtites we will make it async await. cause of DB task