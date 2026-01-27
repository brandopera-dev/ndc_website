// Scroll animations utility améliorée
export const initScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Ajouter un délai progressif pour les animations en cascade
        setTimeout(() => {
          entry.target.classList.add('animate-in');
        }, index * 50);
      }
    });
  }, observerOptions);

  // Observe all sections with scroll-animate class
  const animatedSections = document.querySelectorAll('.scroll-animate');
  animatedSections.forEach((section) => {
    observer.observe(section);
  });

  // Observer pour les éléments avec des animations spécifiques
  const specificAnimations = document.querySelectorAll('[data-animate]');
  specificAnimations.forEach((element) => {
    observer.observe(element);
  });

  return () => {
    animatedSections.forEach((section) => {
      observer.unobserve(section);
    });
    specificAnimations.forEach((element) => {
      observer.unobserve(element);
    });
  };
};
