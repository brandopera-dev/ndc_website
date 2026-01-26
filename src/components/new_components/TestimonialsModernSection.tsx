import React, { useEffect, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

const TestimonialsModernSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 640);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const testimonials = [
    {
      name: "Elen Kalinaky",
      location: "Alabama → Texas",
      rating: 5,
      text: "Service excellent. L'équipe a trouvé un transporteur très rapidement et la livraison est arrivée plus tôt que prévu. Je recommande et je referai appel à eux.",
      service: "Transport de véhicule",
      avatar: "EK"
    },
    {
      name: "Jean Dupont",
      location: "Kinshasa → Lubumbashi",
      rating: 5,
      text: "Service exceptionnel pour le transport de nos équipements miniers. NDC a géré toute la logistique avec professionnalisme. Livraison dans les délais.",
      service: "Transport Minier",
      avatar: "JD"
    },
    {
      name: "Marie Kabongo",
      location: "Kolwezi → Likasi",
      rating: 5,
      text: "Excellente gestion du fuel management pour notre site. Support 24/7 très réactif. Je recommande vivement NDC pour vos opérations.",
      service: "Fuel Management",
      avatar: "MK"
    },
    {
      name: "Pierre Mwamba",
      location: "Lubumbashi → Zambie",
      rating: 5,
      text: "Transit et douanes gérés de manière impeccable. Aucun retard, documentation complète. NDC est notre partenaire logistique de confiance.",
      service: "Transit & Douanes",
      avatar: "PM"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + testimonials.length) % testimonials.length;
      visible.push({ ...testimonials[index], offset: i });
    }
    return visible;
  };

  return (
    <section id="avis" className="py-14 sm:py-20 lg:py-28 bg-black text-white overflow-hidden scroll-animate">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16 scroll-animate">
          <span className="inline-block bg-white/10 text-white text-xs font-semibold px-4 py-2 rounded-full uppercase tracking-wider mb-4">
            AVIS CLIENTS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Ce que disent nos clients
          </h2>
        </div>

        {/* Carousel Container - Stacked with overlap */}
        <div className="relative h-[420px] sm:h-[300px] mb-12">
          <div className="absolute inset-0 flex items-start justify-center">
            {getVisibleTestimonials().map((testimonial, idx) => {
              const isCenter = testimonial.offset === 0;
              const isLeft = testimonial.offset === -1;
              const isRight = testimonial.offset === 1;
              
              // Calculate translateX for overlap effect
              const translateX = isMobile ? 0 : testimonial.offset * 350;

              if (isMobile && !isCenter) return null;

              return (
                <div
                  key={idx}
                  className="absolute cursor-pointer transition-all duration-500 ease-out"
                  style={{
                    left: '50%',
                    transform: `translateX(calc(-50% + ${translateX}px)) scale(${isCenter ? 1 : 0.9})`,
                    zIndex: isCenter ? 30 : 20 - Math.abs(testimonial.offset),
                    opacity: isCenter ? 1 : 0.4,
                    filter: isCenter ? 'none' : 'brightness(0.6)',
                    width: '700px',
                    maxWidth: '92vw',
                    pointerEvents: isMobile ? 'auto' : (isCenter ? 'auto' : 'none'),
                  }}
                  onClick={() => {
                    if (isLeft) prevSlide();
                    if (isRight) nextSlide();
                  }}
                >
                  <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800">
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>

                    {/* Location Badge */}
                    <div className="flex items-center gap-2 mb-4">
                      <MapPin className="w-4 h-4 text-[#e11a1a]" />
                      <span className="text-sm text-gray-400">{testimonial.location}</span>
                    </div>

                    {/* Quote */}
                    <p className="text-white leading-relaxed mb-6 text-base">
                      {testimonial.text}
                    </p>

                    {/* Service Tag */}
                    <div className="inline-block bg-zinc-800 text-gray-300 text-xs px-3 py-1.5 rounded-full mb-6">
                      {testimonial.service}
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-3 pt-4 border-t border-zinc-800">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#e11a1a] to-red-700 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">
                          {testimonial.avatar}
                        </span>
                      </div>
                      <div>
                        <p className="font-bold text-white">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-gray-400">
                          Client NDC
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-white text-black hover:bg-gray-200 transition-all hover:scale-110 flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-white text-black hover:bg-gray-200 transition-all hover:scale-110 flex items-center justify-center"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-8 h-2 bg-[#e11a1a]'
                    : 'w-2 h-2 bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsModernSection;
