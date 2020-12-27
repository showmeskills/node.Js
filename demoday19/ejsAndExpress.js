const express = require('express');
let app = express();
const path = require('path');
app.listen(8080,()=>{console.log('Serve is listening')});

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views'));

app.get('/',(req,res)=>{
   let arr = ['this','is','an','array','in','ejs']
   let msg = 'the model of ejs is used in express'
   res.render('demo.ejs',{
       arr,
       msg,
   })
})

app.get('/login',(req,res)=>{
    let msg = 'welcome to enter login page'
    res.render('login.ejs',{
        msg
    })
 })