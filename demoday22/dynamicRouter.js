const express = require('express');
let app = express();
const path = require('path');
app.listen(8080,()=>{console.log('Server is listening')});

let article_router = express.Router();
let user_router = express.Router();
app.use(express.static(path.join(__dirname,'views')))
article_router.get('/',(req,res)=>{
    res.send('article home page');
})

article_router.get('/:id',(req,res)=>{
    res.send(`you are reading ${req.params.id}`);
})

article_router.get('/:id/comment',(req,res)=>{
    res.send(`you are checking ${req.params.id}comment`);
})

article_router.get('/:id/edit',(req,res)=>{
    res.send(`you are editing ${req.params.id}article`);
})

app.use('/article',article_router)
app.use('/user',user_router)


user_router.get('/',(req,res)=>{
    res.send('user pages');
})

user_router.get('/:id',(req,res)=>{
    res.send(`${req.params.id} user page`);
})

user_router.get('/:id/detail',(req,res)=>{
    res.send(`${req.params.id}detail`);
})

