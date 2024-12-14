import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import userRoutes from './src/features/user/user.routes.js';
import postRoutes from './src/features/post/post.routes.js';
import { ErrorHandler } from './src/errorHandling/errorHandlingClass.js';
import defaultRoutes from './src/errorHandling/defaultRoutes.js';
import commentRoutes from './src/features/comment/comment.routes.js';
import likesRouter from './src/features/like/like.routes.js';
import jwtMiddleware from './src/middlewares/jwt.middleware.js';


const server = express();
server.use(express.urlencoded({ extended: true }));
server.use(express.json())
server.use(cookieParser())
server.use(cors())
server.use(express.static('public'))
server.use("/api/user",userRoutes);
server.use('/api/posts',jwtMiddleware,postRoutes);
server.use('/api/comments',jwtMiddleware,commentRoutes);
server.use('/api/likes',jwtMiddleware,likesRouter)

// Logout Feature 
server.use('/api/logout',jwtMiddleware,(req,res)=>{
    res.clearCookie('jwtToken');
    res.send("Logout Succesfully ! ")
})

server.use(ErrorHandler)
server.use(defaultRoutes)
server.listen(3000,()=>{
    console.log("Listening on port 3000");
})


export default server;