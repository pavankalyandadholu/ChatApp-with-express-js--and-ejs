import express from "express";


import PostController from "./post.controller.js";
import upload from "../../middlewares/file-upload.middleware.js";
import jwtMiddleware from "../../middlewares/jwt.middleware.js";
const postRoutes=express.Router();
const postController = new PostController();

postRoutes.post('/',upload.single('imageUrl'),postController.addPost)
postRoutes.get('/',postController.getAllPostsByUserId)
postRoutes.get('/all',postController.getAllPosts);
postRoutes.get('/:id',postController.getPostById)
postRoutes.delete('/:id',postController.deletePostById)
postRoutes.put('/:id',upload.single('imageUrl'),postController.updatePostById);


export default postRoutes;