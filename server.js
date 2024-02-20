import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import morgan from 'morgan'

const app=express();

if(process.env.ENV==="development"){
    app.use(morgan('dev'))
}

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("hi le");
})

app.post("/",(req,res)=>{
    // console.log(req);
    res.json({message:"got data", data: req.body})
})

let port = process.env.PORT || 5001
app.listen(port,()=>console.log(`server running at port ${port}`))