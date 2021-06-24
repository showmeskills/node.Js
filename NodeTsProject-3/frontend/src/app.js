import "./assets/common.css";
const signinTpl = require("./views/signin.art");
const indexTpl = require("./views/index.art");
const usersTpl = require("./views/users.art");
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

const _signup = ()=>{
    const $btnClose = $("#users-close");
    //submit form
    const data = $("#users-form").serialize();
    $.ajax({
        url:"http://localhost:5000/api/users/signup",
        type:"POST",
        data,
        success(res){
            console.log(res)
        },
        error(res){
            console.log(res)
        }
    })
    $btnClose.click()
}

router.route('/index',(req, res, next)=>{
    res.render(htmlindexTpl);

    $(window,".wrapper").resize();
    //fill user list;
    $("#content").html(usersTpl);

    $("#users-save").on('click',_signup)
})




router.go("/signin")
router.go("/index")
