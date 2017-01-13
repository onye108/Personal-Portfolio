
$(document).ready(function(){
  $('#myNavbar a').on('click', function(){
    $('#myNavbar  li.current').removeClass('current');
    $(this).parent().addClass('current');
  })
  }
  $('h1#heading').text($(this).text());

});
