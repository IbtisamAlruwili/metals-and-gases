const userModel = require("../../module/user");

const getLike = async (req, res) => {
  const user = req.token.userId;

  try {
    const likeproduct = await userModel
      .findOne({ _id: user })
      .populate("LikeCo");
    res.status(200).json(likeproduct.LikeCo);
    
  } catch (error) {
    res.send(error);
  }
};

const like = async (req, res) => {
    const id = req.body.id;       //يجيب العنصر اللي يبي يحط له لايك يحدده من ال id
    const user = req.token.userId;   //يجيب الشخص اللي يبي يحط له لايك يحدده من ال token
    try {
      const newLike = await userModel.findOneAndUpdate(
        { _id: user },
        { $push: { Like: id } },  //for add
         {new:true}
        );
      res.status(201).json(newLike);
    } catch (error) {
      res.send(error);
  
    }
  };

  
const unlike = async (req, res) => {
    const id=req.body.id;   //يجيب العنصر اللي يبي يحط له لايك يحدده من ال id
    const user = req.token.userId;  //يجيب الشخص اللي يبي يحط له لايك يحدده من ال token
    try {
      const newLike = await userModel.findOneAndUpdate(
       {_id:user},
       {$pull:{Like:id}},
       {new:true}
       );
      res.status(201).json(newLike);
    } catch (error) {
      res.send(error);
    }
  };

  module.exports = { getLike, like, unlike };
