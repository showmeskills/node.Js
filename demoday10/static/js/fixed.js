let widths=[70,82,70,128,58,32],
    tops=[1500,2200,2900,3400,4000,0],
    $oLeftSidebarLi=$('#leftSideBar li'),
    $oLeftSideBarP=$oLeftSidebarLi.find('p');
// 左侧边栏的动画
$(window).scroll(function(){
    let $scroll=$('html').scrollTop();
    console.log($scroll)
    if($scroll>=1200){
        $('#leftSideBar').css('display','block')
    }else{
        $('#leftSideBar').css('display','none')
    }
    if($scroll>1200 && $scroll<=2200){
        $oLeftSidebarLi.eq(0).addClass('on').siblings().removeClass('on');
    }
    else if($scroll>2200 && $scroll<=2900){
        $oLeftSidebarLi.eq(1).addClass('on').siblings().removeClass('on');
    }
    else if($scroll>2900 && $scroll<=3400){
        $oLeftSidebarLi.eq(2).addClass('on').siblings().removeClass('on');
    }
    else if($scroll>3400 && $scroll<=4000){
        $oLeftSidebarLi.eq(3).addClass('on').siblings().removeClass('on');
    }
    else if($scroll>4000 && $scroll<=4600){
        $oLeftSidebarLi.eq(4).addClass('on').siblings().removeClass('on');
    }
    else if($scroll>4600){
        $oLeftSidebarLi.removeClass('on');
    }
   
});


console.log($('#firstFloor').offset().top) 
$('#leftSideBar li').each(function(index){
    $(this).hover(function(){
        $oLeftSideBarP.eq(index).css({
            opacity: 1
        });
        $oLeftSideBarP.eq(index).stop().animate({
            width:widths[index]
        },300);
        $oLeftSideBarP.eq(index).click(function(){
            $('html').animate({
                scrollTop:tops[index]
            },500)
        });
    },function(){
        $oLeftSideBarP.eq(index).stop().animate({
            width:32
        },300);
        $oLeftSideBarP.eq(index).css({
            opacity: 0
        });
    });
});
$('#leftSideBar li').eq(5).click(function(){
    $('html').animate({
        scrollTop:0
    },500)
});

// 右侧边栏的直达顶部
$('#rightSideBar .bottom>li.toTop').click(function(){
    $('html').animate({
        scrollTop:0
    },500)
});