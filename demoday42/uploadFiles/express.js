const express = require('express');
const app = express();
const path = require('path');
const multer = require('multer');
const fs = require('fs');

app.use(express.static(path.join(__dirname)))
app.use(multer({dest: path.join(__dirname,'uploads/')}).any());

app.use('/',(req, res) =>{
    if(req.url === '/favicon.ico'){
        res.end();
        return
    }
    res.setHeader('Access-Control-Allow-Origin',"*");
  
    req.files.forEach((val) =>{
        var oldPath = val.path;
        var newPath = oldPath + path.extname(val.originalname);
            fs.rename(oldPath,newPath,err =>{
                if(err){
                    console.log(err);
                }
                console.log('success');
            });
        })

    res.send('ok!!')
}).listen(3000,() =>console.log('listening'))