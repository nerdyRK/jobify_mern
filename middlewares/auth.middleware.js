import { UnauthenticatedError } from "../errors/customErrors.js";
import { verifyJWT } from "../utils/tokenUtils.js";

export const authenticateUser=async(req,res,next)=>{
    const {token}=req.cookies;
    if(!token)  throw new UnauthenticatedError('You are not logged in');
    try{
        const {userId,role}=verifyJWT(token);
        req.user={userId,role}
        next()
    }catch(e){
        return next(new UnauthenticatedError('Invalid Token'));
    }
}