let slideIndex_gameplay_RnD = 1;
showSlides_gameplay_RnD(slideIndex_gameplay_RnD);

function plusSlides_gameplay_RnD(n) {
  showSlides_gameplay_RnD(slideIndex_gameplay_RnD += n);
}

function showSlides_gameplay_RnD(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides_gameplay_RnD");
  if (n > slides.length) {slideIndex_gameplay_RnD = 1}    
  if (n < 1) {slideIndex_gameplay_RnD = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex_gameplay_RnD-1].style.display = "block";  
}

