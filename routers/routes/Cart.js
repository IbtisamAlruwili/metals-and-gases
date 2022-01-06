const express = require("express");
const cart = express.Router();

const { AddCart,getCart,remoCart } = require("../controllers/Cart");
const {authentication}=require("../middlewares/Authentication")
cart.delete("/unlike/:id",authentication, remoCart);
cart.get("/like",authentication, getCart);
cart.post("/likee/:id",authentication, AddCart);

module.exports = cart;
