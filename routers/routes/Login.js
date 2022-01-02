
const express =require ("express")
const loginRout= express.Router()
const { login} = require("../controllers/Login")
const { authentication } = require("../middlewares/Authentication")

loginRout.post("/login", login)


module.exports=loginRout