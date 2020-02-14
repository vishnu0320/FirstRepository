const express=require('express');
const router=require('./router')
const app=express();
const passportSetup=require('./passport')
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/authDB',{useNewUrlParser: true },()=>{
    console.log('db is connected')   
});
app.listen(3001,()=>{
    console.log("server is create at http://localhost:3001");
})

app.use('/',router);