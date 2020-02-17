const passport=require('passport');
const googleStrategy = require('passport-google-oauth20').Strategy;
const keys=require('./keys');
const user=require('./schema')

passport.serializeUser((user,done)=>{
    done(null,user.id)
})

passport.deserializeUser((id,done)=>{
    user.findById({id}).then((user)=>{
        done(null,user)
    })
})

passport.use(
    new googleStrategy({
        clientID: keys.google.id,
        clientSecret:keys.google.secret,
        callbackURL:'/auth/google/callback'
    },
    (token, tokenSecret, profile, done)=> {   

        user.findOne({googleID:profile.id})
        .then((result)=>{
            if(result){
                //user exists
                console.log("user exist")
                done(null,result)

            }else{
                // if not,create new user  
                             
                new user({
                    username:profile.displayName,
                    googleID:profile.id,
                }).save().then((newUser) => {
                    console.log(`new user is ${newUser}`)
                    return done(null,newUser)
                })
            }
        })  
                  
    })
)
// module.exports=passport