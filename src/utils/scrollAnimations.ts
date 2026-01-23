// Scroll animations utility
export const initScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);

  // Observe all sections with scroll-animate class
  const animatedSections = document.querySelectorAll('.scroll-animate');
  animatedSections.forEach((section) => {
    observer.observe(section);
  });

  return () => {
    animatedSections.forEach((section) => {
      observer.unobserve(section);
    });
  };
};
