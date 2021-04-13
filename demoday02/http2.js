const http = require('http');

http.createServer((req,res)=>{
    res.write('this is an sample way to write http module');
    res.end();
}).listen(8080,()=>{
    console.log('server is running');
})