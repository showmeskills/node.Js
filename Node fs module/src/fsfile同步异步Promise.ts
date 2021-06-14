import fs from 'fs';
import path from 'path';

fs.writeFile(path.join(__dirname, 'logs',"log1.log"),"there are nothing",(err)=>{
    if(err){
        throw new Error(err.message);
    }
    console.log("writeFile succeeded");
})

// fs.appendFile(path.join(__dirname, 'logs',"log1.log"),"hello word !!",(err)=>{
//     if(err){
//         throw new Error(err.message);
//     }
//     console.log("appendFile succeeded");
// })
// fs.unlink(path.join(__dirname, 'logs',"log1.log"),(err)=>{
//     if(err){
//         throw new Error(err.message);
//     }
//     console.log("unlink succeeded");
// })
//读取文件方法1;
// fs.readFile(path.join(__dirname, 'logs',"log1.log"),"utf-8",(err,content)=>{
//     if(err){
//         throw new Error(err.message);
//     }
//     console.log(content);
// })
//读取文件方法2;
// fs.readFile(path.join(__dirname, 'logs',"log1.log"),(err,content)=>{
//     if(err){
//         throw new Error(err.message);
//     }
//     console.log(content.toString());
// })


// fs.readFile(path.join(__dirname, 'logs',"log1.log"),(err,content)=>{
//     if(err){
//         throw new Error(err.message);
//     }
//     console.log(content.toString());
// })

// const content = fs.readFileSync(path.join(__dirname, 'logs',"log1.log"))
// console.log(content.toString());
// console.log("continue....");

const fsPromises = require("fs").promises;

(async()=>{
    const result = await fsPromises.readFile(path.join(__dirname, 'logs',"log1.log"))
    console.log(result.toString());
})();

