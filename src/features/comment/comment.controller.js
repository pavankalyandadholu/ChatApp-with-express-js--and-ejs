import CommentModel from "./comment.model.js";

export default class CommentController {
    postCommentById(req,res){
        const postId=Number(req.params.postId);
        const userId=Number(req.userId);
        const content=req.body.content;
        CommentModel.addCommentByPostId(postId,userId,content);
        res.status(201).send("comment Added succefully! ")

    }
    getCommentById(req,res){
        const postId=Number(req.params.postId);
        const commentsOfThePost=CommentModel.getcommentsByPostId(postId);
        res.status(200).send(commentsOfThePost);
    }
    deleteCommentById(req,res){
        const id=Number(req.params.id);
        const deleteComment=CommentModel.deleteCommentById(id);
        res.status(200).send(deleteComment);

    }
    updateCommentById(req,res){
        const id=Number(req.params.id);
        const content = req.body.content;
        const updateComment=CommentModel.updateCommentById(id,content);
        res.status(200).send(updateComment);
    }
};
