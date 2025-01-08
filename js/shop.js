// Small Device Search Button Starts
$(document).ready(function () {
  $('#searchSmallIcon').click(function () {
    $(".smallSearch").addClass('active');
  }); $('.closebtn').click(function () {
    $(".smallSearch").removeClass('active')
  });