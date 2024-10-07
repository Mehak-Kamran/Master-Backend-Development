const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/dataassociation")

const schema=mongoose.Schema({
    name:String,
    email:String,
    age:Number,
    // post:Array//here id of post will be stored
    post:[
        {
            type:mongoose.Schema.Types.ObjectId,//type is object id
            ref:"post"
        }
    ]
})

module.exports=mongoose.model("user",schema)