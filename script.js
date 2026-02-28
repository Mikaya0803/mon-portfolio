// Reveal animation
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if(elementTop < windowHeight - 100){
            el.classList.add("active");
        }
    });
});

// Burger menu
const burger = document.getElementById("burger");
const navLinks = document.getElementById("nav-links");

if(burger){
    burger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// Dark mode
const toggle = document.getElementById("theme-toggle");

if(toggle){
    toggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");
    });
}