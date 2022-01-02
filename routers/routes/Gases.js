const express =require ("express")
const gasesRoute = express.Router()
const { InsertGases, deleteGases,updateGases }=require("../controllers/Gases")
const { authentication }=require("../middlewares/Authentication")

gasesRoute.post("/gases", authentication, InsertGases),
gasesRoute.put("/gases/:id", authentication,updateGases)
gasesRoute.delete("/gases/:id", authentication, deleteGases)

module.exports= gasesRoute
