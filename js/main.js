(function ($) {
    $.fn.capslide = function (options) {
        var opts = $.extend({}, $.fn.capslide.defaults, options);
        return this.each(function () {
            $this = $(this);
            var o = $.meta ? $.extend({}, opts, $this.data()) : opts;
            var _img = $this.find('img:first');
            var w = _img.width();
            var h = _img.height();
            var hei = $this.find('.ic_caption h3').innerHeight();
            var newh = h - hei;

            $this.find('.ic_text').css({'display': 'none', 'height': newh});

            $('.ic_caption', $this).css({
                'color': o.caption_color,
                'background-color': o.caption_bgcolor,
                'bottom': '0px',
                'width': w
            });

            $this.css({'width': w, 'height': h, 'border': o.border});
            $this.hover(
                function () {
                    if ((navigator.appVersion).indexOf('MSIE 7.0') > 0)
                        $('.overlay', $(this)).show();
                    else
                        $('.overlay', $(this)).fadeIn();
                    if (!o.showcaption)
                        $(this).find('.ic_caption').slideDown(500);
                    else
                        $('.ic_text', $(this)).slideDown(500);
                },
                function () {
                    if ((navigator.appVersion).indexOf('MSIE 7.0') > 0)
                        $('.overlay', $(this)).hide();
                    else
                        $('.overlay', $(this)).fadeOut();
                    if (!o.showcaption)
                        $(this).find('.ic_caption').slideUp(200);
                    else
                        $('.ic_text', $(this)).slideUp(200);
                }
            );
        });
    };
    $.fn.capslide.defaults = {
        caption_color: 'white',
        caption_bgcolor: 'black',
        border: '1px solid #fff',
        showcaption: true

    };

    /*-----------------------------------*/

    $('nav ul li a').click(function () {
        event.preventDefault();
        $('nav ul li a').removeClass('under_link');
        $(this).addClass('under_link');
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 800);
    });

    $(window).scroll(function () {

        /*Меню*/
        var top = $(document).scrollTop();
        if (top < 180) {
            $('.nav').removeClass('nav_fixed');
            $('nav ul li a').removeClass('topA');
            $('.rast').hide();
            $('nav ul li').animate({
                paddingTop: "30px",
                paddingBottom: "30px"

            }, 50);
        } else {
            $('.nav').addClass('nav_fixed');
            $('.rast').show();
            $('nav ul li').animate({
                paddingTop: "20px",
                paddingBottom: "20px"

            }, 50);
            $('nav ul li a').addClass('topA');
        }
        /*Анимации*/
        var delay = 0;
        function animated(element,animation,del,delay){
            var imagePos = element.offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+600) {
                if(del == "yes"){
                    setTimeout(function(){
                        element.addClass(animation);
                        element.addClass("animated");
                        element.css("visibility", "visible");
                    },500-delay);
                }else{
                    element.addClass(animation);
                    element.addClass("animated");
                    element.css("visibility", "visible");
                }
            }
        }

        $('.preem_left li').each(function () {
            var el = $(this);
            animated(el,"fadeInLeft");
        });

        $('.preem_right li').each(function () {
            var el = $(this);
            animated(el,"fadeInRight");
        });

        $('.b_f').each(function (index) {
            var el = $(this);
            if(index == 0){
                delay = 200;
            }
            if(index == 1){
                delay = 300;
            }
            if(index == 2){
                delay = 500;
            }
            animated(el,"slideInLeft","yes",delay);
        });

        $('.block_rabota_item').each(function (index) {
            var el = $(this);
            if(index == 0){
                delay = 200;
            }
            if(index == 1){
                delay = 300;
            }
            if(index == 2){
                delay = 400;
            }
            if(index == 3){
                delay = 500;
            }
            animated(el,"slideInLeft","yes",delay);

        });

        $('.pos_1 .details_content').each(function () {
            var el = $(this);
            animated(el,"slideInRight");
        });

        $('.pos_1 .o_img').each(function () {
            var el = $(this);
            animated(el,"slideInLeft");
        });

        $('.pos_2 .details_content').each(function () {
            var el = $(this);
            animated(el,"slideInLeft");
        });

        $('.pos_2 .o_img').each(function () {
            var el = $(this);
            animated(el,"slideInRight");
        });

        $('.heroes_block').each(function () {
            var el = $(this);
            animated(el,"slideInLeft");
        });
        $('.programma_item').each(function () {
            var el = $(this);
            animated(el,"pulse");
        });
    });

    /*Программы для подростков и детей*/
    $(".ic_container").capslide({
        caption_color: '#fff',
        caption_bgcolor: 'rgba(232, 101, 99, 0.92)',
        border: false
    });

    /*Показать подробнее*/

    $(".none_programma").css('display', 'none');
    $(".none_programma_d").css('display', 'none');

    $('.prosmotr_vse').click(function (event) {
        event.preventDefault();
        $(".none_programma").css('display', 'block');
        $(this).hide();
    });

    $('.deti').click(function (event) {
        event.preventDefault();
        $(".none_programma_d").css('display', 'block');
        $(this).hide();
    });

    /*Паралакс*/
    $('.parallax-window').parallax({
        positionY: "top",
        naturalWidth: '100%'
    });

    /*Слайдер*/
    var owl = $("#owl-demo");
    owl.owlCarousel({

        items: 4,
        navigation: true,
        pagination: true,
        navigationText: ['', '']

    });
    var heim = 0;



})(jQuery);





