const express=require('express');
const router=require('./router')
const app=express();
const passport=require('passport');
const passportsteup=require('./passport')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieSession= require('cookie-session')

mongoose.connect('mongodb://localhost:27017/authDB',{useNewUrlParser: true },()=>{
    console.log('db is connected')   
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use(
//     cookieSession({
//         maxAge:72000000,
//         keys:['asdfghj']
//     })
// )
app.use(passport.initialize());
app.use(passport.session());

app.listen(3001,()=>{
    console.log("server is create at http://localhost:3001");
})

app.use('/',router);