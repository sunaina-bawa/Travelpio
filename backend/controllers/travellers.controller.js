const TravellerModel = require("../models/travellers.Scheme");

// registerTravellers is used for registering new users data,
// Endpoint for registering new user "https://travelopia-29rz.onrender.com/traveller/register"
// Have added proper error checking

const registerTravellers = async (req, res) => {
  const { name, email, place, numberofTravellers, budgetPerPerson, total } =
    req.body;
  try {
    // This is validation for existing user, if user already exist then they can't register again.
    const existUser = await TravellerModel.findOne({ email });
    if (existUser) {
      res
        .status(401)
        .send("User already existed, please try with another email.");
    } else {
      const user = await TravellerModel.create({
        name,
        email,
        place,
        numberofTravellers,
        budgetPerPerson,
        total,
      });
      await user.save();
      res.status(200).send("Data successfully saved");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// getData is used for retrieving all users data,
// Endpoint for getting all users data "https://travelopia-29rz.onrender.com/traveller/getData"
// Have added proper error checking

const getData = async (req, res) => {
  try {
    let data = await TravellerModel.find();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { registerTravellers, getData };
