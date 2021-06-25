import bcrypt from "bcrypt";

export const hash = (myPlaintextPassword:string)=>{
    return new Promise((resolve,reject)=>{
        bcrypt.hash(myPlaintextPassword,10,(err,hash)=>{
            if(err) reject(err);
            resolve(hash);
        })
    })
}