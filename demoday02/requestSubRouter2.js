const http = require('http');

http.createServer((req,res) => {
    res.writeHead(200,{'Content-Type':'text/plain; charset=utf8'});
    if(req.url === '/favicon.ico'){
        res.writeHead(200,{'Content-Type':'text/plain'})
        res.end()
    }else if(req.url ==='/aaa'){
        res.write(req.url);
        res.end();
    }else if(req.url === '/bbb'){
        res.write(req.url);
        res.end();
    }else if(req.url === '/index.html'){
        res.write(req.url);
        res.end();
    }else{
        res.write('404 Not Found');
        res.end();
    }
    
}).listen(8080,()=>{
    console.log('server is running')
})