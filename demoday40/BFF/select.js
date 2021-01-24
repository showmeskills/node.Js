const http = require('http');
let api = 'http://localhost:8080/books'
let req = http.request(api,res=>{
    let result = '';
    res.on('data',chunk=>{
        result += chunk
    });
    res.on('end',()=>{
        console.log('you recieved data')
        console.log(result)
    })
})

req.end()