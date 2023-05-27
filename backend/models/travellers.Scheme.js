const { Schema, model } = require("mongoose");

//Schema for registering users
//Have added enum in place for better code readability

const TravellerSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  place: {
    type: String,
    enum: ["India", "Africa", "Europe"],
    default: "India",
    required: true,
  },
  numberofTravellers: { type: Number, required: true },
  budgetPerPerson: { type: Number, required: true },
  total: { type: Number, required: true },
});

const TravellerModel = model("traveller", TravellerSchema);
module.exports = TravellerModel;
