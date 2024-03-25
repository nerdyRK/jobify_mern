import {validationResult,body } from "express-validator";
import { BadRequestError } from "../errors/customErrors.js";

const withValidationErrors=(validateValues)  =>{ 
    return [validateValues,(req , res , next)=> {
       const errors=validationResult(req);
       if(!errors.isEmpty()){
        const errorMessages= errors.array().map((error)=>error.msg);
        throw new BadRequestError(errorMessages)
       }
       next()
    },]}

    export const validateTest=withValidationErrors([
        body("name")
        .notEmpty()
        .withMessage("name is required")
        .isLength( {min:3 ,max:50})
         .withMessage("Name must be at least 3 characters and max 50").trim()
    ])

    