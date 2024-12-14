import { ErrorHandlerClass } from "../../errorHandling/errorHandlingClass.js";
import UserModel from "../user/user.model.js";

export default class PostModel {
    static ide=1;
    constructor(id,userId,caption,imageUrl){
        this.id=id;
        this.userId=userId;
        this.caption=caption;
        this.imageUrl=imageUrl;
        PostModel.ide++;

    }
    static addPost(userId,caption,imageUrl){
        const isExistUserId=UserModel.getAllUsers().find(u=>u.id==userId)
        if(!isExistUserId){
            // console.log("user not exist")
            throw new ErrorHandlerClass(400,"User not Exist ! ")
        }
        if(!caption){
            // console.log("caption not exist")

            throw new ErrorHandlerClass(400,"Caption is not an Empty ! ")
            
        }
        if(!imageUrl){
            // console.log("image not exist")

            throw new ErrorHandlerClass(400,"Image is required")
        }
        const newPost=new PostModel(PostModel.ide,userId,caption,imageUrl);
        posts.push(newPost);
        // console.log(posts);

    }
    static getAllPosts(){
        return posts;
    }
    static getPostById(id){
        const post=posts.find(p=>p.id==id);
        return post;
    }
    static getAllPostsByUserId(userId){
        const allPosts=posts.filter(p=>p.userId==userId);
        return allPosts;
    }
    static deletePostById(id){
        const postIndex=posts.findIndex(p=>p.id==id);
        if(postIndex==-1){
            throw new ErrorHandlerClass(400,"Post is not available to delete! ")
        }
        const deletePost=posts[postIndex];
        posts.splice(postIndex,1);
        return deletePost;
    }
    static updatePostById(id,userId,caption,imageUrl){

        const isValidUser=posts.find(p=>p.id==id && p.userId==userId);
        if(!isValidUser){
            throw new ErrorHandlerClass('400',"Invalid user or Post is not available.")
        }
        posts.forEach(p=>{
            if(p.id==id && p.userId==userId){
                if(caption){
                    p.caption=caption;
                }
                if(imageUrl){
                    p.imageUrl=imageUrl;
                }
            }
        })
        
    }
};
const posts=[];

