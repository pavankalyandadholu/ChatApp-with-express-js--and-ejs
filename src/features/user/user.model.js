import { ErrorHandlerClass } from "../../errorHandling/errorHandlingClass.js";

export default class UserModel {
    static ide=1;
    constructor(id,name,email,password ){
this.id=id;
this.name=name;
this.email=email;
this.password=password;
UserModel.ide++;
    }

  static  addUser(name,email,password){
    // Validation of name
    if(!name){
        throw new ErrorHandlerClass(400,"Name is not Empty !")
    }
    if(!email){
        throw new ErrorHandlerClass(400,"Email is not Empty !")
    }
    if(!password){
        throw new ErrorHandlerClass(400,"Password  is not Empty !")
    }
        const newuser= new UserModel(UserModel.ide,name,email,password);
        users.push(newuser);
        // console.log(users)
    }
   static isValidUser(email,password){
   
    if(!email){
        throw new ErrorHandlerClass(400,"Email is not Empty !")
    }
    if(!password){
        throw new ErrorHandlerClass(400,"Password  is not Empty !")
    }

        const user=users.find(u=>u.email==email && u.password==password);
        return user;
    }
    static getAllUsers(){
        return users;
    }
};

const users=[];
UserModel.addUser('user','king1@gmail.com',12341)
UserModel.addUser('user','king2@gmail.com',1234)
UserModel.addUser('user','king@gmail.com',1234)
UserModel.addUser('user','king3@gmail.com',1234)
