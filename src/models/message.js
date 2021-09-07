const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
    email:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("invalid email!!!!")
            }
        },
    name:{
        type:String,
        required:true,
        minLength:3
    },
    },
    number:{
        type:Number,
        required:true,
        min:10
    },
    textarea:{
        type:String,
        required:true,
        minLength:1
    },
    date:{
        type:Date,
        default:Date.now
    }
})

// collection

const User = mongoose.model("User",userSchema);
module.exports = User;