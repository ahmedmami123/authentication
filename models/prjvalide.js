const mongoose=require("mongoose");
const prjValideSchema=new mongoose.Schema({
    user_img:String,
    user_name:String,
    description:String,
    longDescription:String,
    vote:{type:Number,default:0},
  
})

const PrjValide = mongoose.model('PrjValide',prjValideSchema);
module.exports=PrjValide;