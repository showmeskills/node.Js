const indexTpl = require("../views/index.art");
const usersTpl = require("../views/users.art");
const usersListTpl = require("../views/users-list.art");
const usersPagesTpl = require("../views/users-pages.art");

const htmlindexTpl = indexTpl();
const htmlUsersTpl = usersTpl();

class Index {
    index(router) {
        //分页
        const pageSize = 3;
        let currentPage = 1;
        let dataList = [];
        //注册
        const _signup = () => {
            const $btnClose = $("#users-close");
            //submit form
            const data = $("#users-form").serialize();
            $.ajax({
                url: "http://localhost:5000/api/users",
                type: "POST",
                data,
                headers:{
                    "X-Access-Token":localStorage.getItem('lg-token') || "",
                },
                success(res) {
                    _loadData();
                    _list(1);
                },
                error(res) {
                    console.log(res.responseJSON)
                }
            })
            $btnClose.click()
        }
        const _loadData = () => {
            $.ajax({
                url: "http://localhost:5000/api/users",
                type: "get",
                async: false,
                headers:{
                    "X-Access-Token":localStorage.getItem('lg-token') || "",
                },
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
        return (req, res, next) => {
            res.render(htmlindexTpl);

            $(window, ".wrapper").resize();
            //fill user list;
            $("#content").html(htmlUsersTpl);
            //jquery 代理从父到子;删除事件
            $("#users-list").on('click', '.remove', function () {
                $.ajax({
                    url: 'http://localhost:5000/api/users',
                    type: "delete",
                    headers:{
                        "X-Access-Token":localStorage.getItem('lg-token') || "",
                    },
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
                    headers:{
                        "X-Access-Token":localStorage.getItem('lg-token') || "",
                    },
                    success(res) {
                        if (res.ret) {
                            localStorage.removeItem('lg-token');
                            router.go("/signin")
                        }
                    }
                })
            })
        }

    }
}

export default Index;