const mongoose = require("mongoose");
const URI = require("../config/index");

mongoose.connect(
  URI,
  { useNewUrlParser: true }
);
// When successfully connected
mongoose.connection.on("connected", () => {
  console.log("Established Mongoose Default Connection");
});

// When connection throws an error
mongoose.connection.on("error", err => {
  console.log("Mongoose Default Connection Error : " + err);
});
