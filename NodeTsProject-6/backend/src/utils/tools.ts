import bcrypt from "bcrypt";
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