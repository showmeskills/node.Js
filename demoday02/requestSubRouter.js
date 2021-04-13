//this demo to display about request.url which is a subrouter

const http = require('http');
http.createServer((req,res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf8'})
    switch (req.url){
        case '/aaa':
            res.write(req.url)
            res.end();
            break;
        case '/bbb':
            res.write(req.url);
            res.end();
            break;
        case '/index.html':
            res.write(req.url);
            res.end();
            break;
        default:
            res.write('404');
            res.end();
            break;       
    }
}).listen(8080,()=>{
    console.log('server is running')
})