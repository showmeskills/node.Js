const express = require('express');
const path = require('path');
let app = express();
const multer = require('multer');
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname)))
app.use(bodyParser.urlencoded({ extended: false }))

app.use(multer({dest:path.join(__dirname,'uploads/')}).any())

app.use('/',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin',"*");
   
    res.send("ok!!!!")
}).listen(8080,()=>{
    console.log('8080')
})