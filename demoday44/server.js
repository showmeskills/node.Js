const express = require('express');
const app = express();
const multer = require('multer');
const path = require('path');
const bodyParser = require('body-parser');
let result = {
    code:0,
    msg:'',
    data:'',
}

app.use(bodyParser.urlencoded({extended: false }))
app.use(multer({dest:path.join(__dirname,'uploads/')}).any())

app.use('/', (req,res,next) =>{

    if(req.url === '/favicon.ico'){
        res.send();
        return
    }

    if(req.headers['origin'] === 'null' || req.headers['origin'] === 'http://localhost:8000/'  || req.headers['origin'] ==='http://127.0.0.1:5501'){
        res.setHeader('Access-Control-Allow-Origin',"*");
    }
    let msg = req.files
    if(msg){
        result.msg = 'received files'
        result.data = msg;
        res.send(result)
    }else{
        result.code = 1
        result.msg = 'not received files'
        result.data = msg;
        res.send(result)
    }
    
    
})

app.listen(8000,()=>{console.log('Server is listening on')})