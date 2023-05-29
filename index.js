// handling scroll event for navbar
window.addEventListener("scroll", handleScroll);

function handleScroll() {
const navbar = document.getElementById("navbar");
const navLinks = navbar.querySelectorAll(".nav-page");
const sections = document.querySelectorAll("section");

sections.forEach((section, index) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;

    if (window.pageYOffset >= top && window.pageYOffset < top + height) {
    navLinks.forEach((navLink) => {
        navLink.classList.remove("active");
    });
    navLinks[index].classList.add("active");
    }
});
}