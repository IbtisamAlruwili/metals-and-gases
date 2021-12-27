const Explorations = require("../../db/models/Explorations");
const Metal = require("../../db/models/Metal");
const Gases = require("../../db/models/Gases");

const InsertExplorations = async (req, res) => {
  let { name, description, img_url } = req.body;
  try {
    const exploration = await new Explorations({ name, description, img_url });
    const respons = await exploration.save()
    res.status(201).json(respons)

  } catch (error) {
      res.send(error)
  }
};

const products = async (req, res) => {
  try {
    const exploration = await Explorations.find()
    const gases = await Gases.find()
    const metal = await Metal.find()

    res.status(200).json(
      {
       exploration: exploration,
       gases: gases,
       metal: metal
      }
    )

  } catch (error) {
      res.send(error)
  }
};


module.exports={ InsertExplorations, products };
