import jobModel from "../models/jobModel.js"

let jobs=[{
    id:1,
    company:"Apple",
    position:"frontend developer"
},
{
    id:2,
    company:"Xenon Stack",
    position:"Software developer"
}
]


export const getAllJobs=async (req,res)=>{
    res.status(200).json(jobs)
}

export const createJob=async(req,res)=>{
    const {company,position}=req.body;
    if(!company || !position){
        return res.status(400).json({"message":"please provide company and position"})
    }
    const id=Math.floor(Math.random()*1000)+1;
    const newJob={id,...req.body};
    jobs.push(newJob);
    res.status(201).json(newJob)
}

export const editJob=async(req,res)=>{
    const {company,position}=req.body;
    if(!company || !position){
        return res.status(400).json({"message":"please provide company and position"})
    }
    let {id}=req.params;
    let job=jobs.find((j)=> j.id===Number(id));
    if(!job){
        return res.status(404).json({"message":"no such job"});
    }
    job.company=company
    job.position=position
    res.status(200).json({message:"job modified",job})
}

export const deleteJob=async(req,res)=>{
    let {id}=req.params;
    let job=jobs.find((j)=> j.id===Number(id));
    console.log(job);
    if(!job){
        return res.status(404).json({"message":"no such job"});
    }
    let newjobs=jobs.filter((j)=> j.id!==job.id);
    jobs=newjobs;
    res.status(200).json({message:"job deleted",jobs})
}


export const getJob=async(req,res)=>{
    let {id}=req.params
    let job=jobs.find((j)=> j.id===Number(id));
    if(!job){
        return res.status(404).json({"message":"no such job"});
    }
    res.status(200).json(job)
}