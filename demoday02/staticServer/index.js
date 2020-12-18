const http = require('http');
const path = require('path');
let staticServer = require('./staticServer2.js');

http.createServer((req,res) => {
    staticServer(req,res,path.join(__dirname,'www'));
}).listen(8080,()=>{
    console.log('Server listening')
})