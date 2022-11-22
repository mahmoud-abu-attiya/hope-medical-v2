// CUstom Page Scroll
$(function() {
    var totalMenuHeight = parseInt($(".sticky-header").innerHeight());
    // var totalMenuHeight = 250;
    // console.log(totalMenuHeight);
    // totalMenuHeight = totalMenuHeight + 150;
    $('a[href*=\\#]:not([href=\\#])').on('click', function() {
        var excludedItems = [];
        var clickeOn = $(this).attr('href').trim();
        if ($.inArray(clickeOn, excludedItems) == -1) {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                var onScrollTop = target.offset().top - (totalMenuHeight);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: onScrollTop
                            // scrollTop: onScrollTop.top - ($('html,body').offset().top - $('html,body').scrollTop())
                    }, 1000);
                    return false;
                }
            }
        }
    });
    // if (window.location.hash) {
    //     //     // Fragment exists
    //     var $target = $(window.location.hash);
    //     $target
    //     var onLoadTop = $target.offset().top - (totalMenuHeight);
    //     $('html,body').animate({
    //         scrollTop: onLoadTop
    //     }, 1000);
    // } else {
    //     // Fragment doesn't exist
    // }
});

$(document).ready(function() {

    $('.home-banner-slider').slick({
        // rtl: true,

        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        // arrows: true,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: $('.home-banner-custom-slick-prev'),
        nextArrow: $('.home-banner-custom-slick-next')
    });

    // $('.home-service-slider').slick({
    // 	slidesToShow: 2,
    // 	slidesToScroll: 1,
    // 	dots: true,
    // 	infinite: true,
    // 	arrows: false,
    // 	autoplay: true,
    // 	autoplaySpeed: 2000
    // });

    $('.testimonial-slider').slick({
        // rtl: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        // responsive: [
        // 	{
        // 		breakpoint: 992,
        // 		settings: {
        // 			slidesToShow: 3
        // 		}
        // 	},
        // 	{
        // 		breakpoint: 768,
        // 		settings: {
        // 			slidesToShow: 2
        // 		}
        // 	},
        // 	{
        // 		breakpoint: 540,
        // 		settings: {
        // 			slidesToShow: 1
        // 		}
        // 	}
        // ]
    });

    // Scripts for slide menu
    $('#hamburgerIcon').on('click', function() {
        $('.side-menu-wrap').addClass('sidemenu-opened');
    });
    $('.menu-close-btn').on('click', function() {
        $('.side-menu-wrap').removeClass('sidemenu-opened');
    });



    $("#resetApointmentForm").click(function() {
        $("#appointmentForm").trigger("reset");
    });

    $("#lightgallery").lightGallery();




});