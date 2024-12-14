import { ErrorHandlerClass } from "../../errorHandling/errorHandlingClass.js";

export default class LikesModel {
    static ide=1;
    constructor(id,userId,postId){
        this.id=id;
        this.userId=userId;
        this.postId=postId;
        LikesModel.ide++;
    }
   static  toggleLikeToPostByPostId(postId,userId){
    const likeIndex=likes.findIndex(l=>l.postId==postId && l.userId==userId);

    if(likeIndex==-1){
        const newLike=new LikesModel(LikesModel.ide,userId,postId);
        likes.push(newLike);
        return newLike;
         
    }else{
        const removeLike=likes[likeIndex];
        likes.splice(likeIndex,1);
        return removeLike;

    }
    }
    static getLikesByPostId(postId){
        const allLikesByPostId=likes.filter(l=>l.postId==postId);
        if(allLikesByPostId.length==0){
            throw new ErrorHandlerClass(404,"No likes found!")
        }
        return allLikesByPostId;
    }
    
};
const likes=[];
