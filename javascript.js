let slideIndex = 1;
showSlides (slideIndex);
function plusSlides(n) {
  showSlides (slideIndex += n);
}
function currentSlide(n) {
  showSlides (slideIndex = n);
}
function showSlides(n) {
let i;
let slides = document.getElementsByClassName("mySlides"); let dots = document.getElementsByClassName("dot");
if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
for (i=0; i < slides.length; i++) {
slides[i].style.display = "none";
}
for (i=0; i < dots.length; i++) {
dots[i].className = dots [i].className.replace(" active","");
}
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " active";
}
script2 {
  let acc = document.getElementsByClassName("accordion");
  for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
          this.classList.toggle("active");
          let panel = this.nextElementSibling;
          if (panel.style.display === "block") {
              panel.style.display = "none";
          } else {
              panel.style.display = "block";
          }
      });
  }
}
