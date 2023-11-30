let slideIndex_gameplay = 1;
  showSlides_gameplay(slideIndex_gameplay);

function plusSlides_gameplay(n) {
  showSlides_gameplay(slideIndex_gameplay += n);
}

function showSlides_gameplay(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides_gameplay");
  if (n > slides.length) {slideIndex_gameplay = 1}    
  if (n < 1) {slideIndex_gameplay = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex_gameplay-1].style.display = "block";  
}

