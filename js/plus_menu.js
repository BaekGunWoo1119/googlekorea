$(document).ready(function() {
    $(".plus").mouseenter(function() {
        $(this).addClass("on");
        $(this).find(".plus_menu").css("display", "block");
    })
    $(".plus").mouseleave(function(){
        $(this).removeClass("on");
        $(this).find(".plus_menu").css("display", "none");
    })

})