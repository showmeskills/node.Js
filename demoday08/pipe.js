const fs = require('fs');
const http = require('http');
const path = require('path');
const zlib = require('zlib');
http.createServer((req, res) => {
    if(req.url === '/favicon.ico'){
        res.end();
        return;
    }
    let data = '';
    for(let i = 0; i < 100; i++){
        data += 'this is a testing....'
    }
    fs.writeFile(path.join(__dirname,'test.txt'),data,(err)=>{
        if(err){
            console.log('error');
        }
        console.log('the file has been written');
    })
    let readStream = fs.createReadStream(path.join(__dirname,'test.txt'));
    let writeStream = fs.createWriteStream(path.join(__dirname,'test1.txt'));
    let gz = zlib.createGzip();
    readStream.pipe(gz).pipe(writeStream);
    readStream.on('error',(err)=>{
        console.log('the file has a wrong')
    });
    readStream.on('end',()=>{
        console.log('the file has been written')
    })

}).listen(8080,()=>{
    console.log('The Server is running')
})