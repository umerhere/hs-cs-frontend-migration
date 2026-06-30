$(document).ready(function () {
  var headerHeight = $('.header-main').outerHeight();
  $('body').css('margin-top', headerHeight);

  $('#mobileToggle').click(function () {
    $('#mobileMenu').slideToggle();
    $(this).toggleClass('active');
  });

});

$(window).on('resize', function () {
  var headerHeight = $('.header-main').outerHeight();
  $('body').css('margin-top', headerHeight);

  if ($(window).width() > 991) {
    $('#mobileMenu').hide();
    $('#mobileToggle').removeClass('active');
  }

});

