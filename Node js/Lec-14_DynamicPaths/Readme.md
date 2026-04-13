
# Add view detail button/link on the every home in homes page.
- we will add this option directly in the home-list.ejs file

# Now we will add one math fn in model -> home.js -> save() fn where id is automatically generated

# Now we will add details of each home. 
- we will add one static findById method in home model to fetch the details of home 
- in this method first we will fetch all homes from data and then filter(.find()) our home using homeId
- now in storeController, we will use Home.findById method to get our home details, and log them, and render them in it
- also we will add redirect error handling if home not found redirect to allHomes page
- now we will render the actual home data on home-detail page
