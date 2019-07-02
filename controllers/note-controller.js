const monggose=require('mongoose');
const modelNote=require('../models/notes');
const modelImage=require('../models/images');

module.exports={

    listAll:(req,res)=>{
        modelNote.find({'active':'true'}).then((results)=>{
           //let data= res.json(results)
           res.render('layouts/home',{data:results});
        })
        
    },

    listAny:(req,res)=>{
        let any=req.body.any;
        let field=req.body.field;
        modelNote.find({any:field})
        .then(data=>res.json(data))
        .catch(err=>res.send(err))
    },
     update: (req,res)=>{
        let id=req.body.id;
        modelNote.findOne({_id:id}, (err,data)=>{
            if(err){
                return res.status(500).json({
                    message:'Error saving data',
                    error:err
                });
            }
            if(!data){
                return res.status(404).json({
                    message:'No such data'
                });
            }

            data.title=req.body.title ? req.body.title:data.title;
            data.text=req.body.text ? req.body.text:data.text;
            data.creation=req.body.creation ? req.body.creation:data.creation;
            data.active=req.body.active ? req.body.active:data.active;

            data.save((err,data)=>{
                if(err){
                    return res.status(500).json({
                        message:'Error getting data'
                    });
                }
                if(!data){
                    return res.status(404).json({
                        message:'No such data'
                    });
                }
                return res.json(data);
            })


        })
    },
}