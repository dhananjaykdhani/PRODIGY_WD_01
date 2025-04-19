// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      // Get the target element by ID
      const target = document.querySelector(this.getAttribute('href'));
      
      // Scroll to the target element
      target.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  