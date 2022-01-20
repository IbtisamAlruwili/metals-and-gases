const Gases = require("../../db/models/Gases");
const Metal = require("../../db/models/Metal");
const Exploration = require("../../db/models/exploration");

const getAllProducts = async (req, res) => {
  let products = {};
  let gases = await Gases.find({});
  let metal = await Metal.find({});
  let exploration = await Exploration.find({});
  products = { exploration, gases, metal };
  res.status(200).json(products);
};

module.exports = getAllProducts;
