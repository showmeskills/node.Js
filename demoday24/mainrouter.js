const express = require('express');
let app = express();

app.listen(8080,()=>{console.log('Server is listening')});

app.use('/user',require('./secondrouter'))