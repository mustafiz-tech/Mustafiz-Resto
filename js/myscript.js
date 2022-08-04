


$('.slider-main').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    dots:true,
    arrows:true,
    fade:true,
    prevArrow: '<i class="fa  fa-arrow-left left-arrows">',
    nextArrow: '<i class="fa  fa-arrow-right right-arrows">',
});

$(function(){
    $('.nav-button').click(function(){
        $('ul').slideToggle(200)
    })
})

$(document).scroll(function(){
    if ($(document).scrollTop() > 100){
     $('nav').addClass('navScroll');
    }
    else{
        $('nav').removeClass('navScroll')
    }
})