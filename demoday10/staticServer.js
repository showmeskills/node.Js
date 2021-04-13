const http = require('http');
const fs = require('fs');
const path = require('path');
let mime = require('./model/mime.js');

http.createServer((req, res) => {
    let pathname = req.url;
    if(pathname === '/'){
        pathname = '/index.html';
    }

    let extname = path.extname(pathname)
    
    fs.readFile(path.join(__dirname,'static',pathname),'utf8',(err,data) => {
        if(err){
            console.log('there are not any errors');
            fs.readFileSync(path.join(__dirname,'static','404.html'),(err,data) => {
                if(err){
                    console.log('404 file is not existed')
                }
                    res.writeHead(200,{'Content-Type':'text/html;charset=utf8'})
                    res.write(data);
                    red.end();
                
            })
        }else{
            //console.log(data)
            let importMime = mime.getMime(extname);
            res.writeHead(200,{'Content-Type':`${importMime};charset="utf8";`});
            res.write(data);
            res.end();
        }

    })
}).listen(8081,()=>{
    console.log('Running....')
})