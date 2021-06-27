import {Request,Response,NextFunction} from "express";
export const auth = (req:Request,res:Response,next:NextFunction)=>{
    console.log(req.session!.username)
    if(req.session!.username){
        next();
    }else{
        res.render("fail",{
            data:JSON.stringify({
                message:"请登录"
            })
        })
    }
}

