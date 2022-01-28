// Box Animation
$('.animate-1').mouseleave(function(){
    $(".animate-1").animate({
        'width': '20%',
        'height': '200px',
        'opacity':'1',
    },100)
    
    $('.animate-1').mouseover(function(){
        $('.animate-1').animate({
            'width': '20%',
            'height': '230px',
            'opacity':'0.8',
        })
    })
});
$('.animate-2').mouseleave(function(){
    $(".animate-2").animate({
        'width': '20%',
        'height': '200px',
        'opacity':'1',
    },100)
    
    $('.animate-2').mouseover(function(){
        $('.animate-2').animate({
            'width': '20%',
            'height': '230px',
            'opacity':'0.8',
        })
    })
});
$('.animate-3').mouseleave(function(){
    $(".animate-3").animate({
        'width': '20%',
        'height': '200px',
        'opacity':'1',
    },100)
    
    $('.animate-3').mouseover(function(){
        $('.animate-3').animate({
            'width': '20%',
            'height': '230px',
            'opacity':'0.8',
        });
    });
});
$('.animate-4').mouseleave(function(){
    $(".animate-4").animate({
        'width': '20%',
        'height': '200px',
        'opacity':'1',
    },100)
    
    $('.animate-4').mouseover(function(){
        $('.animate-4').animate({
            'width': '20%',
            'height': '230px',
            'opacity':'0.8',
        }); 
    });
});
// Title Animation
$(document).ready(function(){
    $('.title-container').show().animate({opacity:'1',},  3000);
    $('.title-container').fadein(1000);
})
// Box slide Animation
$(document).ready(function () {
    $(".box-2").show(function () {
        $('.box-2').animate({
            'opacity': '1',
            'top': '0px',
        },1000)
    });
});
//Scrolling Animation
$(window).scroll(function() {
    if ($(window).width() < 1600) {      
        if ($(document).scrollTop() > 100) {
            $('.main-section-1').animate({
                'opacity': '1',
                'left': '0px',
            },1000);
        }
     } 
    if ($(window).width() < 1600) {      
        if ($(document).scrollTop() > 150) {
            $('.main-section-2').animate({
                'opacity': '1',
                'left': '0px',
            },1000);
        }
     } 
    if ($(window).width() < 1600) {      
        if ($(document).scrollTop() > 1000) {
            $('.fade1').animate({
                'opacity': '1',
                'left': '0px',
            },1000);
        }
     } 
    if ($(window).width() < 1600) {      
        if ($(document).scrollTop() > 1000) {
            $('.fade2').animate({
                'opacity': '1',
                'left': '0px',
            },1000);
        }
     } 
    if ($(window).width() < 1600) {      
        if ($(document).scrollTop() > 1000) {
            $('.fade3').animate({
                'opacity': '1',
                'left': '0px',
            },1000);
        }
     } 
    if ($(window).width() < 1600) {      
        if ($(document).scrollTop() > 1000) {
            $('.fade4').animate({
                'opacity': '1',
                'left': '0px',
            },1000);
        }
     } 
    if ($(window).width() < 1600) {      
        if ($(document).scrollTop() > 1500) {
            $('.fade5').animate({
                'opacity': '1',
                'left': '0px',
            },1000);
        }
     } 
    if ($(window).width() < 1600) {      
        if ($(document).scrollTop() > 1500) {
            $('.fade6').animate({
                'opacity': '1',
                'left': '0px',
            },1000);
        }
     } 
    if ($(window).width() < 1600) {      
        if ($(document).scrollTop() > 2000) {
            $('.left-container').animate({
                'opacity': '1',
                'left': '0px',
            },1000);
        }
     } 
    if ($(window).width() < 1600) {      
        if ($(document).scrollTop() > 2000) {
            $('.right-container').animate({
                'opacity': '1',
                'left': '0px',
            },1000);
        }
     } 
 }); 
