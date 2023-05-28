const express = require("express");
const {
  registerTravellers,
  getData,
} = require("../controllers/travellers.controller");

const app = express.Router();

//Route for register new user.
app.post("/register", registerTravellers);

// Route for retrieving data from database.
app.get("/getData", getData);

module.exports = app;
