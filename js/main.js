$(document).ready(function(){

    $(window).scroll(function() {
        var top = $(document).scrollTop();
        if (top < 180){
            $('.nav').removeClass('nav_fixed');
            $('nav ul li a').removeClass('topA');
            $('.rast').hide();
            $('nav ul li').animate({
                paddingTop:"30px",
                paddingBottom:"30px"

            },50);
        }else {
            $('.nav').addClass('nav_fixed');
            $('.rast').show();
            $('nav ul li').animate({
                paddingTop:"20px",
                paddingBottom:"20px"

            },50);
            $('nav ul li a').addClass('topA');
        }
    });


});