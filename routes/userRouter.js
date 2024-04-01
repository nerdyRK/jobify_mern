import { Router } from "express";
import { getApplicationStats, getCurrentUser, updateUser } from "../controllers/user.controller.js";
import { validateUpdateUserInput } from "../middlewares/validation.middleware.js";
import { checkAdmin } from "../middlewares/auth.middleware.js";
const router=Router()

router.get('/current-user',getCurrentUser)
router.get('/admin/app-stats',checkAdmin('admin'), getApplicationStats)
router.patch('/update-user',validateUpdateUserInput,updateUser)

export default router;