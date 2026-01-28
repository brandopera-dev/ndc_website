import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, MapPin, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Amadou Traoré",
    location: "Bamako → Kayes",
    rating: 5,
    text: "Service excellent pour le transport de nos équipements miniers. NDC a géré toute la logistique avec professionnalisme. Livraison dans les délais, équipe très réactive.",
    service: "Transport Minier",
    avatar: "AT"
  },
  {
    name: "Fatoumata Diallo",
    location: "Bamako → Sikasso",
    rating: 5,
    text: "Excellente gestion du fuel management pour notre site minier. Support 24/7 très réactif. NDC assure la continuité de nos opérations sans interruption.",
    service: "Fuel Management",
    avatar: "FD"
  },
  {
    name: "Ibrahim Keita",
    location: "Mali → Burkina Faso",
    rating: 5,
    text: "Transit et douanes gérés de manière impeccable. Aucun retard, documentation complète. NDC est notre partenaire logistique de confiance en Afrique de l'Ouest.",
    service: "Transit & Douanes",
    avatar: "IK"
  },
  {
    name: "Aissata Coulibaly",
    location: "Bamako → Kati",
    rating: 5,
    text: "Solution complète de stockage d'hydrocarbures très professionnelle. Installation sécurisée, suivi rigoureux. NDC répond parfaitement à nos besoins opérationnels.",
    service: "Stockage Hydrocarbures",
    avatar: "AC"
  },
  {
    name: "Moussa Sangaré",
    location: "Mali → Sénégal",
    rating: 5,
    text: "Transport de marchandises entre pays très efficace. Coordination parfaite, respect des délais. NDC maîtrise parfaitement les routes transafricaines.",
    service: "Transport International",
    avatar: "MS"
  }
];

const TestimonialsModernSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll functionality
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => {
    setIsPaused(true);
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsPaused(false), 8000);
  };

  const prevSlide = () => {
    setIsPaused(true);
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsPaused(false), 8000);
  };

  const goToSlide = (index: number) => {
    setIsPaused(true);
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setTimeout(() => setIsPaused(false), 8000);
  };

  const currentTestimonial = testimonials[currentIndex];

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    }),
  };

  return (
    <section id="avis" className="py-14 sm:py-20 lg:py-28 bg-white overflow-hidden scroll-animate">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-[#1f1f1f]/10 text-[#e11a1a] text-xs font-semibold px-4 py-2 rounded-full uppercase tracking-wider mb-4">
            AVIS CLIENTS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
            Ce que disent nos clients
          </h2>
        </motion.div>

        {/* Carousel Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Testimonial Card */}
          <div className="relative min-h-[380px] sm:min-h-[320px] mb-8 pt-6">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{
                  duration: 0.4,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="w-full max-w-4xl mx-auto px-4"
              >
                <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-2xl relative">
                  {/* Quote Icon */}
                  <motion.div 
                    className="absolute -top-5 left-10 w-12 h-12 bg-[#e11a1a] rounded-full flex items-center justify-center shadow-lg"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  >
                    <Quote className="w-5 h-5 text-white" />
                  </motion.div>

                  <div className="grid md:grid-cols-3 gap-8 items-center pt-4">
                    {/* Left: Author Avatar */}
                    <motion.div 
                      className="flex flex-col items-center space-y-4"
                      custom={0}
                      variants={contentVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <motion.div 
                        className="w-24 h-24 bg-gradient-to-br from-[#e11a1a] to-red-700 rounded-full flex items-center justify-center shadow-xl"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <span className="text-white font-bold text-2xl">
                          {currentTestimonial.avatar}
                        </span>
                      </motion.div>

                      <div className="text-center">
                        <p className="font-bold text-gray-900 text-lg">
                          {currentTestimonial.name}
                        </p>
                        <div className="flex items-center gap-1 text-gray-500 justify-center mt-1">
                          <MapPin className="w-3 h-3 text-[#e11a1a]" />
                          <span className="text-xs">{currentTestimonial.location}</span>
                        </div>
                      </div>
                    </motion.div>

                    {/* Right: Content */}
                    <div className="md:col-span-2 space-y-5">
                      {/* Stars */}
                      <motion.div 
                        className="flex gap-1"
                        custom={1}
                        variants={contentVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        {[...Array(currentTestimonial.rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 + i * 0.1, type: "spring" }}
                          >
                            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                          </motion.div>
                        ))}
                      </motion.div>

                      {/* Quote */}
                      <motion.p 
                        className="text-gray-700 leading-relaxed text-lg italic"
                        custom={2}
                        variants={contentVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        "{currentTestimonial.text}"
                      </motion.p>

                      {/* Service Tag */}
                      <motion.div 
                        className="inline-block bg-[#e11a1a]/10 text-[#e11a1a] text-sm px-4 py-2 rounded-full font-semibold"
                        custom={3}
                        variants={contentVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover={{ scale: 1.05 }}
                      >
                        {currentTestimonial.service}
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6">
            {/* Previous Button */}
            <motion.button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-gray-100 text-gray-700 hover:bg-[#e11a1a] hover:text-white flex items-center justify-center shadow-md"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Précédent"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`rounded-full transition-colors ${
                    index === currentIndex
                      ? 'bg-[#e11a1a]'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  animate={{
                    width: index === currentIndex ? 32 : 10,
                    height: 10,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  whileHover={{ scale: 1.2 }}
                  aria-label={`Aller au témoignage ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <motion.button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-[#e11a1a] text-white hover:bg-red-700 flex items-center justify-center shadow-md"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Suivant"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Progress Bar */}
          <div className="mt-8 max-w-md mx-auto">
            <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#e11a1a]"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: isPaused ? 0 : 5,
                  ease: "linear",
                }}
                key={`${currentIndex}-${isPaused}`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsModernSection;
