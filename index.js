var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slider")[0].getElementsByTagName("img");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

document.getElementsByClassName("prev")[0].addEventListener("click", function() {
  plusSlides(-1);
});

document.getElementsByClassName("next")[0].addEventListener("click", function() {
  plusSlides(1);
});

function plusSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slider")[0].getElementsByTagName("img");
  slideIndex += n;
  if (slideIndex > slides.length) {slideIndex = 1}
  if (slideIndex < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
