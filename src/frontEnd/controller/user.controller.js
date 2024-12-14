import fetch from "node-fetch"

 
export default class UserFrontEndController {
    getLoginForm(req,res){
        res.render('login',{isregistered:false})
    }
    getRegisterForm(req,res){
        res.render('register')
    }
   async postRegisterForm(req,res){
    // console.log("Heloo", req.body)
    const bodyData=req.body;
    // console.log(bodyData,"Body Data");
    // const response=  await fetch('http://localhost:3000/api/user/signup',{method:'post',body:bodyData});
    const response= await fetch('http://localhost:3000/api/user/signup',{method:'post',body:JSON.stringify(bodyData),headers: {'Content-Type': 'application/json'}})
    // console.log(response);
    if(response.status==201){
        // console.log(res.cookies)
        // const data = await response.text();

        // console.log(data);
        res.render('login',{isregistered:true})

    }else{
        res.render('register')
    }
    
        
    }
   async postLoginForm(req,res,next){
    // console.log("Hello")
        const response= await fetch('http://localhost:3000/api/user/signin',{method:'post',body:JSON.stringify(req.body),headers: {'Content-Type': 'application/json'}})
        // const token=response.headers.get('set-cookie');
        // console.log(token);
        // console.log(response)
        if(response.status==200){
            const token=response.headers.get('set-cookie');
            // console.log(token);
            // const jwtToken=token.split(';')[0].split('=')[1];
            // console.log(token);
            const userId=req.userId;
            // console.log("loguserid",userId);
          req.token=token;
          
              res.cookie('jwtToken',token,{maxAge:1000*60*15})
            //   res.cookie('userId',,{maxAge:1000*60*15})
            //   console.log(req.cookies ,"req.cookies")
            
           
            
            next();

        }else{
            res.render('login',{isregistered:false})
        }
    }
};
