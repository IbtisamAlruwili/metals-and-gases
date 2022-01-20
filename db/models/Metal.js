const mongoose = require("mongoose");

const metalModel = new mongoose.Schema({
  name: { type: String },
  description: { type: String },
  img_url: { type: String }, // اخزن البيانات
  price: { type: Number },
});

module.exports = mongoose.model("metalModel", metalModel);
