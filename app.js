const express=require("express");
const bodyparser=require("body-parser");
const mysqlConnection=require("./connection");
var cors = require('cors')

const userRoutes= require("./routes/user");

var app=express();
app.use(cors());

app.use(bodyparser.json());
app.use("",userRoutes);


app.listen(4000);