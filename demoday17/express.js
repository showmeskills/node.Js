const express = require('express')
let app = express();
const http = require('http');

http.createServer(app).listen(8000,()=>{console.log('Running')})

app.get('*',(req,res,next) => {
    console.log('hello express')
    next();
})

app.get('/',(req,res,next) => {
    console.log('this is the first part of express');
    next()
})

app.get('/',(req,res,next) => {
    console.log('this is the second part of express');
    next();
})

app.get('/',(req,res,next) => {
    console.log('I am the final parts and recieve the first and second part');
    next();
})

app.get('/',(req,res,next) => {
    res.json({
        'a':1,
        'b':2
    })
})