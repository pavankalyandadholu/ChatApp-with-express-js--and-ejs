import fetch from "node-fetch"
export default class PostFrontEndController{

  async  getAllPosts(req,res){
    // console.log("Hello getHomePage")
    // const token=req.token;
    let token;
    if(req.token){
       token=req.token;
    }else{
      token=req.cookies.jwtToken;

    }
    // const userId=req.userId;
    // console.log("userrId",userId);
    
    // console.log(token);
    const response= await fetch('http://localhost:3000/api/posts/all',{ headers: {
        'Cookie': token,
        'Content-Type': 'application/json', // adjust according to your needs
      }});
    // console.log(await response.text())
    if(response.status== 200){
        const data= await response.json();
        const posts=data.allPosts
        const userId=data.userId;
        // console.log(data.allPosts,userId);
        res.render('index',{posts,userId})

    }else{
        res.render('login',{isregistered:false})
    }
    }

    async  getmyPosts(req,res){
      const token=req.cookies.jwtToken;

      // console.log(token);
      const response= await fetch('http://localhost:3000/api/posts',{ headers: {
        'Cookie': token,
        'Content-Type': 'application/json', // adjust according to your needs
      }});
      if(response.status==200){

        const data=await response.json();
        const posts=data.allUserPosts;
        const userId=data.userId;
        // console.log(posts)
        res.render('index',{posts,userId})
      }else{
        res.render('login',{isregistered:false})
      }
    }
     getAddPostsForm(req,res){
res.render('addpost',{msg:null})
    }
    async postaddPostsForm(req,res){
      const token=req.cookies.jwtToken; 
      const body=req.body;
      body.imageUrl=req.file.filename;
    const response= await  fetch('http://localhost:3000/api/posts',{method:'post',body:JSON.stringify(body),headers:{
        'Cookie':token,
        'Content-Type': 'application/json'
      } })
      // console.log(response.status);
      if(response.status==201){
        res.render('addpost',{msg:'Post added! '})
      }else{
        res.render('addpost',{msg:'Upload failed try again ! '});
      }
    }
     getUpdatePostsForm(req,res){
      // console.log("hello")
      const {id,caption}=req.query;
      // console.log(req.query);
    res.render('updatepost',{msg:null,id,caption})
    }

    async postUpdatePostsForm(req,res){
      const token=req.cookies.jwtToken; 
      let body=req.body;
      
      let id= Number(req.body.id);
      // console.log(req.body);
      let caption=req.body.caption;
      // console.log("id is ",id);
      body.imageUrl=req.file? req.file.filename:undefined;
    const response= await  fetch(`http://localhost:3000/api/posts/${id}`,{method:'put',body:JSON.stringify(body),headers:{
        'Cookie':token,
        'Content-Type': 'application/json'
      } })
      // console.log(response);
      if(response.status==200){

        res.render('updatepost',{msg:'Updated Successfully! ',id:'',caption:""})
      }else{

        res.render('updatepost',{msg:'Failed to Update Try again!',id,caption})
      }
     
    }
    async logout(req,res){
      const token = req.cookies.jwtToken;
      // console.log("logout cookie",token)
      const response= await fetch('http://localhost:3000/api/logout',{ headers: {
        'Cookie': token,
        'Content-Type': 'application/json', // adjust according to your needs
      }});
      // console.log( await response.text());
      res.clearCookie('jwtToken');
      res.render('login',{isregistered:false})
    }


   async toogleLike(req,res){

    const token=req.cookies.jwtToken; 
      let id= Number(req.params.id);
  console.log(id);
    const response= await  fetch(`http://localhost:3000/api/likes/toggle/${id}`,{headers:{
        'Cookie':token,
        'Content-Type': 'application/json'
      } })
      console.log(response);
      res.send("liked")
    }
}