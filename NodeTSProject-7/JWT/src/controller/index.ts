import {Request, Response} from "express";
import jwt from "jsonwebtoken";
import fs from "fs";
import path from "path";

const privateKey = fs.readFileSync(path.join(__dirname, "..","keys","rsa_private_key.pem"))
const publicKey = fs.readFileSync(path.join(__dirname, "..","keys","rsa_public_key.pem"))
class Controller {
    index(req:Request,res:Response){
        const data:string = "I am from back end";
        res.render("index.ejs",{
            data
        })
    }
    token(req:Request,res:Response){
        //Symmetric encryption
        // const token = jwt.sign({username:"admin"},"hahahah");
        // const tokenDecode = jwt.verify(token,"hahahah");
        // res.send(tokenDecode)

        const token = jwt.sign({username:"admin"},privateKey,{algorithm:"RS256"})
        const tokenDecode = jwt.verify(token,publicKey)
        res.send(tokenDecode)
    }

}

export default Controller