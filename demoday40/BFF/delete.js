const http = require('http');
const querystring = require('querystring');
let obj = {
    method: 'DELETE',
}
//客户端是从req发
let req = http.request('http://localhost:8080/books/book/13',obj,res=>{
    let result = '';
    res.on('data', chunk => {
        result += chunk;
    })
    res.on('end',()=>{
        console.log('mission over')
        console.log(result)
    })
})

req.end()