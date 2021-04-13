const express = require('express');
let app = express();
let router = express.Router();

router.get('/',(req,res)=>{
    res.send('home page')
})
//路由参数/:参数名(是个变量)
router.get('/:id',(req,res)=>{
    res.send(`you are reading the book id${req.params.id}`)//id也是个变量

})
router.get('/:id/comment',(req,res)=>{
    res.send(`you are checking${req.params.id}comment`)
    
})
router.get('/:id/edit',(req,res)=>{
    res.send(`you are editing${req.params.id}article`)
    
})

module.exports = router