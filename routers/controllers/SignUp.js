const user = require("../../db/models/User");
const bcrypt = require("bcrypt");

const userSignUp = async (req, res) => {
  let { name, email, password } = req.body;
  try {
    password = await bcrypt.hash(password, 10);
    const newUser = await new user({ name, email, password ,roleId: 2, LikeCoffe:[] });//اخذ اوبجكت اليوزر واخزن فيه بيانات ايميل ووو

    const respons = await newUser.save() //حفظ db 
    res.status(201).json(respons)

  } catch (error) {
      res.send(error)
  }
};
 
const adminSignUp = async (req, res) => {
  let { name, email, password } = req.body;
  try {
    password = await bcrypt.hash(password, 10);    //تشفير
    const newUser = await new user({ name, email, password ,roleId: 1, LikeCoffe:[] }); //اخذ اوبجكت اليوزر واخزن فيه بيانات ايميل ووو

    const respons = await newUser.save()   
    res.status(201).json(respons)

  } catch (error) {
      res.send(error)
  }
};

module.exports={userSignUp, adminSignUp};
