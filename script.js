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








    //Test

    var t = $(".file-input");
    Array.prototype.forEach.call(t, function (e) {
        e.addEventListener("change", function (e) {
            t = this.files;
            if (this.files.length > 1) {
                $(".file-result").text(this.files.length + " files");
            } else {
                $(".file-result").text(e.target.value.split("\\").pop());
            }
        })
    })

    //Test End

});



$(window).on('load', function () {
    setTimeout(function () {
        $('.preloader').addClass('active');
        $('body').css('overflow', 'visible');
    }, 1500)

})