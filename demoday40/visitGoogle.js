const http = require('http');
const fs = require('fs');
const path = require('path');
let api = 'http://www.google.com'
let req = http.request(api,res=>{
    let result = '';
    res.on('data',chunk =>{
        result += chunk;
    })
    res.on('end',()=>{
        console.log('data have been recieved');
        fs.writeFile(path.join(__dirname,'Google.html'),result,err=>{
            if(err){
                console.log('the google page is not created');
                return;
            }
            console.log('the google page has been created')
        });
    })
})

req.end();