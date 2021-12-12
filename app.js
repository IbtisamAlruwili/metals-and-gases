const express = require("express");
const app = express();
const cors = require("cors");
require("./db/db");
const loginRout = require('./routers/routes/Login');
const signupRout = require('./routers/routes/SignUp')
app.use(express.json());
app.use(cors());

app.use('/', signupRout);
app.use('/user', loginRout);





////////////////////////////
const Port = 5000;
app.listen(Port,()=>{
    console.log("server is running");
})
