const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    credits:{
        type:Number,
        default:100
    }

},{
    timestamps: true
})


const userModel = mongoose.model("User", userSchema);
module.exports = userModel;