$(document).ready(function () {

    // Match Height
    // $('.item-img img').matchHeight();



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
            $('.item').css('display', 'none');
            $('.item').each(function () {
                if ($(this).hasClass(category)) $(this).css('display', 'inline-block');
            })
        } else {
            $('.item').fadeIn(300);
        }
    })



    //Search Filter
    $('.main-search').on('keyup', function () {
        $('.items-section .item').fadeOut(0);
        $('.item-wrap').fadeOut(0);

        $('.categories li').removeClass('active');
        $('.categories li').eq(0).addClass('active');

        if ($('.main-search').val() !== '') {
            var results = fuse.search($('.main-search').val());

            if (results != '') {
                $('.empty-message').fadeOut(0).removeClass('active');

                if ($('.snippets-section').length == 0) {
                    $('.item').each(function () {
                        for (var x = 0; x < results.length; x++) {
                            if (results[x] == $(this).children('.glob-title').text().trim()) {
                                $(this).fadeIn(0);
                            }
                        }
                    })
                } else {
                    $('.item-wrap').each(function () {
                        for (var y = 0; y < results.length; y++) {
                            if (results[y] == $(this).find('.glob-title').text().trim()) {
                                $(this).fadeIn(0);
                            }
                        }
                    })
                }
            } else {
                $('.empty-message').fadeIn(0).addClass('active');
            }
        } else {
            $('.empty-message').fadeOut(0).removeClass('active');
            $('.items-section .item').fadeIn(0);
            $('.item-wrap').fadeIn(0);
        }

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
            $('.ham-nav').slideUp();
            $(this).removeClass('active');
        } else {
            $('.ham-nav').slideDown();
            $(this).addClass('active');
        }
    })

    $(document).mouseup(function (e) {
        var div = $(".ham-btn");
        var div2 = $(".ham-nav");

        if (!div.is(e.target) && div.has(e.target).length === 0 && !div2.is(e.target) && div2.has(e.target).length === 0) {
            div.removeClass('active');
            div2.slideUp();
        }
    });








    //Name input
    $(".card-name-btn").click(function () {
        if ($(this).hasClass('active')) {
            $('.glob-title .simple-input').fadeOut();
            $(this).removeClass('active');
        } else {
            $('.glob-title .simple-input').fadeIn();
            $(this).addClass('active');
        }
    })





    //Generate card code
    $(".extra-name-input").keyup(function () {
        var cardName = $(this).val();

        var cssString = `.${cardName}-items{ 
            display: flex;
            flex-wrap: wrap;
            margin: -15px;
        }
        
        .${cardName}-item-wrap{
            width: calc(100%/3);
            padding: 15px;
        }
        
        .${cardName}-item{
            background: none;
            border:none;
            padding: 0;
            border-radius: 0;
            margin-bottom: 0;
            width: 100%;
            height: 100%;
        }
        
        .${cardName}-item-img img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        
        .${cardName}-item-info{
            padding: 20px;
            display: flex;
            flex-direction: column;
        }
        
        .${cardName}-item-title{
        
        }
        
        .${cardName}-item-text{
        
        }`

        var htmlString = `<div class="${cardName}-items">
        <div class="${cardName}-item-wrap">
            <div class="${cardName}-item">
                <div class="${cardName}-item-img">
                    <img src="img/test-wide.jpg" alt="">
                </div>
    
                <div class="${cardName}-item-info">
                    <div class="${cardName}-item-title">
                        Title text
                    </div>
    
                    <div class="${cardName}-item-text">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores provident impedit
                        perspiciatis expedita beatae.
                    </div>
                </div>
            </div>
        </div>
    </div>`

        var jsString = `$('.${cardName}-item-img img').matchHeight();`

        $('.css-copy-text').val(cssString);
        $('.js-copy-text').val(jsString);
        $('.html-copy-text').val(htmlString);
    })









    //Test

    

    //Test End

});



$(window).on('load', function () {
    setTimeout(function () {
        $('.preloader').addClass('active');
        $('body').css('overflow', 'visible');
        setTimeout(function () {
            $('.preloader').css('display', 'none');
        }, 700)
    }, 0)
})