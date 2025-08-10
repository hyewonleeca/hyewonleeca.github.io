// constants
const navbar = document.getElementById("navbar");
const navLinks = navbar.querySelectorAll(".nav-page");
const sections = document.querySelectorAll("section");
const container = document.querySelector('.carousel-container');
const indicators = document.querySelector('.carousel-indicators');
const items = container.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');


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

//** carousel controls **
let currentIndex = 0;
const itemWidth = items[0].offsetWidth + 60;

// create indicator buttons
function createIndicators() {
  indicators.innerHTML = '';
  items.forEach((_, index) => {
    const btn = document.createElement('button');
    if(index === 0) btn.classList.add('active');
    btn.addEventListener('click', () => {
      scrollToIndex(index);
    });
    indicators.appendChild(btn);
  });
}

// scroll to index
function scrollToIndex(index) {
    if (index < 0) index = 0;
    if (index > items.length - 1) index = items.length - 1;
    container.scrollTo({
      left: itemWidth * index,
      behavior: 'smooth',
    });
    currentIndex = index;
}

prevBtn.addEventListener('click', () => {
    scrollToIndex(currentIndex - 1);
});

nextBtn.addEventListener('click', () => {
    scrollToIndex(currentIndex + 1);
});

// indicator activation
function setActiveIndicator(index) {
  indicators.querySelectorAll('button').forEach((btn, i) => {
    btn.classList.toggle('active', i === index);
  });
}

// indicator update to scroll
container.addEventListener('scroll', () => {
  const scrollLeft = container.scrollLeft;
  const itemWidth = items[0].offsetWidth + 15;
  const index = Math.round(scrollLeft / itemWidth);
  if(index !== currentIndex) {
    setActiveIndicator(index);
    currentIndex = index;
  }
});

// indiator initiation
createIndicators();
scrollToIndex(0);