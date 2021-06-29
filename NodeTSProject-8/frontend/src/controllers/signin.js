const signinTpl = require("../views/signin.art");
const htmlSiginTpl = signinTpl({});

class Signin {
   signin (router){
    return (req, res, next)=>{
        const _handleSubmit=(e)=>{
            e.preventDefault();
            const data = $("#signin").serialize()
            $.ajax({
                url: "http://localhost:5000/api/users/signin",
                type: "post",
                dataType: "json",
                data,
                headers:{
                    "X-Access-Token":localStorage.getItem('lg-token') || "",
                },
                success(res,textStatus,jqXHR) {
                    //正常获取是 const token = jqXHR.getResponseHeader("X-Access-Token");
                    if (res.ret) {
                        localStorage.setItem("lg-token",res.data.setToken);                
                        router.go("/index");
                    } else {
                        alert("请登录")
                    }
                }
            })
        }
        res.render(htmlSiginTpl);
        $("#signin").on('submit', _handleSubmit)
    }
   }
}

export default Signin;


