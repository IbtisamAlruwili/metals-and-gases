const express = require("express");
const cart = express.Router();
const {
  AddCart,
  getCart,
  remoCart,
  remoGasesCart,
  getGasesCart,
  AddGasesCart,
} = require("../controllers/Cart");
const { authentication } = require("../middlewares/Authentication");

cart.delete("/unlike/:id", authentication, remoCart);
cart.delete("/unlikeGases/:id", authentication, remoGasesCart);

cart.get("/like", authentication, getCart);
cart.get("/likeGases", authentication, getGasesCart);

cart.post("/likee/:id", authentication, AddCart);
cart.post("/likeeGases/:id", authentication, AddGasesCart);

module.exports = cart;
