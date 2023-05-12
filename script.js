// Slideshow da página home

window.onload = function() {
    alert("Seja Bem-Vindo");
  };

var slideIndex = 1;

showSlides(slideIndex);




function plusSlides(n) {

showSlides(slideIndex += n);

}




function currentSlide(n) {

showSlides(slideIndex = n);

}




function showSlides(n) {

var i;

var slides = document.getElementsByClassName("home-slideshow")[0].getElementsByTagName("img");

var dots = document.getElementsByClassName("home-slideshow")[0].getElementsByTagName("span");

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




// Mudança de cor de fundo

var colorToggle = document.getElementById("color-toggle");




colorToggle.addEventListener("click", function() {

    var body = document.getElementsByTagName("body")[0];

    body.classList.toggle("light");

    body.classList.toggle("dark");

});
