//boiler plate 
const express = require("express");
const app = express();
const path = require("path");
const user = require("./models/user")
//viewengine   
app.set("view engine", "ejs");
//cookies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//public folder
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
    res.render("index");
})

app.get("/read", async function (req, res) {
    let all = await user.find()
    res.render("read", { all });
})


app.post("/create", async function (req, res) {

    let { name, email, image } = req.body
    let createduser = await user.create({
        name,
        email,
        image
    })
    res.redirect("/read")

})

app.get("/delete/:id", async function (req, res) {


    let deleteuser = await user.findOneAndDelete({ _id: req.params.id })
    res.redirect("/read");

})

app.get("/update/:id", async function (req, res) {



    let edit = await user.findOne({ _id: req.params.id })


    // let deleteuser = await user.findOneAndDelete({_id: req.params.id })
    res.render("update", { edit });

})

app.post("/update/:id", async function (req, res) {

let {name,email,image}=req.body;

    let edited = await user.findOneAndUpdate({ _id: req.params.id },{name,email,image},{new:true})


    // let deleteuser = await user.findOneAndDelete({_id: req.params.id })
    res.redirect("/read");

})



app.listen(3000);