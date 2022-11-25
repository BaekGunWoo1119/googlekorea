$(document).ready(function() {
    $(".box .inner").mouseover(function() {
        $(this).addClass("on");
        $(this).find(".hoverEvt").css("display", "block");
    })

    $(".box .inner").mouseleave(function(){
        $(this).removeClass("on");
        $(this).find(".hoverEvt").css("display", "none");
    })
})