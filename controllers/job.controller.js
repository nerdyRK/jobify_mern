import Job from "../models/jobModel.js"
import { StatusCodes } from "http-status-codes"
import { NotFoundError } from "../errors/customErrors.js"

export const getAllJobs=async (req,res)=>{
    const jobs=await Job.find()
    res.status(StatusCodes.OK).json({jobs})
}

export const createJob=async(req,res)=>{
    const newJob=await Job.create(req.body)
    res.status(StatusCodes.CREATED).json({newJob})
}

export const editJob=async(req,res)=>{
    let {id}=req.params;
    const updatedJob=await Job.findByIdAndUpdate(id, req.body,{
        new:true
    });
    if(!updatedJob) throw new NotFoundError('No job found')
    res.status(200).json({message:"job modified",job:updatedJob})
}

export const deleteJob=async(req,res)=>{
    let {id}=req.params;
    const removedJob=await Job.findByIdAndDelete(id)
    if(!removedJob) throw new NotFoundError('No job found')
    
   
    res.status(StatusCodes.OK).json({message:"job deleted",job:removedJob})
}


export const getJob=async(req,res)=>{
    let {id}=req.params
   const job=await Job.findById(id)
    if(!job) throw new NotFoundError('No job found')
    res.status(StatusCodes.OK).json(job)
}