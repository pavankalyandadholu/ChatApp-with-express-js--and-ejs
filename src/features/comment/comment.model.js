import { ErrorHandlerClass } from "../../errorHandling/errorHandlingClass.js";

export default class CommentModel {
    static ide=1;
    constructor(id,userId,postId,content){
        this.id=id;
        this.userId=userId;
        this.postId=postId;
        this.content=content;
        CommentModel.ide++;
    }
  static  addCommentByPostId(postId,userId,content){
const newComment=new CommentModel(CommentModel.ide,userId,postId,content);
        comments.push(newComment);
    }
    static getcommentsByPostId(postId){
        const commentsOfThePost=comments.filter(c=>c.postId==postId);
        if(commentsOfThePost.length==0){
            throw new ErrorHandlerClass(404,"No comments present for the Post!.")
        }
        return commentsOfThePost;
    }
    static deleteCommentById(id){
        const commentIndex=comments.findIndex(c=>c.id==id);
        if(commentIndex==-1){
            throw new ErrorHandlerClass(404,"Comment does not exist  to Delete ! ")
        }
        const deleteComment=comments[commentIndex];
        comments.splice(commentIndex,1);
        return deleteComment;
    }
    static updateCommentById(id,content){
        const commentIndex=comments.findIndex(c=>c.id==id);
        if(commentIndex==-1){
            throw new ErrorHandlerClass(404,"Comment does not exist  to Update ! ")
        }
        comments[commentIndex].content=content;
        const updateComment=comments[commentIndex];
        return updateComment;

    }
};
const comments=[];
