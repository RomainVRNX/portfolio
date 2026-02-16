document.addEventListener('DOMContentLoaded', () => {
  
  const hamburger = document.getElementById('hamburger-btn');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('nav a');

  // 1. Ouvrir / Fermer le menu au clic sur le burger
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navMenu.classList.toggle('active');
  });

  // 2. Fermer le menu quand on clique sur un lien (pour éviter qu'il reste ouvert)
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navMenu.classList.remove('active');
    });
  });

  // 3. Effet d'apparition au scroll (Petit bonus pour tes photos)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-visible');
      }
    });
  }, { threshold: 0.1 });

  // On applique l'effet sur toutes les cartes et images
  document.querySelectorAll('.card, .photo-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // Ajout de la classe CSS pour l'animation JS
  const style = document.createElement('style');
  style.innerHTML = `
    .fade-in-visible {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  `;
  document.head.appendChild(style);

});
