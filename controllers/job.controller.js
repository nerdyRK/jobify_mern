import Job from "../models/jobModel.js"
import { StatusCodes } from "http-status-codes"

export const getAllJobs=async (req,res)=>{
    const jobs=await Job.find({createdBy:req.user.userId})
    res.status(StatusCodes.OK).json({jobs})
}
    
export const createJob=async(req,res)=>{
    req.body.createdBy=req.user.userId;
    const newJob=await Job.create(req.body)
    res.status(StatusCodes.CREATED).json({newJob})
}

export const editJob=async(req,res)=>{
    const updatedJob=await Job.findByIdAndUpdate(req.params.id, req.body,{
        new:true
    });
    res.status(200).json({message:"job modified",job:updatedJob})
}

export const deleteJob=async(req,res)=>{
    const removedJob=await Job.findByIdAndDelete(req.params.id)
    res.status(StatusCodes.OK).json({message:"job deleted",job:removedJob})
}


export const getJob=async(req,res)=>{
    const job=await Job.findById(req.params.id);
    res.status(StatusCodes.OK).json(job);
}