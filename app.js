'use strict';
/*---------------------Portfolio of projects swipe left or right---------------*/

var slideCounter = 1;
showSlides(slideCounter);

function nextSlide(n){
  showSlides(slideCounter += n);
}
function currentSlide(n) {
  showSlides(slideCounter = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName('mySlides');
  var dot = document.getElementsByClassName('dot');
  if(n > slides.length) {slideCounter = 1; }
  if (n > 1) {slideCounter = slides.length;}
  for ( i = 0; i < slides.length; i++){
    slides[i].style.display = 'none';
  }
  for ( i = 0; i < dot.length; i++){
    dot[i].className - dot[i].className.replace('active', '');
  }
  slides[slideCounter - 1]style.display = 'block';
  dot[slideCounter - 1].className += 'active';
}
showSlides();
currentSlide();
nextSlide();
/*---------------------images of Hobbies and interest on vertical rolling carousel---------------*/

//
// function hobbynInterests(filename){
//   this.filename = filename;
//
// }
