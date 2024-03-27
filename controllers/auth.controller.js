import { StatusCodes } from "http-status-codes";
import User from "../models/userModel.js";
import { comparePassword, hashPassword } from "../utils/passwordUtils.js";
import { UnauthenticatedError } from "../errors/customErrors.js";
import { createJWT } from "../utils/tokenUtils.js";

export const login=async(req,res)=>{
    const  user = await User.findOne({email: req.body.email});
    
    const isValiduser=user && await comparePassword(req.body.password,user.password);
    if(!isValiduser) throw new UnauthenticatedError('Invalid credentials')

    const token=createJWT({userId:user._id,role:user.role})
    const oneDay=1000*24*60*60
    res.cookie('token',token,{
        httpOnly:true,
        expires:new Date(Date.now()+oneDay),
        secure:process.env.NODE_ENV==='production'
    })
    res.status(StatusCodes.OK).json({msg:'user logged in'})
}

export const register=async(req,res)=>{
    const isFirstAccount=await  User.countDocuments()===0;
    req.body.role=isFirstAccount?'admin':'user';

    const hashedPassword=await hashPassword(req.body.password);
    req.body.password=hashedPassword;
    
    const user=await User.create(req.body);
    res.status(StatusCodes.CREATED).json({msg:"User regisered successfully"});
}