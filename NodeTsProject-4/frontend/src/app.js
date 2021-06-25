import "./assets/common.css";
const signinTpl = require("./views/signin.art");
const indexTpl = require("./views/index.art");
const usersTpl = require("./views/users.art");
const usersListTpl = require("./views/users-list.art");
const usersPagesTpl = require("./views/users-pages.art");
const htmlSiginTpl = signinTpl();
const htmlindexTpl = indexTpl();
const htmlUsersTpl = usersTpl();

import SMERouter from 'sme-router'

const router = new SMERouter('root')




// route config
router.route('/signin', (req, res, next) => {

    $("#signin").on('submit', (e) => {
        e.preventDefault();
        router.go("/index",)
    })
    res.render(htmlSiginTpl);
})

const _signup = () => {
    const $btnClose = $("#users-close");
    //submit form
    const data = $("#users-form").serialize();
    $.ajax({
        url: "http://localhost:5000/api/users/signup",
        type: "POST",
        data,
        success(res) {
             _loadData();
        },
        error(res) {
            console.log(res.responseJSON)
        }
    })
    $btnClose.click()
}
const pageSize = 5;
let dataList = [];
const _loadData = () => {
    $.ajax({
        url: "http://localhost:5000/api/users/list",
        type: "get",
        async:false,
        success(res) {
            dataList = res.data;
            _pagination(res.data);
            _list(1);
        }
    })
}
const _list = (pageNo) => {
    let start = (pageNo - 1) * pageSize
    $("#users-list").html(usersListTpl({
        data: dataList.slice(start, start + pageSize)
    }));    
}

const _pagination = (data) => {
    const total = data.length;
    const pageCount = Math.ceil(total / pageSize);
    const pageArray = new Array(pageCount)
    const htmlPage = usersPagesTpl({
        pageArray
    });
    $("#users-pages").html(htmlPage);
    $("#users-page-list li:nth-child(2)").addClass("active")
    $("#users-page-list li:not(:first-child,:last-child)").on("click", function () {
        _list($(this).index())
        $(this).addClass("active").siblings().removeClass("active");
    })
}

router.route('/index', (req, res, next) => {
    res.render(htmlindexTpl);

    $(window, ".wrapper").resize();
    //fill user list;
    $("#content").html(htmlUsersTpl);
     _loadData();

    $("#users-save").on('click', _signup)
})




router.go("/signin")
router.go("/index")
