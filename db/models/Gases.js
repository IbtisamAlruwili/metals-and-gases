const mongoose = require("mongoose");

const gasesModel = new mongoose.Schema({
  name: { type: String },
  description: { type: String },
  img_url: {type: String}
});

module.exports = mongoose.model("gasesModel", gasesModel);
