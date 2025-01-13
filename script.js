function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

//show the email popup
document.getElementById("resume-btn").addEventListener("click",function(){
    document.getElementById("email-popup").classList.remove("hidden");
});

//Handle email submission
document.getElementById("submit-email").addEventListener("click",function(){
    const email = document.getElementById("email-input").value;
    if (email && validateEmail(email)) {
        alert(`Thank you! Your resume is being downloaded.`);
        document.getElementById("email-popup").classList.add("hidden");
        // Trigger file download (use an actual file URL here)
        window.location.href = "path-to-your-resume.pdf";
    } else {
        alert("Please enter a valid email address.");
    }
});

// Cancel the popup
document.getElementById("cancel-popup").addEventListener("click", function () {
    document.getElementById("email-popup").classList.add("hidden");
});

// Validate email function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
