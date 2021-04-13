const http = require('http');
const querystring = require('querystring');
http.createServer((req, res) => {
    let str = '';
    req.on('data',chunk => {
        str += chunk
    });
    req.on('end',() =>{
        let post_data = querystring.parse(str);
        console.log(post_data)
    })
    res.end();
}).listen(8000,()=>{
    console.log('listening')
})