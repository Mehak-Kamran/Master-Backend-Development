const express=require("express");
const app=express();
const bcrypt=require("bcrypt");


app.get("/",function(req,res){

    bcrypt.genSalt(10, function(err, salt) {
        //encry
        // bcrypt.hash("mehak", salt, function(err, hash) {
        //     // Store hash in your password DB.
        //     console.log(hash)
            
        // });
        //decry
        bcrypt.compare("mehak", "$2b$10$6YG731FpJyPZEK7o6Nl0w.vrkoKy1piR5m3VGk/MphN64DyPt8cCC", function(err, result) {
            // result == true
            console.log(result)
        });
    });
   res.send("hi")

})




app.listen(3000)