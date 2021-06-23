import "./assets/common.css";
const signinTpl = require("./views/signin.art");
const indexTpl = require("./views/index.art");

const htmlSiginTpl = signinTpl();
const htmlindexTpl = indexTpl();


import SMERouter from 'sme-router'
 
const router = new SMERouter('root')




// route config
router.route('/signin', (req, res, next)=>{
    
    $("#signin").on('submit',(e)=>{
        e.preventDefault();
        router.go("/index",)
    })
    res.render(htmlSiginTpl);
})


router.route('/index',(req, res, next)=>{
    res.render(htmlindexTpl)
})

router.go("/index")
router.go("/index")
