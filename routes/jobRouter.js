import { Router } from "express";
const router=Router()

import { getAllJobs,getJob,deleteJob,editJob,createJob } from "../controllers/job.controller.js";
import { validateJobInput } from "../middlewares/validation.middleware.js";

router.route( "/" )
        .get( getAllJobs )
        .post(validateJobInput, createJob );

router.route( "/:id" )
       .get( getJob )
       .patch( validateJobInput,editJob )
       .delete( deleteJob);
       
export default router; 