

// 监听body滚动事件
window.addEventListener('scroll', function(){
    var t = $('body, html').scrollTop();   // 目前监听的是整个body的滚动条距离
    if(t>0){
        $('.nabobs').addClass('nabobsChange')
    }else{
        $('.nabobs').removeClass('nabobsChange')
    }
})

// $(document).ready(function(){
// //     $(".nav-nav-left li").hover(function(){
// //             $(".m-sub-menu").show();
// //         },
// //         function(){
// //             $(".m-sub-menu").hide();
// //         }
// //     );
// // });

$(function(){
    $(".nav-nav-left>li").mouseover(function() { // 单击导航的li元素，实现导航的下拉菜单
        $(this).children('ul').show();    // 使用children('ul')获取div下的li元素，然后显示与隐藏
    }).mouseout(function () {
        $(this).children('ul').hide()
    })
});