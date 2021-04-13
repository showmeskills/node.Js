const fs = require('fs');
const path = require('path');
const mime = require('./public/mime.json');

module.exports = (req,res,rootPath) => {
    fs.readFile(path.join(rootPath,req.url),(err,data) => {
        if(err){
            console.log(err);
            res.writeHead(200,{'Content-Type':'text/plain;charset=utf8'});
            res.end('the server is currently repairing');
        }else{
            let mimeType = 'text/plain';
            let ext = path.extname(req.url);
            mimeType = mime[ext];
            if(mimeType.startsWith('text')){
                mimeType = mimeType+`;charset=utf8;`;
            }
            
            res.writeHead(200,'ok!!',{'Content-Type':mimeType});
            res.write(data);
            red.end();
        }
    })
}