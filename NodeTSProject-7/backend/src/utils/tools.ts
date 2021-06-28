import bcrypt from "bcrypt";
import path from "path";
import fs from "fs";
import jwt from "jsonwebtoken";
//加密
export const hash = (myPlaintextPassword:string)=>{
    return new Promise((resolve,reject)=>{
        bcrypt.hash(myPlaintextPassword,10,(err,hash)=>{
            if(err) reject(err);
            resolve(hash);
        })
    })
}
//解密
export const compare = (myPlaintextPassword:string,hash:string)=>{
    return new Promise((resolve,reject)=>{
        bcrypt.compare(myPlaintextPassword,hash,(err,compare)=>{
            if(err) reject(err);
            resolve(compare);
        })
    })
}

export const token = (username?:string)=>{
    const privateKey = fs.readFileSync(path.join(__dirname, "..","keys","rsa_private_key.pem"))
    const token = jwt.sign({username},privateKey,{algorithm:"RS256"})
    return token
}

export const tokenDecode = (token:string)=>{
    const publicKey = fs.readFileSync(path.join(__dirname, "..","keys","rsa_public_key.pem"))
    const result = jwt.verify(token,publicKey)
    return result
}

