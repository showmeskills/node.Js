const express = require('express');
let app = express();
app.listen(8080,()=>{
    console.log('Running on port');
})

app.use((req, res,next) =>{
    console.log('1');
    next();
    console.log('2');
})

app.use((req, res,next) =>{
    console.log('3');
    next();
    console.log('4');
})

app.use((req, res,next) =>{
    console.log('5');
    next();
    console.log('6');
})

app.use((req, res,next) =>{
    res.send({'code':0})
})

