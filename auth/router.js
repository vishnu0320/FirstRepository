const express=require('express');
const app=express();
const passport=require('passport')

app.get('/',(req,res)=>{
    res.end("hello");
})

app.get('/user',(req,res)=>{
    res.send('failed');
})

app.get('/current_user',(req,res)=>{
    console.log('----- ',req.user)
    res.send(req.user);
})

app.get('/auth/google', passport.authenticate('google',{
    scope:['profile']
}));

app.get('/auth/google/callback',passport.authenticate('google',{failureRedirect :'/user'}),(req,res)=>{
    console.log(`ok`);
    res.send('ok')
});

module.exports=app