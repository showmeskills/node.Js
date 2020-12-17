//login in get method; register in post method

const http = require('http');
const url = require('url');
const path = require('path');
const querystring = require('querystring');
let staticServer = require('./staticServer');
/*
this is for temporary to save user data
*/
let user = {};

http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin","*")
    if(req.url === '/favicon.ico') {
        res.end();
        return;
    }
let {pathname,query:{name,pass}} = url.parse(req.url,true);

let data = '';
req.on('data',chunk => data += chunk);
req.on('end',chunk=>{
    
    if(pathname === '/login'){
        res.writeHead(200,{'Content-Type': 'text/plai;charset=utf8'})
        if(user[name] && user[name]===pass){
            res.end('{"code":0,"msg":"Login is successful"}')
        }else{
            res.end('{"code":1,"msg":"Passowrd or Username is worry"}')
        }
    }else if(req.url === '/register'){
        res.writeHead(200,{'Content-Type': 'text/plai;charset=utf8'})
        let {name:post_name,pass:post_pass} = querystring.parse(data);
        if(!post_name){
            res.end('{"code":1,"msg":"Please,Username can not be empty"}')
        }else if(!post_pass){
            res.end('{"code":1,"msg":"Please,Password can not be empty"}')
        }else if(user[post_name]){
            res.end('{"code":1,"msg":"Username has been registered"}')
        }else{
            res.end('{"code":0,"msg":"Congradulations,your account has been registered"}')
            user[post_name] = post_pass;
        }
    }else{
        staticServer(req,res,path.join(__dirname),'static');
    }
    
    console.log(user)
})

}).listen(8081, () => {
    console.log('Running')
})