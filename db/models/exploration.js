const mongoose = require("mongoose");

const explorationModel = new mongoose.Schema({
  name: { type: String },
  description: { type: String },
  img_url: {type: String}
});

module.exports = mongoose.model("explorationModel", explorationModel);
