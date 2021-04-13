//post get 一起接收
const http = require('http');
const url = require('url');
const querystring = require('querystring');
//get 传输是通过url来传输
http.createServer((req, res) => {

    if(req.url === '/favicon.ico'){
        res.end();
        return;
    }

    

    //get 数据处理
    let {query:{c,d}} = url.parse(req.url,true)
    console.log(c);
    console.log(d);

    let str = '';
     //post 数据不会放到url里面去会放到body里面
     req.on('data',(chunk)=>{
        str+=chunk;
    })
 
    req.on('end',()=>{
        console.log(str); 
        console.log('接收完成');


    let {aaa,bbb} = querystring.parse(str);
      console.log(aaa);
      console.log(bbb);

    })
    res.end('{code:0}');

}).listen(8080,()=>{
    console.log('running....')
})