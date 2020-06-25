$(document).ready(function(){
    //mobile-menu
    $('#mobile-menu-active').meanmenu({
    
        meanScreenWidth: "767",
        meanMenuContainer: '.mobile-menu'
    
      });


    //sticky-menu
    $(window).on('scroll',function() {    
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
         $("header").addClass("sticky-menu");
        }else{
         $("header").removeClass("sticky-menu");
        }
    });

    //slider-area
    $(".slider-active").owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:true,
        autoplay: true,
        autoplaySpeed: 800,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    //fav-slider
    $(".fav-active").owlCarousel({
        loop:false,
        autoplay: true,
        autoplaySpeed: 800,
        margin:10,
        loop:true,
        nav:false,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
    //review-slider
    $(".review-active").owlCarousel({
        loop:false,
        margin:10,
        nav:false,
        dots:true,
        autoplay: true,
        autoplaySpeed: 800,
        loop:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    FlexMasonry.init('.grid', {
        responsive: true,
        numCols: 3,
        breakpointCols: {
            'min-width: 1200px': 5,
            'min-width: 992px': 4,
            'min-width: 768px': 3,
            'min-width: 576px': 2,
        },
        
    });

    
})
