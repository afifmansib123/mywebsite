import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type: String,
        default: 'user',
    },
    root:{
        type:Boolean,
        default: false
    }
},{timestamps:true})

module.exports = mongoose.models.User || mongoose.model('User',userSchema)