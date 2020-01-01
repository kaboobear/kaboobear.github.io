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









    //Test


    var swiper2 = new Swiper('.swiper-table', {
        direction: 'horizontal',
        slidesPerView: 1,
        allowTouchMove: false,
        speed: 1000,

        breakpoints: {
            700: {
                slidesPerView: 2,
            },

            992: {
                slidesPerView: 3,
            },
            1199: {
                slidesPerView: 4
            }
        },

        navigation: {
            nextEl: '.next-table',
            prevEl: '.prev-table',
        },

    })



    for (var x = 1; x < 10; x++) {
        $('.table-section .row' + x).matchHeight();
    }

    //Test End


})



$(window).on('load', function () {
    setTimeout(function () {
        $('.preloader').addClass('active');
        $('body').css('overflow', 'visible');
    }, 1500)

})