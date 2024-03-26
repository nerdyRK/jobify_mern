import mongoose,{ Schema } from "mongoose";

const userSchema=new Schema({
    username:String,
    email:{
        type:String,
        required:true
    },
    password:String,
    location:{
        type:String,
        default:'my city'
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:'user',
    }
},{timestamps:true})

export default mongoose.model('User',userSchema);