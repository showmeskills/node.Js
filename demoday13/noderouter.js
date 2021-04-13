const url = require('url');
const http = require('http');

http.createServer((req, res) => {
    if(req.url === '/favicon.ico'){
        res.end();
        return
    }
    let pathname = url.parse(req.url,true).pathname
    switch(pathname){
        case '/login':
            return res.end('this is a login page');
        case '/content':
            return res.end('this is a content page');
        case '/register':
            return res.end('this is a register page');
        default:
            res.end('there is nothing please enter address in /login, /content and /register');
            break;
        
    }
}).listen(8080,()=>{
    console.log('Running....')
})
