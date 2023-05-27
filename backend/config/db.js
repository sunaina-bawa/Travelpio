const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

const connectDatabase = () => {
  mongoose
    .connect(process.env.URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log("Mongodb connected");
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = connectDatabase;
