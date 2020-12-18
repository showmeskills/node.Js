const fs = require('fs');
const path = require('path');
let mime = require('./public/mime.json');

module.exports = (req,res,rootPath)=>{
    fs.readFile(path.join(rootPath,req.url),(err,data)=>{
        if(err){
            console.log('error');
            res.writeHead(200,{'Content-Type':'text/plain;charset=utf8'});
            res.end('the server is broke down');
        }else{
            let mimeType = 'text/plain';
            let ext = path.extname(req.url);
            mimeType = mime[ext];
            if(mimeType.startsWith('text')){
                mimeType = mimeType+';charset=utf8;';
            }
            console.log(mimeType)
            res.writeHead(200,'ok!!!',{'Content-Type':mimeType})
            res.write(data);
            res.end();
        }
    })
}