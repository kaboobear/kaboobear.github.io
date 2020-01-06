$(document).ready(function () {

    // Match Height
    // $('').matchHeight();



    // Animation
    // new WOW().init();



    // $(".smooth").on('click', function () {
    //     var elementClick = $(this).attr("href");
    //     var destination = $(elementClick).offset().top;
    //     jQuery("html:not(:animated),body:not(:animated)").animate({
    //         scrollTop: destination
    //     }, 800);
    //     return false;
    // });







    $(".copy-btn").click(function () {
        if (!$(this).hasClass('active')) {
            var elem = $(this);
            elem.prev().CopyToClipboard();
            elem.addClass('rubberBand animated');

            setTimeout(function () {
                elem.removeClass('rubberBand animated');
            }, 500);

            $(this).addClass("active");

            if ($(this).parent().parent().children('.copy-element').length === $(this).parent().parent().children('.copy-element').children('.active').length) {
                $(this).parent().parent().addClass('active');
                $(this).parent().parent().parent().children('.glob-title').addClass('active')
            }
        }

    })





    //Site Tabs
    $('.site-tabs-buttons').on('click', 'li:not(.active)', function () {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .parent().next('.site-tabs-items').find('.site-tabs-item').fadeOut(0).removeClass('active').eq($(this).index()).fadeIn(500).addClass('active');
    });



    // To Top
    $(window).on('scroll', function () {
        if ($(document).scrollTop() > 300) {
            $('.to-top').addClass('active');
        } else {
            $('.to-top').removeClass('active');
        }
    })

    if ($(document).scrollTop() > 300) {
        $('.to-top').addClass('active');
    } else {
        $('.to-top').removeClass('active');
    }


    $('.to-top').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, '300');
    })


    //Smooth Wheel
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (!isMobile) {
        luxy.init({
            wrapper: '.wrapper',
            wrapperSpeed: 0.1
        });
    }



    //Categories Filter
    $('.categories li').click(function () {
        $('.categories li').removeClass('active');
        $(this).addClass('active');

        var category = $(this).text().toLowerCase() + '-category'

        if (category != 'all-category') {
            $('.item').css('display','none');
            $('.item').each(function () {
                if ($(this).hasClass(category)) $(this).css('display','inline-block');
            })
        } else {
            $('.item').fadeIn(300);
        }
    })



    //Search Filter
    var typingTimer; 
    var doneTypingInterval = 150;
    $('.main-search').on('keyup', function () {
        clearTimeout(typingTimer);
        typingTimer = setTimeout(function(){
            $('.item').fadeOut(300);
            $('.categories li').removeClass('active');
            $('.categories li').eq(0).addClass('active');

            if ($('.main-search').val() !== '') {
                var results = fuse.search($('.main-search').val());

                if (results != '') {
                    $('.empty-message').fadeOut().removeClass('active');

                    $('.item').each(function () {
                        for (var x = 0; x < results.length; x++) {
                            if (results[x] == $(this).children('.glob-title').text().trim()) {
                                $(this).fadeIn(200);
                            }
                        }
                    })
                } else {
                    $('.empty-message').fadeIn().addClass('active');
                }
            } else {
                $('.item').fadeIn(300);
            }

        }, doneTypingInterval);
    });

    $('.main-search').on('keydown', function () {
        clearTimeout(typingTimer);
    });

    var i = 0;
    var arr = [];
    $('.item').each(function () {
        arr[i++] = {
            'title': $(this).children('.glob-title').text().trim()
        };
    })

    var options = {
        keys: ['title'],
        id: 'title',
        tokenize: true,
        matchAllTokens: true,
        findAllMatches: true,
        threshold: .1,
    }
    var fuse = new Fuse(arr, options)




    //Nav
    $(".ham-btn").click(function () {
        if ($(this).hasClass('active')) {
            $('.ham-nav').fadeOut();
            $(this).removeClass('active');
        } else {
            $('.ham-nav').fadeIn();
            $(this).addClass('active');
        }
    })

    $(document).mouseup(function (e) {
        var div = $(".ham-btn");
        var div2 = $(".ham-nav");

        if (!div.is(e.target) && div.has(e.target).length === 0 && !div2.is(e.target) && div2.has(e.target).length === 0) {
            div.removeClass('active');
            div2.fadeOut();
        }
    });






    //Test



    //Test End

});



$(window).on('load', function () {
    setTimeout(function () {
        $('.preloader').addClass('active');
        $('body').css('overflow', 'visible');
    }, 1500)

})