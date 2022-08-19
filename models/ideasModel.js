const mongoose=require("mongoose");
const ideaSchema=new mongoose.Schema({
    user_img:String,
    user_name:String,
    description:String,
    longDescription:String,
    vote:{type:Number,default:0},
    status:{type:Boolean,default:false},
validat:{type:Boolean,default:false}
})

const Idea = mongoose.model('Idea', ideaSchema);
module.exports=Idea;