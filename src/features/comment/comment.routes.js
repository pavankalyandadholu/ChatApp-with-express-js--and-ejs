import express from "express";  
import CommentController from "./comment.controller.js";

const commentRoutes=express.Router();
const commentController=new CommentController()

commentRoutes.get('/:postId',commentController.getCommentById)
commentRoutes.post('/:postId',commentController.postCommentById)
commentRoutes.put('/:id',commentController.updateCommentById)
commentRoutes.delete('/:id',commentController.deleteCommentById)

export default commentRoutes;