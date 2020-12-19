const http = require('http');
const url = require('url');
const ejs = require('ejs');
const path = require('path');
http.createServer((req, res) => {
    if(req.url === '/favicon.ico'){
        res.end();
        return;
    }
    let pathname = url.parse(req.url,true).pathname;

    if(pathname === '/login'){
        let msg = 'this is the first data';
        let arr = ['this','is','an','arry'];
        let msg2 = '<h1>I have html5 tag</h1>';
        let msg3 = '';
        ejs.renderFile(path.join(__dirname,'view','demo.ejs'),{
            msg,
            arr,
            msg2,
            msg3:'I am typing some new data on the page',
            msg4:'I am the first one data from bank end!!!'
        },(err,data) => {
            if(err){
                console.log('there are something worry');
            }else{
                res.end(data);
            }
        })
    }else{
        res.end('enter into /login page')
    }
    
}).listen(8080,()=>{
    console.log('Running server')
})