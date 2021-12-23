const express =require ("express")
const loginRout= express.Router()
const { login } = require("../controllers/Login")

// const log=require("../controller/login").login

loginRout.post("/login", login)
//ناديت الفانكشين اللي بالكونترول  distructure

// بعد ما (ادخل تسجيل دخول ولوقين) يطلع التوكن , يعني ماينحط المصادقه قبلهن 
// اطبع بالتيرمينل
module.exports=loginRout
