import 'express-async-errors'
import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose'
import { errorHandler } from './middlewares/errorHandler.middleware.js'
import  {authenticateUser}  from './middlewares/auth.middleware.js'


const app=express();

import jobRouter from './routes/jobRouter.js';
import authRouter from './routes/authRouter.js';
import userRouter from './routes/userRouter.js';



if(process.env.ENV==="development"){
    app.use(morgan('dev'))
}

app.use(express.json())
app.use(cookieParser())
app.use("/api/v1/jobs",authenticateUser,jobRouter)
app.use("/api/v1/users",authenticateUser,userRouter)
app.use("/api/v1/auth",authRouter)

app.get('/api/v1/test', (req, res) => {
    res.json({"msg":"test route"});
  })

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