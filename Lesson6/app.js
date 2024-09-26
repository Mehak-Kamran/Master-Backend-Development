//setting up initials 
const express = require("express")
const app = express()
const path = require("path")
const usermodel = require("./usermodel/user")
const bcrypt = require("bcrypt")
const jwt=require("jsonwebtoken")
const cookieparser=require("cookie-parser")

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("index");
})




//task1 store user and bcrypt password
app.post("/create", (req, res) => {
    let { name, email, password, age } = req.body

    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(password, salt, async function (err, hash) {
            let cuser = await usermodel.create({
                name,
                email,
                password: hash,
                age
            }
            )
            //task2 token gen
            const token = jwt.sign({ email: email }, 'shhhhh');
            res.cookie("token",token);
            res.send(cuser)

        });
    });
//task 3 cookie remove when logout
    app.get("/logout",(req,res)=>{
        res.cookie("token","");
        res.redirect("/")
    })

    //task4
    app.get("/login",(req,res)=>{
        res.render("login")
    })

    app.post("/login", async (req,res)=>{
      


        let luser = await usermodel.findOne({email:req.body.email})
        if(!luser) res.send("something went wrong")
            
                bcrypt.compare(req.body.password, luser.password, function(err, result) {
                    if(!result){
                       res.send("something went wrong")
                    }
                    else{
                       res.send("you can login")
                    }
               });

        
        
    })




})

app.listen(3000);