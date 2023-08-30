let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.left = "0";
    setTimeout(hideSlides, 800);
}

function hideSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    for (i = 0; i < slides.length; i++) {
        if (i !== slideIndex - 1) {
            slides[i].style.left = "110vw";
        }
    }
    setTimeout(showSlides, 5000);
}