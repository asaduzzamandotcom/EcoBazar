// Small Device Search Button Starts
$(document).ready(function () {
  $('#searchSmallIcon').click(function () {
    $(".smallSearch").addClass('active');
  }); $('.closebtn').click(function () {
    $(".smallSearch").removeClass('active')
  });
  // Banner Slider starts Here
  $('.bannerSlider').slick({
    autoplay: false,
    autoplaySpeed: 2000,
    prevArrow: '#prevArrow',
    nextArrow: '#nextArrow',
    dots: true,
    dotsClass: 'bannerDots',
  });
});
// Small Device Search Button Ends

// mixItUp Common js Starts 
var mixer = mixitup('.filter');
