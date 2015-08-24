$(document).ready(function(){

    $(window).scroll(function() {
        var top = $(document).scrollTop();
        var top_off = $('.nav').offset();
        if (top < 180){
            $('.nav').removeClass('nav_fixed');
            $('.rast').hide();
        }else {
            $('.nav').addClass('nav_fixed');
            $('.rast').show();
        }
    });

});