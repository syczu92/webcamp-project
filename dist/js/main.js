$(window).resize(function() {
  if( $( window ).width()>768){
    $('.footer-menu__list').toggle(true);
    
  } else {
    $('.footer-menu__list').toggle(false);
    $('.footer-menu__heading').click(function() {
        $(this).next().toggle();
      });
  }
});

$('.labels-slider').slick({
  dots: false,
  infinite: true,
  autoplay: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
});

$('.social-media__slider').slick({
  dots: false,
  infinite: true,
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.product-slider__list').slick({
  dots: false,
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 1,
        arrows: false,
      }
    }
  ]
});