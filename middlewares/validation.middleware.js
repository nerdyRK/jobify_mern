import {validationResult,body,param } from "express-validator";
import { BadRequestError, NotFoundError } from "../errors/customErrors.js";
import { JOB_STATUS, JOB_TYPE } from "../utils/constants.js";
import mongoose from "mongoose";
import Job from "../models/jobModel.js";
import User from "../models/userModel.js";

const withValidationErrors=(validateValues)  =>{ 
    return [validateValues,(req , res , next)=> {
       const errors=validationResult(req);
       if(!errors.isEmpty()){
        const errorMessages= errors.array().map((error)=>error.msg);
        if(errorMessages[0].startsWith('No job')){
            throw new NotFoundError(errorMessages);
        }
        throw new BadRequestError(errorMessages)
       }
       next()
    },]}

    export const validateJobInput=withValidationErrors([
        body("company").notEmpty().withMessage("company is required"),
        body("position").notEmpty().withMessage("position is required"),
        body("jobLocation").notEmpty().withMessage("jobLocation, is required"),
        body('jobStatus').isIn(Object.values(JOB_STATUS)).withMessage('Invalid status value'),
        body('jobType').isIn(Object.values(JOB_TYPE)).withMessage('Invalid job type value')
        
    ])

    export const validateIdParam=withValidationErrors([
            param("id")
            .custom(async(value)=>{
                const isValidId=mongoose.Types.ObjectId.isValid(value);
                if(!isValidId) throw new BadRequestError('Invalid id format')

                const job =await Job.findById(value); 
                
                if(!job) throw new NotFoundError('No job found with this id');
            })
            
        ])

    export const  validateRegisterInput=withValidationErrors([
        body("username").notEmpty().withMessage("Username is required").trim(),
        body("email").notEmpty().withMessage("email is required").isEmail().withMessage('Invalid email format').custom(async(email)=>{
            const user=await User.findOne({email});
            if(user) throw new BadRequestError('email already exist')
        }),
        body("password").notEmpty().withMessage("Password is required").trim()
        .isLength({min:8}).withMessage('password should be minimum 8 characters'),
        body("location").notEmpty().withMessage("location is required"),
        ])

        export const  validateLoginInput=withValidationErrors([
            
            body("email").notEmpty().withMessage("email is required").isEmail().withMessage('Invalid email format'),
            body("password").notEmpty().withMessage("Password is required").trim()
            ])