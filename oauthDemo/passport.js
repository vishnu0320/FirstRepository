const passport=require('passport');
const googleStrategy = require('passport-google-oauth20');
const keys=require('./keys');
const user=require('./schema')

passport.use(
    new googleStrategy({
        clientID: keys.google.id,
        clientSecret:keys.google.secret,
        callbackURL:'/auth/google/callback'
    },
    (token, tokenSecret, profile, done)=> {   

        user.findOne({googleID:profile.id}).then((result)=>{
            if(result){
                //user exists
                console.log("user hai yaha")
            }else{
            // if not,create new user                
                new user({
                    username:profile.displayName,
                    googleID:profile.id,
                }).save().then((newUser) => {
                    console.log(`new user is ${newUser}`)
                })
            }
        })              
      })
    )
