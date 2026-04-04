

const express = require("express"); // external module

const storeController = require("../controllers/storeController");


const storeRouter = express.Router();

storeRouter.get("/", storeController.getHomePage);
storeRouter.get("/homes", storeController.getHomeList); //search using this given pageName
storeRouter.get("/bookings", storeController.getBookings);
storeRouter.get("/favourites", storeController.getFavoriteList);

module.exports = storeRouter;

