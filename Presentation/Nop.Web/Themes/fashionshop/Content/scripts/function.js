//jQuery to collapse the navbar on scroll
$(document).ready(function () {
    var sticky = $('.masthead').offset().top + ($('.masthead').height());		
    $(window).scroll(function(){
        if($(this).scrollTop()>sticky){
            $('.masthead').addClass('sticky');           
        }
        else{
            $('.masthead').removeClass('sticky'); 
        }
    })
    var Menusticky = $('.headerlinks').offset().top;
    $(window).scroll(function () {
        if ($(this).scrollTop() > Menusticky) {
            $('header').addClass('fixed');
        }
        else {
            $('header').removeClass('fixed');
        }
    })
    $('.scrollup').fadeOut();
    $(window).scroll(function () {        
        if ($(this).scrollTop() > 50) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });
    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
    $(".searchbtn").click(function () {
        $(".search-box").toggleClass("search-display");
    });
    $('footer h3').click(function () {
      $('.showHide-ft').slideUp();
      $(this).next('.showHide-ft').slideToggle();
    });
    $('.side-nav h3').click(function () {
       // $('.showHide-ft').slideUp();
        $(this).parents('.side-nav').find('.showHide-ft').slideToggle();
    });
})
$(document).ready(function () {
    $('.manufactures .carousel .carousel-item:first-child').addClass('active');
    $('.manufactures #myCarousel').carousel({
        interval: 5000, pause: 'hover', wrap: true
    });
    $('.manufactures .carousel .carousel-item').each(function () {
        var next = $(this);
        var last;
        for (var i = 0; i < 5; i++) {
            next = next.next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }
            last = next.children(':first-child').clone().appendTo($(this));
        }
        last.addClass('rightest');
    });
});