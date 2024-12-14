export  class ErrorHandlerClass extends Error {
    constructor(status,msg){
        super(msg);
        this.status=status;
    }
};
export const ErrorHandler=(err,req,res,next)=>{
    if(err instanceof ErrorHandlerClass){
        res.status(err.status).send(err.message);
    }else{
        console.log(err);
        res.status(500).send("Something went Wrong try Again!")
        
    }
}
