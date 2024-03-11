import { Router } from "express";
const router=Router()

import { getAllJobs,getJob,deleteJob,editJob,createJob } from "../controllers/job.controller.js";

router.route( "/" )
        .get( getAllJobs )
        .post( createJob );

router.route( "/:id" )
       .get( getJob )
       .patch( editJob )
       .delete( deleteJob);
       
export default router; 