const fs = require('fs');
const path = require('path');
let mime = require('./public/mime.json')
const zlib = require('zlib');

module.exports.server = (req,res,rootPath)=>{
    
    let readStream = fs.createReadStream(path.join(rootPath,req.url))
    let gz = zlib.createGzip();
    res.setHeader('content-encoding','gzip')
    readStream.pipe(gz).pipe(res);
    
    let mimeType = 'text/plain';
    let ext = path.extname(req.url);
    mimeType = mime[ext];
   

    res.writeHead(200,'ok!!!',{'Content-Type':mimeType+';charset=utf8;'})
    readStream.on('error',(err)=>{
        console.log('the reading file is unsuccessful')
        res.write('page is not existed');
        res.end('404 not found');
    });
    readStream.on('end',()=>{
        console.log('the miss is completed successfully')
    })
}