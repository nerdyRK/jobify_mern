import { Router } from "express";
const router=Router()
import { login,logout,register } from "../controllers/auth.controller.js";
import { validateLoginInput, validateRegisterInput } from "../middlewares/validation.middleware.js";

router.post('/login',validateLoginInput,login)
router.post('/register',validateRegisterInput,register)
router.post('/logout',logout)

export default router;