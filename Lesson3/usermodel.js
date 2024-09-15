const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/practice");

const userSchema= mongoose.Schema({
    username:"String",
    useraddress:"String",
    useremail:"String"

})

module.exports=mongoose.model("usermodel",userSchema)