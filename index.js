// constants
const navbar = document.getElementById("navbar");
const navLinks = navbar.querySelectorAll(".nav-page");
const sections = document.querySelectorAll("section");

// handling scroll event for navbar
window.addEventListener("scroll", handleScroll);

function handleScroll() {
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

// scroll to section
navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        
        const targetId = this.getAttribute("data-target");
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }
    });
  });