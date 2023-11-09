$(function(){

    $('.slick_slider').slick({
        arrows:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow:'<i class="fa fa-chevron-left prev"</i>',
        nextArrow:'<i class="fa fa-chevron-right next"</i>',
      });
    //  Stykey Header Start
   $(window).scroll(function(){
    var scrolling = $(this).scrollTop();

    if(scrolling > 200){
        $('.navbar').addClass('bg');
    }
    else {
         $('.navbar').removeClass('bg');
    }
    });
    //  Stykey Header End

      $('.about_item_slider').slick({
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots:true,
        
      });

      $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    $('.slick_item').slick({
      arrows:true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots:true,
      prevArrow:'<i class="fa fa-chevron-left prev2"</i>',
      nextArrow:'<i class="fa fa-chevron-right next2"</i>',
      responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
      ]
      
    });
    $('.test_slider').slick({
      arrows:true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      // dots:true,
      prevArrow:'<i class="fa fa-chevron-left prev3"</i>',
      nextArrow:'<i class="fa fa-chevron-right next3"</i>',
      
    });

});