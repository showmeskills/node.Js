import fs from 'fs';
import path from 'path';

fs.mkdir(path.join(__dirname, 'logs'),(err)=>{
    if(err){
        throw new Error(err.message);
    }
    console.log("dir has been established");
})

for(var i = 0; i < 10;i++){
    fs.writeFile(path.join(__dirname,"logs",`log${i}.log`),`log${i}-text`,(err)=>{
        if(err){
            throw new Error(err.message);
        }
    })
    console.log('done');
}

function readDir(dir: string){
    fs.readdir(dir,(err,content)=>{
        if(err){throw new Error(err.message)}
        if(content){
            content.forEach((val,idx)=>{
                let joinDir = `${dir}/${val}`
                fs.stat(joinDir,(err,stat)=>{
                    if(err){
                        throw new Error(err.message);
                    }
                    if(stat.isDirectory()){
                        readDir(joinDir)
                    }else{
                        fs.readFile(joinDir,"utf-8",(err,content)=>{
                            if(err){throw new Error(err.message)}
                            console.log(content.toString());
                        })
                    }
                })
            })
        }
    })
}
readDir(path.join(__dirname))




