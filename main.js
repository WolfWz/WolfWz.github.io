const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
// Slider
const next = $('.slider__container-next');
const prev = $('.slider__container-prev');
const mySlides = $$('.mySlides');

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    if (n > mySlides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = mySlides.length}
    for (i = 0; i < mySlides.length; i++) {
        mySlides[i].style.display = "none";  
    }
    mySlides[slideIndex-1].style.display = "block";
}

prev.onclick = function () {
    plusDivs(-1)
}

next.onclick = function () {
    plusDivs(1)
}

var myIndex = 0;
carousel();

function carousel() {
    var i;
    for (i = 0; i < mySlides.length; i++) {
        mySlides[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > mySlides.length) {
        myIndex = 1
    }    
    mySlides[myIndex-1].style.display = "block";  
    setTimeout(carousel, 5000); // Change image every 2 seconds
}

// Header visible
window.addEventListener("scroll", function() {
    var scroll_y = this.scrollY;
    if (scroll_y <= 120) {
        $('.header').style.background =
        "linear-gradient(to bottom, #023e8a, #00b4d8)";
    }
    else {
        $('.header').style.background =
        "linear-gradient(to bottom, rgba(2,62,138,0.8), rgba(0,180,216,0.8))";
    }
}); 