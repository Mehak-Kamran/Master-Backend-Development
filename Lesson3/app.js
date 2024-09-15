//express boiler plate
const express = require("express");
const usermodel = require("./usermodel");
const app = express();

app.get("/", function (req, res) {
    res.send("hey")
})

app.get("/create", async (req, res) => {
    const user = await usermodel.create({
        username: "Ayesha",
        useraddress: "Gulshan",
        useremail: "ayeshakamran52@gmail.com"

    })
    res.send(user)
})

app.get("/read", async (req, res) => {
    //const user = await usermodel.findOne({username:"Ayesha"})

    // const user = await usermodel.find({username:"Ayesha"})
    const user = await usermodel.find()
    res.send(user)
})

app.get("/update", async (req, res) => {
    const user = await usermodel.findOneAndUpdate({username:"Ayesha"},{username:"Ayesha Kamran"},{new:true})

    // const user = await usermodel.find({username:"Ayesha"})
    res.send(user)
})

app.get("/delete", async (req, res) => {
    const user = await usermodel.findOneAndDelete({username:"Mehak"})

    
    res.send(user)
})


app.listen(3000)