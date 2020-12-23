const express = require('express');
const path = require('path');
let app = express();
const http = require('http')


app.use(express.static(path.join(__dirname,'view')));
app.use(express.static(path.join(__dirname,'view','img')))
//virtual directory http://localhost:8080/file/
app.use('/file',express.static(path.join(__dirname,'view')))
app.use('/file',express.static(path.join(__dirname,'view','img')))
http.createServer(app).listen(8080,()=>{console.log('Server is listening')})