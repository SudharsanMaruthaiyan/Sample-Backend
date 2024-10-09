const express = require("express")
const mongoose = require("mongoose")

const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://sudharsan6078:sudharsan123@backend.uoswi.mongodb.net/");

const Schema = new mongoose.Schema({
    name: String,
    age : Number
})

const Sample = mongoose.model("sample",Schema);

app.post("/", async (req,res)=>{

    const newuser = new Sample(req.body);

    try{
        const saveuser = await newuser.save();
        res.json({saveuser,message:"Successfully added to db"});
    }catch(e){
        res.send("Error in post db")
    }
})

app.get("/", async (req,res)=>{
    try{
        const users = await Sample.find();
        res.json(users)
    }catch(e){
        res.send(e);
    }
})


app.listen(3000);

