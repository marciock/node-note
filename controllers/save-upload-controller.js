const modelNote=require('../models/notes');
const modelImage=require('../models/images');
const fs=require('fs');

modules.exports={

    new:(req,res)=>{

        

        let newNote=new modelNote({
            title:req.body.title,
            text:req.body.text,
            creation:req.body.creation,
            active:req.body.active
        });
        newNote.save((err,data)=>{
            if(err){
                return res.status(500).json({
                    message:'Error saving data',
                    error:err
                });
            }
            return res.json({
                message:'saved',
                _id:data._id
            });
        });
       
        let newImage=new modelImage({
            name:req.body.name,
            note:newNote._id,
            url:req.body.url,
            creation:req.body.creation,
            
        }); 
        newImage.save((err,data)=>{
            if(err){
                return res.status(500).json({
                    message:'Error saving data',
                    error:err
                });
            }
            return res.json({
                message:'saved',
                _id:data._id
            });
        })
            
    },
}