const express = require('express');
let app = express();
const bodyParser = require('body-parser');

app.listen(8080,()=>{console.log('Server is listening')})

app.get('/index',(req,res,next)=>{
    console.log(req.query);
    console.log(req.query.a);
    console.log(req.query.b);
    res.send('ok')
})