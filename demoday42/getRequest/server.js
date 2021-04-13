const http = require('http');
const url = require('url');
http.createServer((req, res) => {
    const {query:{user,pass}} = url.parse(req.url,true)  
    res.end(`your username is ${user} and your password is ${pass}`);
}).listen(8000,()=>{
    console.log('listening')
})