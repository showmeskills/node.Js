const http = require('http');
const querystring = require('querystring');
let api = 'http://localhost:8080/books/book';
let obj = {
    method:'PUT',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    }
};

let req = http.request(api,obj,res=>{
    let result = '';
    res.on('data',chunk=>{
        result += chunk;
    });
    res.on('end',()=>{
        console.log('mission complete');
        console.log(result);
    })
})
const postData = querystring.stringify({
    'id': 14,
    'name':'hello world',
    'author':'hello',
    'category':'你好呀',
    'description':'就这样吧',
})
req.write(postData)
req.end()