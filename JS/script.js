window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.remove('fade-out');
});

//Validation function
function validateForm () {
    let x = document.forms["contactForm"]["Name", "Phone#", "Email", "Message"].value;
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