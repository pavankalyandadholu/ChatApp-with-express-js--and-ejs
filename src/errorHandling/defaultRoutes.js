
export default function defaultRoutes(req,res){
    res.status(404).send(`Invalid Url ${req.url}`)
}