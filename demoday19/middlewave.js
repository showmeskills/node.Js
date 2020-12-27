const express = require('express');
let app = express();
const path = require('path');
app.listen(8080,()=>{console.log('Running server')})

app.set('views engine','ejs');
app.set('views',path.join(__dirname,'views'))

app.use('/',(req,res,next)=>{
    let name = 'first'
    res.render('middlewave.ejs',{
        name
    })
    next();
    console.log('this is nothing');
})

app.use('/',(req,res,next)=>{
    console.log('this is the second')
    next();
    console.log('this is the from the second');
})


app.use('/',(req,res,next)=>{
    console.log('this is the third');
    next();
    console.log('this is the from the third');
})


