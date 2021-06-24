import {Request,Response} from "express";
import Userdb from "../model/Userdb";

interface User{
    username:string
    password:string
}
class Users{
    signUp (req:Request,res:Response){
        const {username,password} = req.body
        const newUser = new Userdb({
            username,
            password
        })
        newUser.save()
            .then((user:User)=>{
                res.json(user);
                console.log(user);
            })
            .catch((err:any)=>{
                res.send(err);
            })
        // res.render("success",{
        //     data:JSON.stringify({
        //         username,
        //         password
        //     })
        // });
    }
}

export default Users