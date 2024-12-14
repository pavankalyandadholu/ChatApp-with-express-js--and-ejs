import express from 'express';
import expressEjsLayouts from 'express-ejs-layouts';
import cookieParser from 'cookie-parser';

import PostFrontEndController from './src/frontEnd/controller/post.controller.js';
import UserFrontEndController from './src/frontEnd/controller/user.controller.js';
import upload from './src/middlewares/file-upload.middleware.js';

const frontEndServer=express();

const postFrontEndController=new PostFrontEndController();
const userFrontEndController=new UserFrontEndController();
frontEndServer.use(cookieParser())
frontEndServer.use(express.static('public'))
frontEndServer.set('view engine','ejs');
frontEndServer.set('views','./src/frontEnd/views')
frontEndServer.use(expressEjsLayouts)
frontEndServer.use(express.urlencoded({extended:true}));
frontEndServer.use(express.json());
//Routes
frontEndServer.get('/',postFrontEndController.getAllPosts);
frontEndServer.get('/myposts',postFrontEndController.getmyPosts);
frontEndServer.get('/allposts',postFrontEndController.getAllPosts);
frontEndServer.get('/addpost',postFrontEndController.getAddPostsForm);
frontEndServer.post('/addpost',upload.single('imageUrl'),postFrontEndController.postaddPostsForm,postFrontEndController.getAllPosts);

frontEndServer.get('/updatepost',postFrontEndController.getUpdatePostsForm);
frontEndServer.post('/updatepost',upload.single('imageUrl'),postFrontEndController.postUpdatePostsForm);
frontEndServer.get('/logout',postFrontEndController.logout);

// like and comment
frontEndServer.get('/like/:id',postFrontEndController.toogleLike)

frontEndServer.get('/login',userFrontEndController.getLoginForm)
frontEndServer.post('/login',userFrontEndController.postLoginForm,postFrontEndController.getAllPosts)
frontEndServer.get('/register',userFrontEndController.getRegisterForm)
frontEndServer.post('/register',userFrontEndController.postRegisterForm)

frontEndServer.listen(8000,()=>{
    console.log("Local server is started on port 8000");
})