import express from "express";
import mongoose from "mongoose";

async function connects(req,res){
await mongoose.connect("mongodb+srv://aadhee:silai@bitfumes-mern.7i5ge.mongodb.net/?retryWrites=true&w=majority&appName=bitfumes-mern")
.then(console.log("mongoDB connection Succesful"))};

export default connects;