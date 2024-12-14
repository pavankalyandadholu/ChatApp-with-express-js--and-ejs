import LikesModel from "./like.model.js";

export default class LikesController {
    getLikesByPostId(req,res){
        const postId=Number(req.params.postId);
      const likes=  LikesModel.getLikesByPostId(postId);
      res.status(200).send(likes);
    }
    toggleLikeByPostId(req,res){
        const postId=Number(req.params.postId);
        const userId=Number(req.userId);
      const like=  LikesModel.toggleLikeToPostByPostId(postId,userId);
      res.status(200).send(like);
    }
};
