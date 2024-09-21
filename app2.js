const express=require("express");
const app=express();
const jwt = require('jsonwebtoken');
const cookieparser=require("cookie-parser");
app.use(cookieparser());

app.get("/",function(req,res){
   
    //setting jwt
    let token = jwt.sign({ email: 'mehakkamran52@gmail.com' }, 'secret');
    console.log(token)
    //set cookie
    res.cookie("token",token);
    
    res.send("done")
})
app.get("/read",(req,res)=>{
       //read
    console.log(req.cookies.token)
    res.send("hello");
    //extract data 
    let data= jwt.verify(req.cookies.token,"secret")
    console.log(data)
})



app.listen(3000)