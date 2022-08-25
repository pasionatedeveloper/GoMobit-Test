const mongoose = require('mongoose');
const {Schema} = mongoose;


const userSchema = new Schema({

    userName:{
        type:String,
        required:[true,"UserName cannot be Empty"]
    },
    userEmail:{
        type:String,
        required:[true,"Email cannot be Empty"],
        unique:true
    },
    userPhoneNumber:{
        type:String,
        required:[true,"Phone Number cannot be Empty"]
    },
    userAge:{
        type:Number,
        required:[true,"Age cannot be Empty"]   
    },
    createdAt:{
        type:Date,
        required:true
    }
});
const User = mongoose.model('User',userSchema);
module.exports=User;