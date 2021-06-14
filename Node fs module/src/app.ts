import fs from 'fs';
import path from 'path';
fs.watch(path.join(__dirname, 'logs',"log0.log"),(err)=>{
    console.log("file changed");
});

