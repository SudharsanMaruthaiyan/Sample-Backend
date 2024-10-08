const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://sudharsan6078:PqFs6JtYbReNcNUt@cluster.9nhfd.mongodb.net/crud")

const userSchema = new mongoose.Schema({
    name:String,
    age:Number
});
const userModel = mongoose.model("emp", userSchema);

const emp1 = new userModel({
    name:"sudharsan",
    age:19
})

emp1.save()

app.get("/",(req,res)=>{
    res.send("message")
    console.log("hkklasld")
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});