const Text = require('../models/Text');

exports.getText = async (req,res,next)=>{
    try{
        const data = await Text.find();
        res.send(data);
    }catch(error){
        next(error);
    }
}

exports.setText = async (req,res,next)=>{
    try{
        const data = await Text({
            value:req.body.input
        });

        const d = await data.save();

        res.send(d)

    }catch(error){
        next(error);
    }
}