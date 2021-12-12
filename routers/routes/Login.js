const express =require ("express")
const loginRout= express.Router()
const {login}=require("../controllers/Login")
loginRout.post("/login",login)


module.exports=loginRout 