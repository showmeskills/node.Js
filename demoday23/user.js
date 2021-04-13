const express = require('express');
let router = express.Router();

router.use('/abc',require('./abc.js'));

router.get('/',(req,res) => {
    res.send('user home page');
})

router.get('/:id',(req,res) => {
    res.send(`${req.params.id}comment`)
})

router.get('/:id/details',(req,res) => {
    res.send(`the details of ${req.params.id}`)
})

module.exports = router