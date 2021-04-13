const express = require('express');
let router = express.Router();

router.get('/',(req,res)=>{
    res.send(`abc`)
})

router.get('/a',(req,res)=>{
    res.send(`aaa`)
})

router.get('/b',(req,res)=>{
    res.send(`bbbb`)
})

router.get('/c',(req,res)=>{
    res.send(`cccc`)
})

module.exports = router