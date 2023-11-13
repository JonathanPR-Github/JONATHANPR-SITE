let slideIndex_video = 1;
showSlides(slideIndex_video);

function plusSlides(n) {
  showSlides(slideIndex_video += n);
}

function currentSlide(n) {
  showSlides(slideIndex_video = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides_video");
  let dots = document.getElementsByClassName("demo_video");
  let captionText = document.getElementById("caption_video");
  if (n > slides.length) {slideIndex_video = 1}
  if (n < 1) {slideIndex_video = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active_video", "");
  }
  slides[slideIndex_video-1].style.display = "block_video";
  dots[slideIndex_video-1].className += " active_video";
  captionText.innerHTML = dots[slideIndex_video -1].alt;
}



