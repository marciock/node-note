const mongoose=require('mongoose');
//const schema=mongoose.Schema;

let noteSchema=new mongoose.Schema({
    title:{type:String},
    text:{type:String},
    creation:{type:Date},
    active:{type:Boolean}
})

module.exports=mongoose.model('Notes',noteSchema);