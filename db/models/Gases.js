const mongoose = require("mongoose");

const gasesModel = new mongoose.Schema({
  name: { type: String },
  description: { type: String },
  img_url: { type: String },
  price: { type: Number },
});

module.exports = mongoose.model("gasesModel", gasesModel);
