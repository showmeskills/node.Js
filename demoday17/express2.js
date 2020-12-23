const express = require('express');
let app = express();
const http = require('http');

http.createServer(app).listen(8080,()=>{console.log('Running on port')})

app.use('/',(req,res,next)=>{
    console.log('the fist');
    next();
})

app.use('/',(req,res,next)=>{
    console.log('the second');
    next();
})

app.use('/',(req,res,next)=>{
    console.log('the end');
    res.send('there is nothing')
})