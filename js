/* ------------------------------
   Rutvi Bhatt | Portfolio Animations
   Using ScrollReveal.js
------------------------------ */

// Initialize ScrollReveal
const sr = ScrollReveal({
  reset: false,     // Animation only once (professional look)
  distance: '50px',
  duration: 1000,
  easing: 'ease-out',
});

// Navbar
sr.reveal('.navbar', {
  origin: 'top',
  distance: '20px',
  delay: 200,
  opacity: 0
});

// Hero Section
sr.reveal('.hero-left', {
  origin: 'left',
  delay: 300,
  opacity: 0
});

sr.reveal('.hero-right', {
  origin: 'right',
  delay: 500,
  opacity: 0
});

// About Section
sr.reveal('.about-img', {
  origin: 'left',
  delay: 200,
  opacity: 0
});

sr.reveal('.about-content', {
  origin: 'right',
  delay: 300,
  opacity: 0
});

// Skills Section (staggered cards)
sr.reveal('.skill-card', {
  origin: 'bottom',
  interval: 200,   // Each skill appears one by one
  opacity: 0
});

// Projects Section (cards with stagger)
sr.reveal('.project-card', {
  origin: 'bottom',
  distance: '60px',
  interval: 250,   // Each project card reveals one after another
  opacity: 0
});

// Contact Section
sr.reveal('.contact-section', {
  origin: 'bottom',
  distance: '60px',
  delay: 300,
  opacity: 0
});

// Footer
sr.reveal('.footer', {
  origin: 'bottom',
  distance: '30px',
  delay: 200,
  opacity: 0
});
