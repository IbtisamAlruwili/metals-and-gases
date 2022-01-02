const express =require ("express")
const signupRout= express.Router()
const { userSignUp }=require("../controllers/SignUp")

signupRout.post("/userSignUp", userSignUp)


module.exports=signupRout
