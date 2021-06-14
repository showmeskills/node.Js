import fs from 'fs';
import path from 'path';

fs.mkdir(path.join(__dirname, "logs"),(err)=>{
    if(err){
        throw new Error(err.message);
    }
    console.log("创建文件夹成功");
})
fs.rename(path.join(__dirname, "logs"),path.join(__dirname, "log"),(err)=>{
    if(err){
        throw new Error(err.message);
    }
    console.log("rename successfully");
})
fs.rmdir(path.join(__dirname, "log"),(err)=>{
    if(err){
        throw new Error(err.message);
    }
    console.log("rmdir successfully");
})

fs.readdir(path.join(__dirname, "logs"), (err, result) => {
        if(err){
            throw new Error(err.message);
        }
    console.log("read dir is successfully==>", result);
})