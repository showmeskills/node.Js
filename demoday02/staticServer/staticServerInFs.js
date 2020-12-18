const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req,res) => {
    if(req.url === '/'){
        fs.readFile(path.join(__dirname, 'www','index.js'),(err,data) => {
            if(err){
                console.log('Error');
            }else{          
                res.write(data);
                res.end();
            }
        })
    }  
}).listen(8082,()=>{
    console.log('Server is listening')
})