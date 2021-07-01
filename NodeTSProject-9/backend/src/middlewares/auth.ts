import { Request, Response, NextFunction } from "express";
export const auth = async(req: Request, res: Response, next: NextFunction) => {
    // if(req.session!.username){
    //     next();
    // }else{
    //     res.render("fail",{
    //         data:JSON.stringify({
    //             message:"请登录"
    //         })
    //     })
    // }
    const token = await req.get("X-Access-Token")
    if (token) {
        next();
    } else {
        res.render("fail", {
            data: JSON.stringify({
                message: "请登录"
            })
        })
    }
}

