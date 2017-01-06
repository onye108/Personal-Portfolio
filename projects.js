'use strict'

$(document).ready(function(){
  $('#clicker').click(function(event){
    event.preventDefault();
    $('body').fadeOut(2500, redirect);
  });
  function redirect() {
    $(location).attr('href', 'main.html');
  }
});

$('.imageClicker').click(function(event){
  event.preventDefault();
  $('a').open('href');

});
