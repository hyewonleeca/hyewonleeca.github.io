  // Get all the nav-link elements
  const navLinks = document.querySelectorAll('.nav-link');

  // Add click event listener to each nav-link
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      // Remove active class from all nav-links
      navLinks.forEach(link => link.classList.remove('active'));
      
      // Add active class to the clicked nav-link
      this.classList.add('active');
    });
  });