(function($) {
    $.fn.capslide = function(options) {
        var opts = $.extend({}, $.fn.capslide.defaults, options);
        return this.each(function() {
            $this = $(this);
            var o = $.meta ? $.extend({}, opts, $this.data()) : opts;
            var _img = $this.find('img:first');
            var w = _img.width();
            var h = _img.height();
            var hei = $this.find('.ic_caption h3').innerHeight();
            var newh = h -hei;

            $this.find('.ic_text').css({'display':'none','height':newh});

            $('.ic_caption',$this).css({'color':o.caption_color,'background-color':o.caption_bgcolor,'bottom':'0px','width':w});

            $this.css({'width':w , 'height':h, 'border':o.border});
            $this.hover(
                function () {
                    if((navigator.appVersion).indexOf('MSIE 7.0') > 0)
                        $('.overlay',$(this)).show();
                    else
                        $('.overlay',$(this)).fadeIn();
                    if(!o.showcaption)
                        $(this).find('.ic_caption').slideDown(500);
                    else
                        $('.ic_text',$(this)).slideDown(500);
                },
                function () {
                    if((navigator.appVersion).indexOf('MSIE 7.0') > 0)
                        $('.overlay',$(this)).hide();
                    else
                        $('.overlay',$(this)).fadeOut();
                    if(!o.showcaption)
                        $(this).find('.ic_caption').slideUp(200);
                    else
                        $('.ic_text',$(this)).slideUp(200);
                }
            );
        });
    };
    $.fn.capslide.defaults = {
        caption_color	: 'white',
        caption_bgcolor	: 'black',
        border			: '1px solid #fff',
        showcaption	    : true

    };

/*-----------------------------------*/
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

    $(".ic_container").capslide({
        caption_color	: '#fff',
        caption_bgcolor	: 'rgba(232, 101, 99, 0.92)',
        border			: false
    });

    $(".none_programma").css('display','none');
    $(".none_programma_d").css('display','none');

    $('.prosmotr_vse').click(function(event){
        event.preventDefault();
        $(".none_programma").css('display','block');
        $(this).hide();
    });

    $('.deti').click(function(event){
        event.preventDefault();
        $(".none_programma_d").css('display','block');
        $(this).hide();
    });

    $('.parallax-window').parallax({
       positionY: "top"
    });


    var owl = $("#owl-demo");

    owl.owlCarousel({

        items : 4,
        navigation : true,
        pagination : true,
        navigationText:['','']

    });

})(jQuery);





