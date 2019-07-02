const mongoose=require('mongoose');
const schema=mongoose.Schema;

let imageSchema=new mongoose.Schema({
    name:{type:String},
    note:{type: schema.Types.ObjectId, ref: 'Notes'},
    url:{type:String},
    creation:{type:Date}
})

module.exports=mongoose.model('Images',imageSchema);