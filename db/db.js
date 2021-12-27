const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/metalDB").then(
  () => {
    console.log("DB connected");
  },
  (err) => {
    console.log(err);
  }
);
