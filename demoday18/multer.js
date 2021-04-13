const path = require('path');
const http = require('http');
const express = require('express');
let app = express();
const fs = require('fs');
const multer = require('multer');

app.listen(8080,() => {console.log('Server is listening')})
app.use(express.static(path.join(__dirname,'view')));

app.use(multer({dest:path.join(__dirname,'uploads/')}).any())

app.post('/upload',(req,res,next) => {
    console.log(req.files)
    let oldPath = req.files[0].path;
    let newPath = req.files[0].path + path.extname(req.files[0].originalname);
    fs.rename(oldPath,newPath,err =>{
        if(err){
            console.log('there is an error')
        }
    })
    res.send('upload has been completed')
})
