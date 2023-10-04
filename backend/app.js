const express = require('express');
const app=express();
const mongoose=require('mongoose')
const morgan = require('morgan');
const bodyParser = require('body-parser')
require("dotenv").config();
var cors=require('cors');


//DATABASE 
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser:true,
    useUnifiedTopology:true,


}).then(console.log("DB Connected"))
.catch((err)=>console.log(err))
//port
const port=process.env.PORT || 8000

app.listen(port,() => {
    console.log(`server running on port ${port}`)
})