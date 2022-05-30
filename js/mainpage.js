//javascript
document.addEventListener("DOMContentLoaded", function(){

//javasript for the carousel
document.getElementById("prev").addEventListener("click",function() {plusSlides(-1)});
document.getElementById("next").addEventListener("click",function() {plusSlides(1)});


document.getElementById("dot1").addEventListener("click",function() {currentSlide(1)});
document.getElementById("dot2").addEventListener("click",function() {currentSlide(2)});
document.getElementById("dot3").addEventListener("click",function() {currentSlide(3)});
document.getElementById("dot4").addEventListener("click",function() {currentSlide(4)});



let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


})
