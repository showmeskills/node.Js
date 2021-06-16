import path from "path";
import fs from "fs";
import mime from "mime";

const myReadFile = (file: string)=>{
    return new Promise((resolve, reject)=>{
        fs.readFile(file,(err,content)=>{
            if(err){
                reject(err);
            }else{
                resolve(content);
            }
        })
    })
}

const readStaticFile = async (pathFileName:string)=>{
    let ext = path.parse(pathFileName).ext
    let mimeType = mime.getType(ext) || "text/html";
    let data;
    if(fs.existsSync(pathFileName)){
        if(ext){
            data = await myReadFile(pathFileName)
        }else{
            data = await myReadFile(path.join(__dirname,"index.html"));
        }
    }else{
        data = "file and diectory not found"
    }
    return {
        data,
        mimeType
    }
}

export {
    readStaticFile
}