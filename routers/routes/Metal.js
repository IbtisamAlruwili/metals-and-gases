const express =require ("express")
const metalRoute = express.Router()
const { InsertMetal, deleteMetal,updateMetal }=require("../controllers/Metal")
const { authentication }=require("../middlewares/Authentication")

metalRoute.post("/metal", authentication, InsertMetal)
metalRoute.put("/metal/:id", authentication, updateMetal)
metalRoute.delete("/metal/:id", authentication, deleteMetal)

module.exports= metalRoute

