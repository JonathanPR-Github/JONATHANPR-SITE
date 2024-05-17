let slideIndex_RnD = 1;
showSlides(slideIndex_RnD);

function plusSlides_RnD(n) {
  showSlides_RnD(slideIndex_RnD += n);
}

function currentSlide_RnD(n) {
  showSlides_RnD(slideIndex_RnD = n);
}

function showSlides_RnD(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides_RnD");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex_RnD = 1}
  if (n < 1) {slideIndex_RnD = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex_RnD-1].style.display = "flex";
  dots[slideIndex_RnD-1].className += " active";
  captionText.innerHTML = dots[slideIndex_RnD-1].alt;
}



