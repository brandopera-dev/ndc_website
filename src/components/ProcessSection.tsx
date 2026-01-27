import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight, Droplet, Network, ShieldCheck, Truck } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";

const processCards = [
  {
    number: 1,
    id: "transport-hydrocarbures",
    title: "INFRASTRUCTURES & FUEL MANAGEMENT",
    description:
      "NDC Énergie conçoit, construit, exploite et maintient des infrastructures de stockage et de distribution d’hydrocarbures directement sur site, pour garantir disponibilité, traçabilité et conformité.",
    image: "/images/storage-tanks-petroleum-products.jpg",
    features: [
      { icon: ShieldCheck, label: "Contrôle qualité & conformité" },
      { icon: Droplet, label: "Sécurisation des volumes" },
      { icon: Network, label: "Exploitation continue" },
    ],
  },

  {
    number: 2,
    id: "logistique-minerale",
    title: "TRANSPORT & TRANSIT",
    description:
      "Transport industriel et transit des intrants et matériaux sur sites avec coordination opérationnelle continue, sécurisation des convois et planification optimisée des rotations.",
    image: "/images/large-truck-carrying-sand-platinum-mining-site-africa.jpg",
    features: [
      { icon: Truck, label: "Flotte dédiée" },
      { icon: Network, label: "Organisation des flux" },
      { icon: ShieldCheck, label: "Sécurisation des trajets" },
    ],
  }, {
    number: 3,
    id: "stations-essence",
    title: "RESEAUX DE DISTRIBUTION",
    description:
      "Conception et exploitation de réseaux de stockage et de distribution d’hydrocarbures sur plusieurs points, pour optimiser les flux et réduire les pertes.",
    image: "/images/high-angle-view-industry-factory.jpg",
    features: [
      { icon: Network, label: "Distribution multi-sites" },
      { icon: ShieldCheck, label: "Procédures strictes" },
      { icon: Droplet, label: "Disponibilité permanente" },
    ],
  },
];

const ProcessSection = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 640);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % processCards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + processCards.length) % processCards.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="process" className="py-14 sm:py-20 lg:py-24 section-dark overflow-hidden scroll-animate ndc-swoosh-bg ">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative">
        <div className="hidden lg:block absolute -left-1 top-10">
          <div className="ndc-vertical-label text-white/60 text-sm">
            PROCESS
          </div>
        </div>

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-16">
          <div className="flex flex-col gap-4">
            {/*  <span className="ndc-text-gradient ndc-accent-underline">NDC Énergie</span> */}
            <SectionTitle
              kicker="Notre méthode"
              variant="dark"
              title={
                <>
                  Des solutions
                  <br />
                  pensées pour les opérations industrielles
                </>
              }
              description={
                <>Découvrez nos axes d’intervention et accédez à chaque service avec des actions dédiées.</>
              }
            />
          </div>
          <div className="flex gap-2 mt-6 lg:mt-0">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white hover:bg-red-700 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Cards Layout - Stacked carousel with overlap and images */}
        <div className="relative h-[680px] sm:h-[650px] lg:h-[620px]">
          <div className="absolute inset-0 flex items-start justify-center">
            {processCards.map((card, index) => {
              const offset = index - currentIndex;
              const isActive = index === currentIndex;
              // Wider cards with more overlap - reduced spacing from 340 to 280
              const translateX = isMobile ? 0 : offset * 280;

              if (isMobile && !isActive) return null;

              return (
                <div
                  key={card.number}
                  onClick={() => goToSlide(index)}
                  className="absolute w-[90%] sm:w-[85%] md:w-[600px] lg:w-[700px] bg-[#1a1a1a] overflow-hidden border border-white/10 cursor-pointer transition-all duration-500 ease-out"
                  style={{
                    left: '50%',
                    transform: `translateX(calc(-50% + ${translateX}px)) scale(${isActive ? 1 : 0.92})`,
                    zIndex: isActive ? 30 : 20 - Math.abs(offset),
                    opacity: Math.abs(offset) > 2 ? 0 : 1 - Math.abs(offset) * 0.25,
                    filter: isActive ? 'none' : 'brightness(0.45) saturate(0.85)',
                    pointerEvents: Math.abs(offset) > 1 ? 'none' : 'auto',
                  }}
                >
                  {/* Card Image */}
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className={`w-full h-full object-cover transition-transform duration-700 ${isActive ? "scale-[1.02]" : "scale-100"}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-transparent"></div>

                    {/* Card Number on Image */}
                    <div className="absolute top-4 left-4 flex items-center gap-3">
                      <div className="w-11 h-11 rounded-full bg-[#e11a1a] flex items-center justify-center text-white font-bold text-base shadow-lg shadow-black/30">
                        {card.number}
                      </div>
                      <div className="hidden sm:flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-3 py-1.5 backdrop-blur">
                        <span className="text-xs font-semibold tracking-wide text-white">NDC Énergie</span>
                        <span className="h-1 w-1 rounded-full bg-white/50" />
                        <span className="text-xs text-white/80">Service</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-8">
                    {/* Card Title */}
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                        {card.title}
                      </h3>
                      <div className="hidden sm:flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                        <span className="text-xs font-semibold text-white/90">0{card.number}</span>
                        <span className="h-1 w-1 rounded-full bg-white/35" />
                        <span className="text-xs text-white/65">Axe</span>
                      </div>
                    </div>

                    {/* Card Description */}
                    <p className="text-white/75 text-sm leading-relaxed mb-6">
                      {card.description}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      {card.features.map((feature, idx) => (
                        <div key={idx} className={`flex flex-col items-center text-center rounded-xl p-3 sm:p-4 transition-colors border border-white/10 ${isActive ? "bg-white/7 hover:bg-white/10" : "bg-white/5"}`}>
                          <feature.icon className="w-5 h-5 text-[#e11a1a] mb-2" />
                          <span className="text-xs text-white/75 leading-tight">{feature.label}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link to={`/services/${card.id}`} className="w-full">
                        <Button className="w-full bg-[#e11a1a] hover:bg-red-700 text-white rounded-xl py-3 font-semibold group/cta">
                          Découvrir le service
                          <ArrowRight className="ml-2 w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                      <Link to="/contact" className="w-full">
                        <Button variant="outline" className="w-full border-white/25 text-white hover:bg-white/10 rounded-xl py-3 font-semibold">
                          Demander un devis
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {processCards.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                ? 'w-8 bg-red-600'
                : 'bg-white/30 hover:bg-white/50'
                }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;
