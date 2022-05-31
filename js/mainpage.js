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

//retreiving user id from local storage
let id = window.localStorage.getItem("id");
console.log(id);
//if the user is logged in 
if (id!==null && id!=="logged out"){
  console.log("user logged in");
  let signup_text = document.getElementById("signin");
  let signin_text = document.getElementById("signup");
  console.log(signin_text);
  console.log(signup_text);

  signup_text.classList.add('hide');
  signin_text.classList.add('hide');
  

  let image = document.getElementById("profile_image");
  console.log(image);
  image.classList.remove("hide");
  let mobile_item = document.querySelector(".mobile-only");
  console.log(mobile_item);
  mobile_item.classList.remove("hide");
}

else{
  //hide profile and Logout 
  let image = document.getElementById("profile_image");
  console.log(image);
  image.classList.add("hide");
  let mobile_item = document.querySelector(".mobile-only");
  console.log(mobile_item);
  mobile_item.classList.add("hide"); 

}


})
