const express = require('express');
let app = express();

app.listen(8080,()=>{console.log('Server is listening on port')})

/*
the first type router
app.get('/index',(req,res,next) => {
    console.log('index1');
    next();
})

app.get('/index',(req,res,next) => {
    console.log('index2');
    next();
})
the second type router
app.get('/index',(req,res,next) => {
    res.send('index3')
})
app.get('/index',(req,res,next) => {
    console.log('index1');
    next();
},(req,res,next) => {
    console.log('index2');
    next();
},(req,res,next) => {
    console.log('index3');
    next();
})
app.get('/index',(req,res,next) => {
    console.log('index4');
    res.send('index5')
})
*/
let fn1 = (req,res,next) => {
    console.log('fn111111')
    next();
}

let fn2 = (req,res,next) => {
    console.log('fn22222')
    next();
}
app.get('/bb',[fn1,fn2],(req,res,next) => {
    console.log('fn333333');
    res.send('fn')
})
app.use((err,req,res,next)=>{
    res.status(500).send('the page is not existed')
})


