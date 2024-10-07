const express=require("express")
const app=express()
const user=require("./model/usermodel")
const post=require("./model/postmodel")

app.get("/",(req,res)=>{
    res.send("hello")

})

app.get("/create", async(req,res)=>{
    const cuser=await  user.create({
        name:"mak",
    email:"mak@gmail.com",
    age:33,
    
    })
    res.send(cuser)
})

app.get("/post", async (req,res)=>{
    const cpost=await post.create({
    data:"hello this is home blog",
    user:"66f6337539aca497f52db0fd",
    
    })
//finding user
let fuser=await user.findOne({_id:"66f6337539aca497f52db0fd"})
fuser.post.push(cpost._id)
await fuser.save()
res.send({cpost,fuser})
})





app.listen(3000)