const fs = require('fs');
const path = require('path');
const mime = require('./public/mime.json');
const zlib = require('zlib')

module.exports.static = (req,res,rootPath) => {

    let readStream = fs.createReadStream(path.join(rootPath,req.url));
    let gz = zlib.createGzip();
    readStream.on('error',err=>{
        console.log(err);
        console.log('Error is merged');
        res.removeHeader('Content-Encoding');
        res.removeHeader('Content-type');
        res.writeHead(200,{'Content-Type':'text/plain;charset=utf8'})
    })

    let mimeType = 'text/plain';
    let ext = path.extname(req.url);
    mimeType = mime[ext];
    //if the server can not read a files so that it will return an undefined,and the we have to disposal the startsWith(); undefine+'charset=utf8' is not a function
    if(mimeType){
        if(mimeType.startsWith('text')){
            mimeType = mimeType+`;charset=utf8;`;
        }
        res.setHeader('Content-Type', mimeType)
    }
    res.setHeader('Content-Encoding','gzip');
    readStream.pipe(gz).pipe(res);

}