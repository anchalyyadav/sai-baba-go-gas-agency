// =======================================
// ABOUT PAGE JAVASCRIPT
// Sai Baba Go Gas
// =======================================


// ==========================
// Navbar Active Link
// ==========================

const navLinks = document.querySelectorAll(".navbar ul li a");

navLinks.forEach(link => {

    link.addEventListener("click", function () {

        navLinks.forEach(item => item.classList.remove("active"));

        this.classList.add("active");

    });

});


// ==========================
// Scroll Animation
// ==========================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.2

});


const hiddenElements = document.querySelectorAll(

    ".about-image, .about-content, .box, .mission-card"

);

hiddenElements.forEach((el) => observer.observe(el));


// ==========================
// Button Ripple Effect
// ==========================

const button = document.querySelector(".about-btn");

if(button){

button.addEventListener("click", function () {

    this.style.transform = "scale(.95)";

    setTimeout(() => {

        this.style.transform = "scale(1)";

    }, 150);

});

}


// ==========================
// Page Loaded Message
// ==========================

window.addEventListener("load", () => {

    console.log("Sai Baba Go Gas - About Page Loaded Successfully");

});


// ==========================
// Scroll to Top Button
// ==========================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.className = "top-btn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});