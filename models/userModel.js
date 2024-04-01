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

//* to not add password in response + called implicitly
userSchema.methods.toJSON=function(){
    const obj=this.toObject();
    delete obj.password;
    console.log(1234);
    return obj;
}

export default mongoose.model('User',userSchema);