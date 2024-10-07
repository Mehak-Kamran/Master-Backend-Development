const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/dataassociation")

const pschema=mongoose.Schema({
    data:String,
    // user:String,//user id, not  user name
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    date:{
        type:Date,
        default:Date.now()
    }
})

module.exports=mongoose.model("post",pschema)