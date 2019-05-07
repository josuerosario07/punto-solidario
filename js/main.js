$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items: 3,
        autoplay:false,
        autoplayTimeout:2000,
         autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
    
    // $(".escribir").click(function(){
    //     $(".contac-form").slideToggle();
    //   });
  });

  $(function() {
    var header = $("#header");
    $(window).scroll(function() {    
        var windowWidth =  $(window).width();
        
        var scroll = $(window).scrollTop();
        if(windowWidth > 991)
        {
            if (scroll >= 200) {
                header.removeClass('punto-solidario-normal').addClass("punto-solidario-plus");
            } else {
                header.removeClass("punto-solidario-plus").addClass('punto-solidario-normal');
            }
        }

    });
});