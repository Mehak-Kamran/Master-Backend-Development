//boiler plate 
const express= require("express");
const app=express();
const path=require("path");
//viewengine   
app.set("view engine","ejs");
//cookies
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//public folder
app.use(express.static(path.join(__dirname,"public")));

app.get("/",function(req,res){
    res.render("index");
})

app.get("/read",function(req,res){
    res.render("read");
})

app.listen(3000);