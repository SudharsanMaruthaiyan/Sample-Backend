const express = require('express')
const mongoose = require('mongoose')

const app = express()

mongoose.connect("mongodb+srv://sudharsan6078:PqFs6JtYbReNcNUt@cluster.9nhfd.mongodb.net/crud")

const UserSchema = new mongoose.Schema({
    name:String,
    age:Number
})
const userModel = mongoose.model("emp", UserSchema)

const emp1 = new userModel({
    name:"sudharsan",
    age:19
})

emp1.save()

app.get("/",(req,res)=>{
    res.send("message")
    console.log("hkklasld")
})

app.listen(3000)