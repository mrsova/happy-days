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

    /*Программы для подростков и детей*/
    $(".ic_container").capslide({
        caption_color: '#fff',
        caption_bgcolor: 'rgba(232, 101, 99, 0.92)',
        border: false
    });

    /*--------------------------------------*/
    $('button[data-reveal-id]').on('click', function(event) {
        event.preventDefault();
        var model_left = $(".reveal-modal .dm-cell").innerWidth();
        $(".reveal-modal .dm-cell").css({"margin-left":-model_left/2});
        var modalLocation = $(this).attr('data-reveal-id');
        $('#'+modalLocation).reveal($(this).data());
    });
    $.fn.reveal = function(options) {
        var defaults = {
            animation: 'fadeAndPop', //fade, fadeAndPop, none
            animationspeed: 300, //how fast animtions are
            closeonbackgroundclick: true, //if you click background will modal close?
            dismissmodalclass: 'close-reveal-modal' //the class of a button or element that will close an open modal
        };

        var options = $.extend({}, defaults, options);

        return this.each(function() {
            var modal = $(this),
                topMeasure  = parseInt(modal.css('top')),
                topOffset = topMeasure - $('.dm-cell').height()/2,
                locked = false,
                modalBG = $('.reveal-modal-bg');
            if(modalBG.length == 0) {
                modalBG = $('<div class="reveal-modal-bg" />').insertAfter(modal);
            }
            //Entrance Animations
            modal.bind('reveal:open', function () {
                modalBG.unbind('click.modalEvent');
                $('.' + options.dismissmodalclass).unbind('click.modalEvent');
                if(!locked) {
                    lockModal();
                    if(options.animation == "fadeAndPop") {
                        modal.css({'top': $(document).scrollTop()-topOffset, 'opacity' : 0, 'visibility' : 'visible'});
                        modalBG.fadeIn(options.animationspeed/2);
                        modal.delay(options.animationspeed/2).animate({
                            "top": $(document).scrollTop()+topOffset + 'px',
                            "opacity" : 1
                        }, options.animationspeed,unlockModal());

                        $(window).resize(function() {
                            scroll = $(document).scrollTop();
                            height= $(window).height()/2.8;
                            modal.css({
                                top: scroll + height +'px'
                            });
                            return false;
                        });
                    }
                    if(options.animation == "fade") {
                        modal.css({'opacity' : 0, 'visibility' : 'visible', 'top': $(document).scrollTop()+topMeasure});
                        modalBG.fadeIn(options.animationspeed/2);
                        modal.delay(options.animationspeed/2).animate({
                            "opacity" : 1
                        }, options.animationspeed,unlockModal());
                    }
                    if(options.animation == "none") {
                        modal.css({'visibility' : 'visible', 'top':$(document).scrollTop()+topMeasure});
                        modalBG.css({"display":"block"});
                        unlockModal()
                    }

                }
                modal.unbind('reveal:open');
            });
            modal.bind('reveal:close', function () {
                if(!locked) {
                    lockModal();
                    if(options.animation == "fadeAndPop") {
                        modalBG.delay(options.animationspeed).fadeOut(options.animationspeed);
                        modal.animate({
                            "top":  $(document).scrollTop()-topOffset + 'px',
                            "opacity" : 0
                        }, options.animationspeed/2, function() {
                            modal.css({'top':topMeasure, 'opacity' : 1, 'visibility' : 'hidden'});
                            unlockModal();
                        });
                        $('.reveal-modal').css({'top':'50%'})
                    }
                    if(options.animation == "fade") {
                        modalBG.delay(options.animationspeed).fadeOut(options.animationspeed);
                        modal.animate({
                            "opacity" : 0
                        }, options.animationspeed, function() {
                            modal.css({'opacity' : 1, 'visibility' : 'hidden', 'top' : topMeasure});
                            unlockModal();
                        });
                    }
                    if(options.animation == "none") {
                        modal.css({'visibility' : 'hidden', 'top' : topMeasure});
                        modalBG.css({'display' : 'none'});
                    }
                }
                modal.unbind('reveal:close');
            });
            modal.trigger('reveal:open')
            var closeButton = $('.' + options.dismissmodalclass).bind('click.modalEvent', function () {
                modal.trigger('reveal:close')
            });
            if(options.closeonbackgroundclick) {
                modalBG.css({"cursor":"pointer"})
                modalBG.bind('click.modalEvent', function () {
                    modal.trigger('reveal:close')
                });
            }
            $('body').keyup(function(e) {
                if(e.which===27){ modal.trigger('reveal:close'); } // 27 is the keycode for the Escape key
            });

            function unlockModal() {
                locked = false;
            }
            function lockModal() {
                locked = true;
            }

        });//each call
    }//orbit plugin call

    /*Обработка первой формы*/
   /* function ajaxFormOne() {
        var dataform = $("#ras_price").serialize();
        dataform = dataform;
        $.ajax({
            type: "POST",
            url: "send.php",
            cache: false,
            data: dataform,
            success: function (data) {
                var resultform = $.parseJSON(data);
                if (resultform.status == 'yes') {
                    $("#ras_price").html('<div class="yes_form">Ваш запрос успешно<br>отправлен!</h3>');
                    setTimeout(function(){
                        $('.close-reveal-modal').click();
                    }, 1000);
                }else if (resultform.status == 'error') {
                    $("#ras_price input").removeAttr('style');
                    $('#ras_price input').each(function(){
                        if($(this).val() == ''){
                            $(this).stop()
                                .animate({ left: "-5px" }, 70).animate({ left: "5px" }, 70)
                                .animate({ left: "-5px" }, 70).animate({ left: "5px" }, 70)
                                .animate({ left: "0px" }, 70)
                                .css('border-color', '#ff8b2e');

                        }
                    });
                    $("#ras_price .form_info").addClass("form_error").text("Поле обязательно к заполнению!");
                }
            }
        });
    }


    $("#submit_one").click(function (event) {
        event.preventDefault();
        ajaxFormOne();
    });*/

    /*---------------------------------------*/



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

    /*Слайдер*/
    var owl = $("#owl-demo");
    owl.owlCarousel({

        items: 4,
        navigation: true,
        pagination: true,
        navigationText: ['', '']

    });





})(jQuery);






