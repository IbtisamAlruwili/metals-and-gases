const express =require ("express")
const likee= express.Router()
const { getLike, like, unlike } = require("../controllers/like")
const { authentication } = require("../middlewares/Authentication")

likee.get("/getlike", authentication, getLike)
likee.post("/like", authentication, like)
likee.delete("/unLike", authentication, unlike)

module.exports = likee

