// Scroll animations utility améliorée
export const initScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  // Récupérer tous les éléments à animer
  const animatedSections = document.querySelectorAll('.scroll-animate');
  const specificAnimations = document.querySelectorAll('[data-animate]');

  // Cacher les éléments qui ne sont pas déjà visibles dans le viewport
  animatedSections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    // Si l'élément est en dessous du viewport, le cacher
    if (rect.top > window.innerHeight) {
      section.classList.add('scroll-hidden');
    }
  });

  specificAnimations.forEach((element) => {
    const rect = element.getBoundingClientRect();
    if (rect.top > window.innerHeight) {
      element.classList.add('scroll-hidden');
    }
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Retirer scroll-hidden et ajouter animate-in
        entry.target.classList.remove('scroll-hidden');
        entry.target.classList.add('animate-in');
        // Ne plus observer cet élément
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observer tous les éléments
  animatedSections.forEach((section) => {
    if (section.classList.contains('scroll-hidden')) {
      observer.observe(section);
    }
  });

  specificAnimations.forEach((element) => {
    if (element.classList.contains('scroll-hidden')) {
      observer.observe(element);
    }
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
