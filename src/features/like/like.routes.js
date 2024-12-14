import express from "express";

import LikesController from "./like.controller.js";

const likesRouter=express.Router();
const likesController=new LikesController();
likesRouter.get('/:postId',likesController.getLikesByPostId)
likesRouter.get('/toggle/:postId',likesController.toggleLikeByPostId)
export default likesRouter;