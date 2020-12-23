const path = require('path');
const http = require('http');
const express = require('express');
let app = express();
const bodyParser = require('body-parser');

http.createServer(app).listen(8080,() => {console.log('Server is listening')})

app.use(express.static(path.join(__dirname, 'view')));
app.use(bodyParser.urlencoded({extended: false}));

app.post('/data',(req, res) =>{
    res.send(req.body)
})