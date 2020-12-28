const express = require('express');
let app = express();
const path = require('path');
app.listen(8000,()=>{console.log('Running1111')})

app.use('/article',require('./article'));
app.use('/user',require('./user'))