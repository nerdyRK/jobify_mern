import { UnauthenticatedError, UnauthorizedError } from "../errors/customErrors.js";
import { verifyJWT } from "../utils/tokenUtils.js";

export const authenticateUser=(req,res,next)=>{
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

//* here we can directly check if the user is admin but this array approach provides flexibility if we want to add more roles
export const checkAdmin=(...roles)=>{
    return (req,res,next)=>{
        if(!roles.includes(req.user.role)){
            throw new UnauthorizedError('Not authorized to access this route')
        }
        next()
    }
}