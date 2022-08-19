const express = require("express");
const PrjValide = require("../models/prjvalide");

const PrjValideRouter=express.Router();

PrjValideRouter.post("/add",async(req,res)=>{
    try {
        let newprj= new PrjValide(req.body);
        let result=await newprj.save();
        res.send({prjValide:result,msg:"prj is added"})
    } catch (error) {
      console.log(error)  
    }
});

//get all project
PrjValideRouter.get("/",async(req,res)=>{
  try {
    let result=await PrjValide.find();
    res.send({prjValide:result,msg:"all project"})
  } catch (error) {
    console.log(error)
  }
 });
//get project by id 
PrjValideRouter.get("/:id",async(req,res)=>{
  try {
    let result=await PrjValide.findById(req.params.id);
    res.send({prjValide:result,msg:"project"})
  } catch (error) {
    console.log(error)
  }
 });

module.exports=PrjValideRouter;