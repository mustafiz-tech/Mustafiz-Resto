


$('.slider-main').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    dots:true,
    arrows:true,
    fade:true,
    prevArrow: '<i class="fa  fa-left-right left-arrows">',
    nextArrow: '<i class="fa  fa-arrow-right right-arrows">',
});

$(function(){
    $('.nav-button').click(function(){
        $('ul').slideToggle(200)
    })
})

