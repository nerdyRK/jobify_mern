import { Router } from "express";
const router=Router()

import { getAllJobs,getJob,deleteJob,editJob,createJob } from "../controllers/job.controller.js";
import { validateJobInput,validateIdParam } from "../middlewares/validation.middleware.js";

router.route( "/" )
        .get( getAllJobs )
        .post(validateJobInput, createJob );

router.route( "/:id" )
       .get(validateIdParam, getJob )
       .patch( validateJobInput,editJob )
       .delete( validateIdParam,deleteJob);
       
export default router; 