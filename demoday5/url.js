const url = require('url');

let strUrl = 'https://www.google.com:8080/p/a/t/h?query=string&a=666#hash'

let myUrl = url.parse(strUrl,true);
console.log(myUrl)