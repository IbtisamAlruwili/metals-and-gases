const userModel = require("../../db/models/User");

const getCart = async (req, res) => {
  const user = req.token.userId; //  اخزن به
  try {
    const cartProduct = await userModel
      .findOne({ _id: user }) // اجيب
      .populate("cart"); // داخل مودل
    console.log(cartProduct.cart);
    res.status(200).json(cartProduct.cart);
  } catch (error) {
    res.send(error);
  }
};
const getGasesCart = async (req, res) => {
  const user = req.token.userId; //  اخزن به
  try {
    const cartProduct = await userModel
      .findOne({ _id: user }) // اجيب
      .populate("cart1"); // داخل مودل
    console.log(cartProduct.cart1);
    res.status(200).json(cartProduct.cart1);
  } catch (error) {
    res.send(error);
  }
};

const AddCart = async (req, res) => {
  const id = req.params.id; //
  const user = req.token.userId; //
  try {
    const newCart1 = await userModel.findOneAndUpdate(
      { _id: user }, //
      { $push: { cart: id } }, //
      { new: true } //
    );
    res.status(201).json(newCart1);
  } catch (error) {
    res.send(error);
  }
};
const AddGasesCart = async (req, res) => {
  const id = req.params.id; //
  const user = req.token.userId; //
  try {
    const newCart1 = await userModel.findOneAndUpdate(
      { _id: user }, //
      { $push: { cart1: id } }, //
      { new: true } //
    );
    res.status(201).json(newCart1);
  } catch (error) {
    res.send(error);
  }
};

const remoCart = async (req, res) => {
  const id = req.params.id; //
  const user = req.token.userId; //
  try {
    const newCart = await userModel.findOneAndUpdate(
      { _id: user }, //
      { $pull: { cart: id } }, //
      { new: true } //
    );
    res.status(201).json(newCart);
  } catch (error) {
    res.send(error);
  }
};
const remoGasesCart = async (req, res) => {
  const id = req.params.id; //
  const user = req.token.userId; //
  try {
    const newCart = await userModel.findOneAndRemove(
      { _id: user }, //
      { $pull: { cart: id } }, //
      { new: true } //
    );
    res.status(201).json(newCart);
  } catch (error) {
    res.send(error);
  }
};
module.exports = {
  getCart,
  AddCart,
  remoCart,
  getGasesCart,
  AddGasesCart,
  remoGasesCart,
};
