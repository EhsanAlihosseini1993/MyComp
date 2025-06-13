document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('nav ul');
  
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // Parallax effect
  window.addEventListener('scroll', () => {
    const circuitBoard = document.querySelector('.circuit-board');
    const scrolled = window.pageYOffset;
    circuitBoard.style.transform = `translateY(${scrolled * 0.5}px)`;
  });

  // Service card hover effects
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      const animation = card.querySelector('.circuit-animation');
      animation.style.opacity = '1';
    });

    card.addEventListener('mouseleave', () => {
      const animation = card.querySelector('.circuit-animation');
      animation.style.opacity = '0.5';
    });
  });

  // Animate components on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.service-card, .expertise-content').forEach(el => {
    observer.observe(el);
  });
});