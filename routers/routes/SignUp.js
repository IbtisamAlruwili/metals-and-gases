const express =require ("express")
const signupRout= express.Router()
const { userSignUp, adminSignUp }=require("../controllers/SignUp")

signupRout.post("/userSignUp", userSignUp)
signupRout.post("/adminSignUp", adminSignUp)


module.exports=signupRout
