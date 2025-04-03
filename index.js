// handling scroll event for navbar
window.addEventListener("scroll", handleScroll);

function handleScroll() {
const navbar = document.getElementById("navbar");
const navLinks = navbar.querySelectorAll(".nav-page");
const sections = document.querySelectorAll("section");

sections.forEach((section, index) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;

    if (window.scrollY >= top && window.scrollY < top + height) {
    navLinks.forEach((navLink) => {
        navLink.classList.remove("active");
    });
    navLinks[index].classList.add("active");
    }
});
}

// scroll to the top when refresh
document.addEventListener("DOMContentLoaded", function() {
    window.history.replaceState({}, document.title, window.location.pathname);
    window.scrollTo(0, 0);
});