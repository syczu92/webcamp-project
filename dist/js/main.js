$(window).resize(function() {
  if( $( window ).width()>768){
    $('.footer-menu__list').toggle(true);
    
  } else {
    $('.footer-menu__list').toggle(false);
    $('.footer-menu__header').click(function() {
        $(this).next().toggle();
      });
  }
});