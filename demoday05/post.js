const http = require('http');
const queryString = require('querystring');

http.createServer((req, res) => {

    if(req.url === '/favicon.ico'){
        res.end();
        return;
    }

    console.log(req.url)
    let str = '';
    req.on('data',chunk=>{
        str += chunk;
    })

    req.on('end',chunk=>{
        console.log(str);
        console.log('the receiving has been done');
        let obj = queryString.parse(str);
        console.log(obj);
        let {aaa,bbb} = queryString.parse(str);
        console.log(aaa);
        console.log(bbb);
    })

    res.end('{"code":0}')
}).listen(8080,()=>{
    console.log('Running')
})