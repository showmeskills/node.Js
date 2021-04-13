const express = require('express');
let router = express();

let Abc = require('./class');
let abc = new Abc();

router.get('/',(req,res) =>{
    res.send('abc home page');
})
router.get('/a', abc.a())
router.get('/b', abc.b())
router.get('/c', abc.c())

module.exports = router