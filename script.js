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

    ymaps.ready(init);

    function init() {
        var myMap = new ymaps.Map("map", {
                center: [55.964596, 37.912037],
                zoom: 19
            }),
            myGeoObject = new ymaps.GeoObject({
                // Описание геометрии.
                geometry: {
                    type: "Point",
                    coordinates: [55.964596, 37.912037]
                },
                properties: {
                    iconContent: '',
                    hintContent: ''
                }
            });


        myMap.geoObjects
            .add(myGeoObject)
            .add(new ymaps.Placemark([55.964596, 37.912037], {
                balloonContent: 'Custom Baloon'
            }, {
                // preset: 'islands#icon',
                // iconColor: '#f78888'
                iconLayout: 'default#imageWithContent',
                iconImageHref: 'img/ico.png', // картинка иконки
                iconImageSize: [39, 39], // размеры картинки
                iconImageOffset: [-6, -10], // смещение картинки
                balloonShadow: false,
                balloonLayout: MyBalloonLayout,
                balloonContentLayout: MyBalloonContentLayout,
                balloonPanelMaxMapArea: 0,
                hideIconOnBalloonOpen: false,
            }));


        myMap.behaviors.disable('scrollZoom');
    }

    //Test End

});



$(window).on('load', function () {
    setTimeout(function () {
        $('.preloader').addClass('active');
        $('body').css('overflow', 'visible');
    }, 1500)

})