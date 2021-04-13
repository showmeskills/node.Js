const express = require('express');
let app = express();
const path = require('path');
app.listen(8080,()=>{console.log('Server is listening')})

app.use(express.static(path.join(__dirname,'static')));

app.get('/index',(req,res)=>{
    res.sendFile(path.join(__dirname,'static','post.html'),err=>{
        if(err){
            console.log('there is an error');
        }
        console.log('post.html')
    })
})

app.get('/search',(req,res)=>{
    res.redirect('/index2')
})

app.get('/index2',(req,res)=>{
    res.send('index2')
})