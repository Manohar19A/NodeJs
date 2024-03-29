import jwt from 'jsonwebtoken'
import { handleError } from './routes/error.js';
export const verifyToken =(req,res,next)=>{
    const token = req.cookies.access_token;
    if(!token) return next(handleError(401,"You are not authenticated"));
    jwt.verify(token,process.env.SECRET,(err,user)=>
    {
        if(err) return next(handleError(403,"Token is Invalid"));
        req.user = user;
        next();
    });

}