window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.remove('fade-out');
});

//Validation function
function validateForm() {
    let x = document.forms["form-container"]["Name", "Phone#", "Email", "Message"].value;
    if (x == "") {
        alert("All fields need to be filled out");
        return false;
    }
}

function openForm() {
    document.getElementById("popForm").style.display = "block";
}

function closeForm() {
    document.getElementById("popForm").style.display = "none";
}

// This function displays the first image in the slideshow when the page loads
var slideIndex = 1;
showSlides(slideIndex);

// This function changes the slide when the left or right arrows are clicked
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// This function changes the slide when the dots are clicked
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// This function controls the Slideshow
function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides"); 
    var dots = document.getElementsByClassName("dot"); 
    if (n > slides.length) {slideIndex = 1}; 
    if (n < 1) {slideIndex = slides.length}; 
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); 
    }
    slides[slideIndex - 1].style.display = "block"; 
    dots[slideIndex - 1].className += " active"; 
}

//add an event listener for any clicks on the website
document.addEventListener("click", function(event){
    if (event.target.matches(".btn-close") || !event.target.closest(".form-popup") && !event.target.closest(".open-button") && !event.target.closest(".contact")
    
    ){
        closeForm()
    }
}, false )