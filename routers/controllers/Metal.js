const Metal = require("../../db/models/Metal");

const InsertMetal = async (req, res) => {   // الاضافة 
  let { name, description, img_url } = req.body;  //  body اضيف 
  try {
    const metal = await new Metal({ name, description, img_url });
    const respons = await metal.save()   //
    res.status(201).json(respons)
  } catch (error) {
      res.send(error)
  }
};

const deleteMetal = async (req, res) => {
  const id = req.params.id;  //  يحذف ب id
  try {
    const deleted = await Metal.findOneAndDelete({_id: id});  //علشان يحذف عنصر واحد 
    res.status(200).json(deleted);
  } catch (error) {
    res.send(error);
  }
};


const updateMetal = async (req, res) => {
  const id = req.params.id; // جبت العنصر اللي ابي اعمل عليه تعديل 
  const {desc} = req.body;   // التحديث ل الوصف 
  try {
    const updated = await Metal.findOneAndUpdate(  // ميثود التحديث 
      { _id: id },   
      { desc },
    );
    const des = await Metal.find({})
    res.status(200).json(des);
  } catch (error) {
    res.send(error);
  }
};

module.exports={ InsertMetal, deleteMetal,updateMetal }; // استخرج 
