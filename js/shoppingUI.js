$(document).ready(function() {
    $(".vrt1").mouseclick(function() {
        $(".mkt").find(".vrt2").removeClass("act");
        $(".mkt").find(".vrt3").removeClass("act");
        $(".vrt1").addClass("act");
        $(".mkt").find(".shopping").css("display", "none");
        $(".mkt").find(".shopping").css("display", "none");
        $(".mkt").find(".shopping").css("display", "block");
    })

    $(".vrt2").mouseclick(function() {
        $(".mkt").find(".vrt1").removeClass("act");
        $(".mkt").find(".vrt3").removeClass("act");
        $(".vrt2").addClass("act");
        $(".mkt").find(".shopping").css("display", "none");
        $(".mkt").find(".shopping").css("display", "block");
        $(".mkt").find(".shopping").css("display", "none");
    })

    $(".vrt3").mouseclick(function() {
        $(".mkt").find(".vrt1").removeClass("act");
        $(".mkt").find(".vrt2").removeClass("act");
        $(".vrt3").addClass("act");
        $(".mkt").find(".shopping").css("display", "block");
        $(".mkt").find(".shopping").css("display", "none");
        $(".mkt").find(".shopping").css("display", "none");
    })

})