const express =require ("express")
const signupRout= express.Router()
const { userSignUp, adminSignUp}=require("../controllers/SignUp")

signupRout.post("/userSignUp", userSignUp)
signupRout.post("/adminSignUp", adminSignUp)
//ناديت الفانكشين اللي بالكونترول 


module.exports=signupRout



