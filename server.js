import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import morgan from 'morgan'

const app=express();

import jobRouter from './routes/jobRouter.js';


if(process.env.ENV==="development"){
    app.use(morgan('dev'))
}

app.use(express.json())
app.use("/api/v1/jobs",jobRouter)




app.use("*",(req,res)=>{
    res.status(404).json({message:"page not found"})
})
app.use((err,req,res,next)=>{
    console.log(err);
    res.status(500).json({message:"something not right"})
})


let port = process.env.PORT || 5001
app.listen(port,()=>console.log(`server running at port ${port}`))