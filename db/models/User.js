const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
  name: { type: String },
  email: { type: String, unique: true }, //مايتكرر الايميل 
  password: { type: String },
  roleId: {type: Number},            //اخزن البيانات 
  Like:[{type: mongoose.Schema.Types.ObjectId, ref:"productModel"}] , //,اشوف كل يوزر ايش المنتجات اللي عمل عليها كاني اربط المنتجات باليوزر نفسه 
});
module.exports = mongoose.model("userModel", userModel);//استخرجها علشان اذا ناديتها في مكان ثاني اقدر استخدمها
