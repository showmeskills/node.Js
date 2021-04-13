'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

{
    var oBigLi = [].concat(_toConsumableArray(document.querySelectorAll('#banner ul.bigBanner li'))),
        //轮播图的参数
    oTab = [].concat(_toConsumableArray(document.querySelectorAll('#banner .tab li'))),

    // 二级菜单栏的移入
    oLi = [].concat(_toConsumableArray(document.querySelectorAll('#nav .nav1 div.sidebar .secondBar ul.list2>li>div ul.items li'))),
        oSpan = [].concat(_toConsumableArray(document.querySelectorAll('#nav .nav1 div.sidebar .secondBar ul.list2>li>div p span'))),
        aBanner = document.getElementById("banner"),

    // 疯狂抢购的移入
    oTab1 = [].concat(_toConsumableArray(document.querySelectorAll('#crazySale section.sale ul.title>li'))),
        OLi1 = [].concat(_toConsumableArray(document.querySelectorAll('#crazySale section.sale ul.items>li'))),

    // 信息公告的移入
    oTab2 = [].concat(_toConsumableArray(document.querySelectorAll('#crazySale section.info ul.title>li'))),
        OLi2 = [].concat(_toConsumableArray(document.querySelectorAll('#crazySale section.info ul.items>li'))),

    // 疯狂抢购的第一个广告
    oTab3 = [].concat(_toConsumableArray(document.querySelectorAll('#crazySale section.info div.smallBanner1 ul.tab li'))),
        aBanner1 = document.querySelector('#crazySale section.info div.smallBanner1'),
        aUl1 = document.querySelector('#crazySale section.info div.smallBanner1 ul.img'),
        aLi = aUl1.querySelector('li'),
        width = aLi.clientWidth,

    // 疯狂抢购的第2个广告
    oTab4 = [].concat(_toConsumableArray(document.querySelectorAll('#crazySale section.info div.smallBanner2 ul.tab li'))),
        aBanner2 = document.querySelector('#crazySale section.info div.smallBanner2'),
        aUl2 = document.querySelector('#crazySale section.info div.smallBanner2 ul.img'),

    // 1F无缝轮播
    o1FTab1 = [].concat(_toConsumableArray(document.querySelectorAll('#firstFloor .content .banner ul.tab li'))),
        a1FUl = document.querySelector('#firstFloor .content .banner ul.pic'),
        aBanner3 = document.querySelector('#firstFloor .content .banner'),
        aF1Li = a1FUl.querySelector('li'),
        width1 = aF1Li.clientWidth,

    // 2F无缝轮播
    o2FTab1 = [].concat(_toConsumableArray(document.querySelectorAll('#secondFloor .content .banner ul.tab li'))),
        a2FUl = document.querySelector('#secondFloor .content .banner ul.pic'),
        aBanner4 = document.querySelector('#secondFloor .content .banner'),

    // 3F无缝轮播
    o3FTab1 = [].concat(_toConsumableArray(document.querySelectorAll('#thirdFloor .content .banner ul.tab li'))),
        a3FUl = document.querySelector('#thirdFloor .content .banner ul.pic'),
        aBanner5 = document.querySelector('#thirdFloor .content .banner'),

    // 4F无缝轮播
    o4FTab1 = [].concat(_toConsumableArray(document.querySelectorAll('#fourthFloor .content .banner ul.tab li'))),
        a4FUl = document.querySelector('#fourthFloor .content .banner ul.pic'),
        aBanner6 = document.querySelector('#fourthFloor .content .banner'),

    // 5F无缝轮播
    o5FTab1 = [].concat(_toConsumableArray(document.querySelectorAll('#fifthFloor .content .banner ul.tab li'))),
        a5FUl = document.querySelector('#fifthFloor .content .banner ul.pic'),
        aBanner7 = document.querySelector('#fifthFloor .content .banner'),

    //1F的热门排行榜
    o1FRangeLi = [].concat(_toConsumableArray(document.querySelectorAll('#firstFloor .range .hotrange>ul>li'))),
        o1FRangeTab = [].concat(_toConsumableArray(document.querySelectorAll('#firstFloor .range .hotrange .title p.right span'))),

    //2F的热门排行榜
    o2FRangeLi = [].concat(_toConsumableArray(document.querySelectorAll('#secondFloor .range .hotrange>ul>li'))),
        o2FRangeTab = [].concat(_toConsumableArray(document.querySelectorAll('#secondFloor .range .hotrange .title p.right span'))),

    // 优惠部分的点击
    oDiscountLi = [].concat(_toConsumableArray(document.querySelectorAll('#discount .content .item >li'))),
        oDiscountTab = [].concat(_toConsumableArray(document.querySelectorAll('#discount .content .title ul li'))),
        oDiscountBtn = [].concat(_toConsumableArray(document.querySelectorAll('#discount .content .btn div'))),

    //官方推荐、地方名品等的移入
    oreLi = [].concat(_toConsumableArray(document.querySelectorAll('#official .brand>li'))),
        oreTab = [].concat(_toConsumableArray(document.querySelectorAll('#official .title>li'))),

    // 官方推荐
    oOtab = [].concat(_toConsumableArray(document.querySelectorAll('#official .brand>li.list ul'))),
        aOLi = document.querySelector('#official .brand>li.list'),
        oOBtn = [].concat(_toConsumableArray(document.querySelectorAll('#official .brand>li.list div.btn div'))),

    // 底部的发送邮箱框
    emailInput = document.querySelector('footer .top .link .right input'),
        email = document.querySelector('footer .top .link .right span.icon'),

    // 底部的微信二维码显示
    code = document.querySelector('footer .top .explain dl.last dt'),
    // 右边栏的content
    fixedRight=document.querySelector('#rightSideBar .content');
    var Play = function () {
        function Play(oLi, oTab, aUl, oBtn) {
            _classCallCheck(this, Play);

            this.oLi = oLi;
            this.oTab = oTab;
            this.oBtn = oBtn;
            this.aUl = aUl;
            this.length = oTab.length, this.index = 0;
            this.timer = 0;
        }

        _createClass(Play, [{
            key: 'exe',
            value: function exe() {
                this.bindenter();
                this.bindleave();
                this.autoshow();
            }
        }, {
            key: 'show',
            value: function show(num) {
                var _this = this;

                return function () {
                    // console.log(num,this.index)
                    if (num === _this.index) return;
                    _this.oLi[_this.index].classList.remove('on');
                    _this.oTab[_this.index].classList.remove('on');
                    _this.index = num;
                    // console.log(this.index)
                    if (_this.index >= _this.length) _this.index = 0;
                    _this.oLi[_this.index].classList.add('on');
                    _this.oTab[_this.index].classList.add('on');
                };
            }
        }, {
            key: 'autoshow',
            value: function autoshow() {
                var _this2 = this;

                this.timer = setInterval(function () {
                    _this2.show(_this2.index + 1)();
                }, 2000);
            }
        }, {
            key: 'bindenter',
            value: function bindenter() {
                var _this3 = this;

                this.aUl.onmouseenter = function () {
                    clearInterval(_this3.timer);
                };
            }
        }, {
            key: 'bindleave',
            value: function bindleave() {
                var _this4 = this;

                this.aUl.onmouseleave = function () {
                    _this4.timer = setTimeout(function () {
                        _this4.show(_this4.index + 1)();
                    }, 1000);
                    clearTimeout(_this4.timer);
                    _this4.autoshow();
                };
            }
        }, {
            key: 'btnClick',
            value: function btnClick() {
                var _this5 = this;

                var temp = void 0;
                // console.log(this.oBtn);
                this.oBtn[0].onclick = function () {
                    temp = _this5.index;
                    temp--;
                    if (temp < 0) temp = 0;
                    _this5.show(temp)();
                };
                this.oBtn[1].onclick = function () {
                    temp = _this5.index;
                    temp++;
                    if (temp >= _this5.length) temp = _this5.length - 1;
                    _this5.show(temp)();
                };
            }
        }, {
            key: 'tabEnter',
            value: function tabEnter() {
                for (var i = 0; i < this.length; i++) {
                    this.oTab[i].onmouseenter = this.show(i);
                }
            }
        }, {
            key: 'tabClick',
            value: function tabClick() {
                for (var i = 0; i < this.length; i++) {
                    this.oTab[i].onclick = this.show(i);
                }
            }
        }]);

        return Play;
    }();

    var Run = function () {
        function Run(oTab, aUl, aBanner, width, oBtn) {
            _classCallCheck(this, Run);

            this.index = 0;
            this.timer = 0;
            this.oTab = oTab;
            this.aUl = aUl;
            this.aBanner = aBanner;
            this.width = width;
            this.length = oTab.length;
            this.oBtn = oBtn;
        }

        _createClass(Run, [{
            key: 'exe',
            value: function exe() {
                this.bindenter();
                this.bindleave();
                this.autorun();
            }
            // 无缝轮播

        }, {
            key: 'run',
            value: function run(num) {
                var _this6 = this;

                return function () {
                    if (num === _this6.index) return;
                    _this6.aUl.classList.remove('tra0');
                    _this6.oTab[_this6.index].classList.remove('on');
                    _this6.aUl.style.marginLeft = -num * _this6.width + 'px';
                    if (num >= _this6.length) {
                        num = 0;
                        setTimeout(function () {
                            _this6.aUl.classList.add('tra0');
                            _this6.aUl.style.marginLeft = 0;
                        }, 1030);
                    }
                    _this6.index = num;
                    _this6.oTab[_this6.index].classList.add('on');
                };
            }
        }, {
            key: 'autorun',
            value: function autorun() {
                var _this7 = this;

                this.timer = setInterval(function () {
                    _this7.run(_this7.index + 1)();
                }, 2000);
            }
        }, {
            key: 'bindenter',
            value: function bindenter() {
                var _this8 = this;

                this.aBanner.onmouseenter = function () {
                    clearInterval(_this8.timer);
                };
            }
        }, {
            key: 'bindleave',
            value: function bindleave() {
                var _this9 = this;

                this.aBanner.onmouseleave = function () {
                    _this9.timer = setTimeout(function () {
                        _this9.run(_this9.index + 1)();
                    }, 1000);
                    clearTimeout(_this9.timer);
                    _this9.autorun();
                };
            }
        }, {
            key: 'tabEnter',
            value: function tabEnter() {
                for (var i = 0; i < this.length; i++) {
                    this.oTab[i].onmouseenter = this.run(i);
                }
            }
        }, {
            key: 'tabClick',
            value: function tabClick() {
                for (var i = 0; i < this.length; i++) {
                    this.oTab[i].onclick = this.run(i);
                }
            }
        }, {
            key: 'btnClick',
            value: function btnClick() {
                var _this10 = this;

                var temp = void 0;
                // console.log(this.oBtn);
                this.oBtn[0].onclick = function () {
                    temp = _this10.index;
                    temp--;
                    // console.log(temp);
                    if (temp < 0) temp = 0;
                    _this10.run(temp)();
                };
                this.oBtn[1].onclick = function () {
                    temp = _this10.index;
                    temp++;
                    if (temp >= _this10.length) temp = _this10.length - 1;
                    // console.log(temp);
                    _this10.run(temp)();
                };
            }
        }]);

        return Run;
    }();

    // 底部邮箱的验证
    email.onclick = function () {
        console.log('1');
        if (!emailInput.value) {
            alert("请输入您的邮箱！");
        } else {
            var reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
                bool = false;
            bool = reg.test(emailInput.value);
            if (bool) {
                alert('订阅促销消息成功！');
            } else {
                alert('请输入正确的邮箱！');
            }
        }
    };
    // 底部的微信二维码显示
    code.onmouseenter = function () {
        code.classList.toggle('on');
        // console.log(this);
    };
    var play = new Play(oBigLi, oTab, aBanner, null),
        bar = new Play(oLi, oSpan, null, null),
        sale = new Play(OLi1, oTab1, null, null),
        info = new Play(OLi2, oTab2, null, null),
        smallBanner1 = new Run(oTab3, aUl1, aBanner1, width, null),
        smallBanner2 = new Run(oTab4, aUl2, aBanner2, width, null),
        F1anner = new Run(o1FTab1, a1FUl, aBanner3, width1, null),
        F2banner = new Run(o2FTab1, a2FUl, aBanner4, width1, null),
        F3anner = new Run(o3FTab1, a3FUl, aBanner5, width1, null),
        F4banner = new Run(o4FTab1, a4FUl, aBanner6, width1, null),
        F5banner = new Run(o5FTab1, a5FUl, aBanner7, width1, null),
        range1 = new Play(o1FRangeLi, o1FRangeTab, null, null),
        range2 = new Play(o2FRangeLi, o2FRangeTab, null, null),
        discount = new Play(oDiscountLi, oDiscountTab, null, oDiscountBtn),
        brand = new Play(oreLi, oreTab, null, null),
        official = new Run(oOtab, aOLi, null, 1200, oOBtn);
    play.exe();
    play.tabEnter();
    bar.tabEnter();
    sale.tabEnter();
    info.tabEnter();
    smallBanner1.exe();
    smallBanner1.tabClick();
    smallBanner2.exe();
    smallBanner2.tabClick();
    F1anner.exe();
    F1anner.tabClick();
    F2banner.exe();
    F2banner.tabClick();
    F3anner.exe();
    F3anner.tabClick();
    F4banner.exe();
    F4banner.tabClick();
    F5banner.exe();
    F5banner.tabClick();
    range1.tabEnter();
    range2.tabEnter();
    discount.tabClick();
    discount.btnClick();
    brand.tabEnter();
    official.btnClick();
}