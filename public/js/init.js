(function($){
  $(function(){

    $('.button-collapse').sideNav();

    $('.navbar-fixed').hide();
    $('.hidden').hide();

    $(window).scroll(function() {
      if ($(document).scrollTop() > 80) {
        $('.teste').addClass('navbar-fixed');
        $('.hidden').fadeIn();
      } else {
        $('.teste').removeClass('navbar-fixed');
        $('.hidden').fadeOut('fast');
      }
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space
