const userModel = require("../../db/models/User");

const getCart = async (req, res) => {
  const user = req.token.userId;    //  اخزن به 
  try {
    const cartProduct = await userModel
      .findOne({ _id: user })    // اجيب 
      .populate("Cart");         // داخل مودل 
    res.status(200).json(cartProduct.Cart);
    } catch (error) {
    res.send(error);
  }
};

const AddCart = async (req, res) => {
    const id = req.body.id;          //
    const user = req.token.userId;         //
    try {
      const newCart1 = await userModel.findOneAndUpdate(
        { _id: user },             //
        { $push: { cart: id } },  //
        { new: true }         //
      );
      res.status(201).json(newCart1);
    } catch (error) {
      res.send(error);
    }
  };
  
  const remoCart = async (req, res) => {
    const id = req.body.id;              //
    const user = req.token.userId;             //
    try {
      const newCart = await userModel.findOneAndUpdate(
        { _id: user },                     //
        { $pull: { cart: id } },            //
        { new: true }                   //
      );
      res.status(201).json(newCart);
    } catch (error) {
      res.send(error);
    }
  };
  module.exports = { getCart, AddCart, remoCart };