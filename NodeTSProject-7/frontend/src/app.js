import "./assets/common.css";
import SMERouter from 'sme-router'
import Signin from "./controllers/signin";
import Index from "./controllers/index";




const router = new SMERouter('root')
const signin = new Signin();
const index = new Index();

//前端路由守卫
//首次页面判断和跳转
router.use(()=>{
    $.ajax({
        url: "http://localhost:5000/api/users/isAuth",
        dataType: "json",
        type: "get",
        headers:{
            "X-Access-Token":localStorage.getItem('lg-token') || "",
        },
        success(res) {
            if (res.ret) {
                router.go("/index")
            } else {
                router.go("/signin")
            }
        }
    })
})



// route config
router.route('/signin', signin.signin(router))


//index page route config
router.route('/index', index.index(router))



