const express = require('express');
let app = express();
const path = require('path');
const template = require('express-art-template');

app.listen(8080,()=>{console.log('Server is listening')})

app.set('views',path.join(__dirname,'template'));
app.set('view engine', 'art');
app.engine('art',template);

app.get('/',(req,res) =>{
    res.render('index',{
        title:'this is express in art-template',
        data:['this','is','an','arry'],
        str:'I am Terry who are from Australia'
    })
})