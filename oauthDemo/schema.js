const mongoose=require('mongoose');
var userSchema = new mongoose.Schema({
    username: String,
    googleID:String,
  });
  const userModel=mongoose.model('googleUser',userSchema);
  
  module.exports=userModel;