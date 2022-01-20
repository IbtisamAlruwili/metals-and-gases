const express = require("express");
const app = express();
const cors = require("cors");
require("./db/db");

const loginRout  = require('./routers/routes/Login');
const signupRout = require('./routers/routes/SignUp');
const cartRout   = require('./routers/routes/Cart');
const gasesRoute = require('./routers/routes/Gases');
const metalRoute = require('./routers/routes/Metal');
const productRoute = require('./routers/routes/products');

app.use(express.json());
app.use(cors());

app.use( signupRout);
app.use( loginRout);
app.use( cartRout);
app.use( gasesRoute);
app.use(metalRoute);
app.use(productRoute);

////////////////////////////
const Port = 5000;
app.listen(process.env.PORT || Port,()=>{
    console.log("server is running");
})
