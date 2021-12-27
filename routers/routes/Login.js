const express =require ("express")
const loginRout= express.Router()
const { login} = require("../controllers/Login")

loginRout.post("/login", login)


module.exports=loginRout


























// const express =require ("express")
// const loginRout= express.Router()
// const { login, like, unlike } = require("../controllers/Login")
// const { authentication } = require("../middlewares/Authentication")

// loginRout.post("/login", login)
// loginRout.post("/like", authentication, like)
// loginRout.post("/unLike", authentication, unlike)

// module.exports=loginRout
