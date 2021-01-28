const http = require('http');
const url = require('url');
const querystring = require('querystring');
http.createServer((req,res) => {

    console.log('req.headers',req.headers)
    if(req.headers['origin'] === 'null' || req.headers['origin'].startsWith('http://localhost') || req.headers['origin'].startsWith('http://127.0.0.1')){
        res.setHeader('Access-Control-Allow-Origin',"*");
    }
    if(req.url === '/favicon.ico'){
        res.end();
        return
    }
    //get
    let {query:get_data} = url.parse(req.url,true);

    //post
    let str = '';
    req.on('data',chunk =>{
        str += chunk
    })
    req.on("end",()=>{
        console.log(str)
        let post_data = querystring.parse(str);
        console.log("post_data===>",post_data)
    })
    console.log("get_data===>",get_data)

    res.end('ok');

}).listen(8080,() => {
    console.log('listening on')
})