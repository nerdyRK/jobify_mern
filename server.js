import 'express-async-errors'
import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import morgan from 'morgan'
import mongoose from 'mongoose'
import { errorHandler } from './middlewares/errorHandler.middleware.js'

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

app.use(errorHandler)


let port = process.env.PORT || 5001
try{
    await mongoose.connect(process.env.Mongo_URL);
    app.listen(port,()=>console.log(`server running at port ${port}`))
}catch(err){
    console.log(err)
    process.exit(1);
}