const express=require("express");
const app=express();
//requiring cookie parser to read cookie
const cookieparser=require("cookie-parser")
app.use(cookieparser())

app.get("/",function(req,res){
    //set a cookie
    res.cookie("name","mehak")
    //
    res.send("hello");
    //read cookie
    console.log(req.cookies)

})

app.get("/read",(req,res)=>{
    res.send("read");

})


app.listen(3000)