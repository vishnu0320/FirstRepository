const express=require('express');
const app=express();
const passport=require('passport')

app.get('/',(req,res)=>{
    res.end("hello");
})

app.get('/auth/google', passport.authenticate('google',{
    scope:['profile']
}));

app.get('/auth/google/callback',passport.authenticate('google'),(req,res)=>{
    res.end("done")
});

module.exports=app