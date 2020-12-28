const express = require('express');
const router = express.Router();

router.use('/abc',require('./thirdrouter'));

router.get('/',(req,res) =>{
    res.send('user page');
})

router.get('/:id',(req,res) =>{
    res.send(`${req.params.id}page`)
})

router.get('/:id/details',(req,res) =>{
    res.send(`the details of ${req.params.id}page`)
})

module.exports = router