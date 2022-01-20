const Gases = require("../../db/models/Gases");

const InsertGases = async (req, res) => {
  let { name, description, img_url, price } = req.body;
  try {
    const gases = await new Gases({ name, description, img_url, price });
    const respons = await gases.save();
    res.status(201).json(respons);
  } catch (error) {
    res.send(error);
  }
};

const deleteGases = async (req, res) => {
  const id = req.params.id; //
  try {
    const deleted = await Gases.findOneAndDelete({ _id: id }); //علشان يحذف عنصر واحد
    res.status(200).json(deleted);
  } catch (error) {
    res.send(error);
  }
};

const updateGases = async (req, res) => {
  const id = req.params.id; // جبت العنصر اللي ابي اعمل عليه تعديل
  const { name, description } = req.body; // التحديث ل
  try {
    const updated = await Gases.findOneAndUpdate(
      // ميثود التحديث
      { _id: id }, //
      { name: name, description: description }, //
      { new: true } //
    );
    res.status(200).json(updated);
  } catch (error) {
    res.send(error);
  }
};

module.exports = { InsertGases, deleteGases, updateGases }; // استخرج
