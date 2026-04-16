
# Add view detail button/link on the every home in homes page.
- we will add this option directly in the home-list.ejs file

# Now we will add one math fn in model -> home.js -> save() fn where id is automatically generated

# Now we will add details of each home. 
- we will add one static findById method in home model to fetch the details of home 
- in this method first we will fetch all homes from data and then filter(.find()) our home using homeId
- now in storeController, we will use Home.findById method to get our home details, and log them, and render them in it
- also we will add redirect error handling if home not found redirect to allHomes page
- now we will render the actual home data on home-detail page

# Lecture 14:  Part-2
- we will just rename the file name from addHome to edit-home.ejs, which will not affects visually on UI.
- then also change name in path in hostConroller. 
- then we will add edit button in anchor tag with suitable path, we also add router and control handling 
- we also pass one editing = 'true' flag with it

- now we will show existing data of home
- we used homeId to fetch home details and pass it to edit home page.( in adminController)
-  if home-details not found we will redirect to admin's homes page
- then after we will add dynamic content/value in edit-home.ejs page using ternary operator. 
  we will add both values of edit home and submit home page and render them based on editing flag value

- now we will handle edit-home request(Update Home Buttton)
- we will add one hidden input for homeId to identify home for updation.
- we will show dynamic content on edit-home or add-home page
- now we will add post edit-home request handling
- we will add edit-home router and controller fn in adminController,and we will redirect to admin's homes after path call on home-edit or home-add.

- now we willl add delete home feature.
- for that we will surround the delete button with form field. without form the reqest will be GET by default 
- Rule: we cannot change the state in backend with get request. so the POST req is used to delete or change data
- now we will add route in router for deleting home
- we also add delete-home fn in AdminController
- now we wll add deleteById static method in Home constructor and use it in deleteHome Controller

- now we will add remove home from favourites button feature
- we will add static remove home method in favourite model
- then we wll add remove button in form tag, with post method
- we will add remove home route in store router, then add logic in store controller, after removing we will redirect to favourite list
- at the end we will add this line in home delete logic to remove homeId from favourites while deleting home,
    : Favourite.deleteById(homeId, callback)
