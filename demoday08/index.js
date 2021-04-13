const http = require('http');
const path = require('path');
let static = require('./staticServer.js');

http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin","*")
    if(req.url === '/favicon.ico') {
        res.end();
        return
    }
    static.server(req,res,path.join(__dirname,'staticFiles'))

    
}).listen(8080,()=>{
    console.log('The server is running')
})
