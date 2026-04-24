

## Database connection 
- First we will create one Db connection pool in utility folder. now we can use it multiple times in our project.

- To Store data in DataBase we need to create a table in mySQL DB.
after creation we will add one random dummy data into table.

- Now we will access stored database data in our airbnb application
for that we will access DB in our app.js fil. (Just for testing purpose)

- now we will add actual data storing logic in home model. 
As we know Professionally models contains the actual logic of data handling.(access, add, delete, fetch, etc)
we will add logic of fetchAll() fn

- now we will also handle the logic for fetchAll() method in storeController
we will destructure array of all homes (registeredHomes) and then use all homes.
we will move logic of callback fn into the .then(([]) => {})
we will use same logic for every method who uses the fetchAll()

- now we will add logic for description input field.

- now we will add logic for other methods(like save(), findById, DeleteById, etc.) in home model
we will implement save method using insert query
we are adding tricky and secure query to avoid SQL Injection

- Now at the end we are adding query for findById() and deleteById() methods;
we also add implementation logic of both methods in controller files

- Extra Task: Implement the Update/Edit logic with save method.
we will use homeId as a if-else parameter to implement logic of Update or Edit.




