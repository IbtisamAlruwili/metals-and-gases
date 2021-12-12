const express =require ("express")
const signupRout= express.Router()
const {SignUp}=require("../controllers/SignUp")
signupRout.post("/signUp",SignUp)


module.exports=signupRout 