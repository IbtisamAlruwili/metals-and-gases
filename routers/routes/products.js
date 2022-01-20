const express =require ("express")
const productRoute = express.Router()
const getAllProducts  = require("../controllers/products");

productRoute.get("/products", getAllProducts);


module.exports= productRoute;

