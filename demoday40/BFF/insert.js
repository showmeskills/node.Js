const http = require('http');
const querystring = require('querystring');

let obj = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    }
}
let req = http.request('http://localhost:8080/books/book',obj,res=>{

    let result = '';

    res.on('data', chunk => {
        result += chunk;
    })
    res.on('end',()=>{
        console.log('mission over')
        console.log(result)
    })
})
const postData = querystring.stringify({
    'name':'Vue20',
    'author':'Terry',
    'category':'IT web',
    'description':'front-end Framework',
})
console.log(postData)
req.write(postData)
req.end()