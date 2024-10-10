import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import bodyParser from "body-parser";  


const app =express();
const PORT =4000;

app.use(cors());
app.use(bodyParser.json());  
 
app.post("/transaction",(req,res)=>{
  //const {amount,description,date}=res.body;
   console.log(req.body);
   res.json({message:"Hello world"});
  });  

  mongoose.connect("mongodb+srv://aadhee:silai@bitfumes-mern.7i5ge.mongodb.net/?retryWrites=true&w=majority&appName=bitfumes-mern")
.then(console.log("mongoDB connection Succesful"));
 

  app.get("/",(req,res)=>{
    
res.send("Hello world");
}); 

app.listen(PORT,()=>{
    console.log("Server is Running at http://localhost:4000");
}); 