//type this http://localhost:8080/p/a/t/h?query=string&a=666&b=999#hash into broswer path
const http = require('http');
const url = require('url');

http.createServer((req, res) => {

    //remove /favicon.ico 
    if(url.url === '/favicon.ico'){
        res.end();
        return
    };
    
    //get process
    let {query:{a,b}} = url.parse(req.url,true);
    console.log(a)
    console.log(b)

    res.end('{"code":0}')
}).listen(8080,()=>{
    console.log('Running....')
})