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
// mixItUp Common js Ends


// Set the date we're counting down to (20 days from now)
  const countDownDate = new Date();
  countDownDate.setDate(countDownDate.getDate() + 20);

  // Update the countdown every 1 second
  const countdownFunction = setInterval(function () {
    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the countdown date
    const distance = now - countDownDate;

    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    // Display the result in the elements with id="days", "hours", "minutes", and "seconds"
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;

    // If the countdown is over, display a message
    if (distance < 0) {
      clearInterval(countdownFunction);
      document.getElementById("countdown").innerHTML = "Offer has been expired";
    }
  }, 1000);