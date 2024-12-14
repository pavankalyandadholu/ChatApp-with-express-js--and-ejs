import { ErrorHandlerClass } from "../../errorHandling/errorHandlingClass.js";
import UserModel from "./user.model.js";
import jwt from 'jsonwebtoken';

export default class UserController {
    signUp(req,res){
        // console.log(req.body,"req body")
        const {name,email,password}=req.body;
        UserModel.addUser(name,email,password);
        // console.log(name,email,password , " In server")
        res.status(201).send("Register Successfully! ")

    }
    singIn(req,res){
        const {email,password}=req.body;
        // console.log(req);
        const isValidUser=UserModel.isValidUser(email,password);
        if(isValidUser){
            var token =  jwt.sign({ userId:isValidUser.id, }, 'QL42ARICTUu2hjQUdA3jyultNXUlchi9',{expiresIn:'15m'});
            res.cookie('jwtToken',token,{maxAge:1000*60*15})
          
            // console.log(token);
            res.status(200).send("Loging sucessfull");

        }else{

            throw new ErrorHandlerClass(400,"Invalid Credentials")
        }
    }
};
