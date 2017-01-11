'use strict'

$(document).ready(function(){
  $('#clicker').click(function(event){
    event.preventDefault();
    $('body').fadeOut(500, redirect);
  });
  function redirect() {
    $(location).attr('href', 'index.html');
  }
});

// $('.imageClicker').click(function(event){
//   event.preventDefault();
//   $('a').open('href');
//
// });
