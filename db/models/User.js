const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
  name: { type: String },
  email: { type: String, unique: true }, //مايتكرر الايميل
  password: { type: String },
  roleId: { type: Number }, //اخزن البيانات
  //,اشوف كل يوزر ايش المنتجات اللي عمل عليها كاني اربط المنتجات باليوزر نفسه
  cart: [{ type: mongoose.Schema.Types.ObjectId, ref: "metalModel" }],
  cart1: [{ type: mongoose.Schema.Types.ObjectId, ref: "gasesModel" }],
});
module.exports = mongoose.model("userModel", userModel); //استخرجها علشان اذا ناديتها في مكان ثاني اقدر استخدمها
