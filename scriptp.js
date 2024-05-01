// JavaScript for slideshow functionality
var slideIndex = 1;
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
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
// JavaScript for slideshow functionality
var currentSlideIndex = 0; // Changed variable name for clarity
showSlide(currentSlideIndex); // Changed function name for clarity

// Next/previous controls
function changeSlide(offset) { // Changed function name for clarity
  currentSlideIndex += offset;
  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0; // Loop back to the first slide
  } else if (currentSlideIndex < 0) {
    currentSlideIndex = slides.length - 1; // Loop to the last slide
  }
  showSlide(currentSlideIndex);
}

// Thumbnail image controls
function setCurrentSlide(index) { // Changed function name for clarity
  currentSlideIndex = index;
  showSlide(currentSlideIndex);
}

function showSlide(index) { // Changed function name for clarity
  var slides = document.getElementsByClassName("mySlides");
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[index].style.display = "block";
}
