import jwt from 'jsonwebtoken';
import { ErrorHandlerClass } from '../errorHandling/errorHandlingClass.js';
export default  function jwtMiddleware(req,res,next){
    // console.log(req.cookies)
    try{
        const cookie= req.cookies.jwtToken;

        const token = jwt.verify(cookie,'QL42ARICTUu2hjQUdA3jyultNXUlchi9');
        req.userId=token.userId;
        next();
    }catch(err){
        console.log(err);
        throw new ErrorHandlerClass(400,"Authentication Failed. Login agian!  ")
    }
    
}
