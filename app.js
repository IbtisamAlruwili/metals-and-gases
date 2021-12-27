const express = require("express");
const app = express();
const cors = require("cors");
require("./db/db");
const loginRout = require('./routers/routes/Login');
const signupRout = require('./routers/routes/SignUp')
const explorationRoute = require('./routers/routes/Explorations')
const gasesRoute = require('./routers/routes/Gases')
const metalRoute = require('./routers/routes/Metal')

app.use(express.json());
app.use(cors());

app.use('/', signupRout);
app.use('/', loginRout);
app.use('/', explorationRoute);
app.use('/', gasesRoute);
app.use('/', metalRoute);









////////////////////////////
const Port = 5000;
app.listen(process.env.PORT || Port,()=>{
    console.log("server is running");
})
