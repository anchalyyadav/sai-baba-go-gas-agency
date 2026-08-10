// ==========================================
// SAI BABA GO GAS
// HEADER + NAVBAR JS
// ==========================================


// ===============================
// Sticky Navbar
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("sticky");

    } else {

        navbar.classList.remove("sticky");

    }

});


// ===============================
// Active Menu
// ===============================

const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach(link => {

    link.addEventListener("click", function () {

        menuLinks.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});


// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


// ===============================
// Header Animation
// ===============================

window.addEventListener("load", () => {

    const header = document.querySelector(".header");

    header.style.opacity = "0";
    header.style.transform = "translateY(-40px)";

    setTimeout(() => {

        header.style.transition = "0.8s ease";

        header.style.opacity = "1";
        header.style.transform = "translateY(0)";

    }, 200);

});