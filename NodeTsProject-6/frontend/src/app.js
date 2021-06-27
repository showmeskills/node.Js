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

//前端路由守卫
//首次页面判断和跳转
$.ajax({
    url: "http://localhost:5000/api/users/isAuth",
    dataType: "json",
    type: "get",
    success(res) {
        // console.log(res);
        if (res.ret) {
            router.go("/index")
        } else {
            router.go("/signin")
        }
    }
})


const _handleSubmit = (e) => {
    e.preventDefault();
    const data = $("#signin").serialize()
    $.ajax({
        url: "http://localhost:5000/api/users/signin",
        type: "post",
        dataType: "json",
        data,
        success(res) {
            // console.log(res);
            if (res.ret) {
                router.go("/index");
            } else {
                alert("请登录")
            }
        }
    })
}

// route config
router.route('/signin', (req, res, next) => {

    res.render(htmlSiginTpl);
    $("#signin").on('submit', _handleSubmit)
})
//注册
const _signup = () => {
    const $btnClose = $("#users-close");
    //submit form
    const data = $("#users-form").serialize();
    $.ajax({
        url: "http://localhost:5000/api/users",
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
//分页
const pageSize = 3;
let currentPage = 1;
let dataList = [];
const _loadData = () => {
    $.ajax({
        url: "http://localhost:5000/api/users",
        type: "get",
        async: false,
        success(res) {
            dataList = res.data;
            _pagination(res.data);
            _list(currentPage);
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
    _setPageActive(currentPage)
}

const _setPageActive = (index) => {
    $("#users-pages #users-page-list li:not(:first-child,:last-child)")
        .eq(index - 1)
        .addClass("active")
        .siblings()
        .removeClass("active");
}


router.route('/index', (req, res, next) => {
    res.render(htmlindexTpl);

    $(window, ".wrapper").resize();
    //fill user list;
    $("#content").html(htmlUsersTpl);
    //jquery 代理从父到子;删除事件
    $("#users-list").on('click', '.remove', function () {
        $.ajax({
            url: 'http://localhost:5000/api/users',
            type: "delete",
            data: {
                _id: $(this).data('id')
            },
            success(res) {
                _loadData()
                const isLastPage = Math.ceil(dataList.length / pageSize) === currentPage;
                const restOne = dataList.length % pageSize === 1;
                const notPageFirst = currentPage > 0
                console.log(isLastPage, restOne, notPageFirst)
                if (isLastPage && restOne && notPageFirst) {
                    currentPage--;
                }

            }
        })
    })
    //分页事件
    $("#users-pages").on("click", "#users-page-list li:not(:first-child,:last-child)", function () {
        const index = $(this).index();
        _list(index)
        currentPage = index;
        _setPageActive(index);
    })
    //分页前进
    $("#users-pages").on("click", "#users-page-list li:first-child", function () {
        if (currentPage > 1) {
            currentPage--;
            _list(currentPage);
            _setPageActive(currentPage)
        }
    })
    //分页后退
    $("#users-pages").on("click", "#users-page-list li:last-child", function () {
        if (currentPage < Math.ceil(dataList.length / pageSize)) {
            currentPage++;
            _list(currentPage)
            _setPageActive(currentPage)

        }
    })
    _loadData();
    //add user
    $("#users-save").on('click', _signup)

    //sign out
    $("#users-signout").on('click', function (e) {
        e = e || window.event
        e.preventDefault();
        $.ajax({
            url: "http://localhost:5000/api/users/signout",
            type: "get",
            dataType: "json",
            success(res) {
                //console.log(res);
                if (res.ret) {
                    router.go("/signin")
                }
            }
        })
    })
})



