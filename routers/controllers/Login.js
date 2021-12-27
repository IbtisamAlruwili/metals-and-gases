const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../../db/models/User");

const login = async (req, res) => {
  let { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email: email });//ادور الايميل اللي دخله اليوزر
    if (user) {    //اذا صح 
      const see = await bcrypt.compare(password, user.password);  //اتاكد ان الباسورد صح
      if (see === true) {
        const payload = { userId: user._id, userName: user.name };  // يتم عليه استخراج التوكن  للشغلتين ذول 
        const token = jwt.sign(payload, "ABC");  /// generate new token
        let arr = [];  // نعرف اراى
        if(user.roleId === 1){  /// تشك اذا كان المستخدم ادمن او مستخدم عادى
          arr.push("OurWorks", "Metals", "Gases", "Explorations", "News");   // لو ادمن يرجع الصفحات 
        }else{
          arr.push("ShowOurWorks", "ShowExplorations");  // لو مستخدم عادى يرجع الصفحات 
        }
        res.status(200).json({ token, arr });  // نرجع الاراى مع التوكن
      } else {
        res.status(403).json("wrong PassWord!");
      }
    } else {
      res.status(404).json("wrong Email!");
    }
  } catch (error) {
    res.send(error);
  }
};

// const like = async (req, res) => {
//   const id = req.body.id;
//   const user = req.token.userId;
//   try {
//     const newLike = await userModel.findOneAndUpdate(
//       { _id: user },
//       { $push: { Like: id } },
//       { new: true }
//     );
//     res.status(201).json(newLike);
//   } catch (error) {
//     res.send(error);
//   }
// };

// const unlike = async (req, res) => {
//   const id = req.body.id;
//   const user = req.token.userId;
//   try {
//     const newLike = await userModel.findOneAndUpdate(
//       { _id: user },
//       { $pull: { Like: id } },
//       { new: true }
//     );
//     res.status(201).json(newLike);
//   } catch (error) {
//     res.send(error);
//   }
// };

module.exports = { login};
// module.exports = { login, like, unlike };

