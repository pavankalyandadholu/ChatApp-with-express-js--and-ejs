import PostModel from "./post.model.js";

export default class PostController {
    addPost(req,res){
        const caption=req.body.caption;
        const userId= Number(req.userId);
        // console.log("userId",userId)
        const imageUrl=req.body.imageUrl;
        PostModel.addPost(userId,caption,imageUrl);
        // console.log(req.body,req.file);
        res.status(201).send("Post Added");
    }
    getAllPosts(req,res){
        const userId=req.userId
        const allPosts=PostModel.getAllPosts();

        res.status(200).send({allPosts,userId});
        
    }
    getPostById(req,res){
        const id = req.params.id;
      const post=  PostModel.getPostById(id);
      if(post){
        res.status(200).send(post);
      }else{
        res.status(400).send("Post does not Exist! ")
      }
    }
    getAllPostsByUserId(req,res){
        const userId=req.userId;
        const allUserPosts=PostModel.getAllPostsByUserId(userId);
        if(allUserPosts.length>0){
            res.status(200).send({allUserPosts,userId});
        }else{
            res.status(400).send("No posts available for you ");
        }
    }
    deletePostById(req,res){
        const id=req.params.id;
      const deletPost=  PostModel.deletePostById(id);
        res.status(200).send(deletPost)
    }
    updatePostById(req,res){
        const id=req.params.id;
        const userId=req.userId;
        const caption = req.body ?req.body.caption:req.body;
        const imageUrl=req.body ? req.body.imageUrl:req.body;
        PostModel.updatePostById(id,userId,caption,imageUrl);
        

        
        res.status(200).send("updated successfully! ")
    }
};
