const User = require('../modal/userModal');

exports.registerUser=async (req,res,next)=>{

    try
    {
        console.log(req.body)
        await User.create(req.body);
        res.status(200).json({
            "message":"User Registeration Request"
        });        
    }
     catch(err){
        next(err);
     }
}

exports.getAllUsers=async (req,res,next)=>{

    try{
        const usersList = await User.find({});
        res.status(200).json({
            users: usersList  
        });
    }
    catch(err){
        next(err);
    }
}