const express = require('express');
let app = express();
app.listen(8080,()=>{console.log('running on port')})


app.get('/',(req,res,next)=>{
    res.send('home page');
})

app.get('/news',(req,res,next)=>{
    res.send('this is the news page');
    next();
})

app.get('/news',(req,res,next)=>{
    console.log('this is the news page2')
})

app.get('/login',(req,res,next)=>{
    res.send('this is the login page');
})

app.use((req,res,next)=>{
    res.status(404).send('the page is not existed');
})
