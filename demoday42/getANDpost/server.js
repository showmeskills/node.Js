const http = require('http');
const url = require('url');
const querystring = require('querystring');

http.createServer((req, res) => {
    const {query:get_data} = url.parse(req.url,true)

    let str = '';
    req.on('data',chunk=>{
        str += chunk
    })
    
    req.on('end',()=>{

        let post_data = querystring.parse(str);
        console.log(post_data)
    })
    console.log(get_data)
    res.end();
}).listen(8000,()=>{
    console.log('listening')
})