import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Droplet, Network, Truck } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import { useI18n } from '@/i18n/I18nProvider';

const ServicesGridSection = () => {
  const { t, language } = useI18n();

  const texts = language === 'fr' ? {
    kicker: "Nos services",
    title: "Présentation des services",
    desc1: "va bien au-delà de la simple livraison de carburant.",
    desc2: "Nous concevons, construisons, exploitons et maintenons des infrastructures complètes de stockage et de distribution d'hydrocarbures directement sur site minier. Notre approche intégrée permet de sécuriser les volumes, d'optimiser les flux, de réduire les pertes et de garantir une disponibilité permanente en hydrocarbure.",
    desc3: "Grâce à des standards opérationnels stricts, des procédures de contrôle qualité et une exploitation en continu, nous assurons à nos partenaires miniers et industriels une alimentation énergétique fiable, traçable et conforme aux exigences industrielles et réglementaires.",
    keyService: "Service clé",
    discover: "Découvrir",
    quote: "Demander un devis",
    industrialTitle: "Transport industriel",
    industrialDesc: "Nous assurons le transport régulier de matériaux et d'intrants industriels sur sites. Grâce à une logistique dédiée et une coordination opérationnelle continue, nous sécurisons les flux critiques et garantissons la continuité des chaînes d'approvisionnement.",
    viewService: "Voir le service",
    ourStrengths: "Nos atouts",
    strengths: [
      "Flotte de bennes 12 roues dédiée (clinker et matériaux lourds)",
      "Organisation des flux entre sites, usines et zones de transformation",
      "Planification des rotations pour optimiser coûts et délais",
      "Suivi des trajets et sécurisation des convois",
      "Adaptation aux besoins des projets (volumes, fréquences…)",
    ],
    benefits: "Bénéfices",
    benefitsList: [
      "Meilleure prévisibilité des flux de matériaux",
      "Réduction des retards sur chaîne de production",
      "Moins de fragmentation entre multiples transporteurs",
      "Un partenaire unique qui comprend les contraintes minières",
    ],
  } : {
    kicker: "Our services",
    title: "Services Overview",
    desc1: "goes far beyond simple fuel delivery.",
    desc2: "We design, build, operate and maintain complete hydrocarbon storage and distribution infrastructure directly on mining sites. Our integrated approach helps secure volumes, optimize flows, reduce losses and guarantee permanent hydrocarbon availability.",
    desc3: "Through strict operational standards, quality control procedures and continuous operation, we provide our mining and industrial partners with reliable, traceable energy supply that meets industrial and regulatory requirements.",
    keyService: "Key Service",
    discover: "Discover",
    quote: "Request a quote",
    industrialTitle: "Industrial Transport",
    industrialDesc: "We ensure regular transport of materials and industrial inputs to sites. Through dedicated logistics and continuous operational coordination, we secure critical flows and guarantee supply chain continuity.",
    viewService: "View service",
    ourStrengths: "Our strengths",
    strengths: [
      "Dedicated 12-wheel dump truck fleet (clinker and heavy materials)",
      "Flow organization between sites, factories and processing areas",
      "Rotation planning to optimize costs and deadlines",
      "Route tracking and convoy security",
      "Adaptation to project needs (volumes, frequencies...)",
    ],
    benefits: "Benefits",
    benefitsList: [
      "Better predictability of material flows",
      "Reduction of production chain delays",
      "Less fragmentation between multiple carriers",
      "A single partner who understands mining constraints",
    ],
  };

  const services = language === 'fr' ? [
    {
      id: 'transport-transit',
      icon: Truck,
      title: 'TRANSPORT & TRANSIT',
      description: "Transport industriel et transit des intrants et matériaux sur sites avec coordination opérationnelle continue.",
      highlights: [
        "Planification optimisée des rotations",
        "Sécurisation des trajets et des convois",
        "Coordination opérationnelle continue",
      ],
      highlighted: false
    },
    {
      id: 'reseaux-distribution',
      icon: Network,
      title: 'Réseaux de distribution',
      description: "Conception et exploitation de réseaux de stockage et de distribution d'hydrocarbures pour sécuriser la disponibilité sur site.",
      highlights: [
        "Distribution multi-sites",
        "Procédures strictes et contrôle",
        "Disponibilité permanente",
      ],
      highlighted: true
    },
    {
      id: 'fuel-management',
      icon: Droplet,
      title: 'FUEL MANAGEMENT & INFRASTRUCT',
      description: "Nous concevons, construisons, exploitons et maintenons des infrastructures complètes de stockage et de distribution d'hydrocarbures directement sur site.",
      highlights: [
        "Stockage, distribution et maintenance",
        "Traçabilité & conformité",
        "Réduction des pertes & optimisation des flux",
      ],
      highlighted: false
    },
  ] : [
    {
      id: 'transport-transit',
      icon: Truck,
      title: 'TRANSPORT & TRANSIT',
      description: "Industrial transport and transit of inputs and materials to sites with continuous operational coordination.",
      highlights: [
        "Optimized rotation planning",
        "Route and convoy security",
        "Continuous operational coordination",
      ],
      highlighted: false
    },
    {
      id: 'reseaux-distribution',
      icon: Network,
      title: 'Distribution Networks',
      description: "Design and operation of hydrocarbon storage and distribution networks to secure on-site availability.",
      highlights: [
        "Multi-site distribution",
        "Strict procedures and control",
        "Permanent availability",
      ],
      highlighted: true
    },
    {
      id: 'fuel-management',
      icon: Droplet,
      title: 'FUEL MANAGEMENT & INFRASTRUCT',
      description: "We design, build, operate and maintain complete hydrocarbon storage and distribution infrastructure directly on site.",
      highlights: [
        "Storage, distribution and maintenance",
        "Traceability & compliance",
        "Loss reduction & flow optimization",
      ],
      highlighted: false
    },
  ];

  return ( 
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="hidden lg:block absolute -left-1 top-24">
          <div className="ndc-vertical-label text-[#e11a1a] text-sm">
            SERVICES
          </div>
        </div>

        <div className="text-center mb-16">
          <SectionTitle
            align="center"
            kicker={texts.kicker}
            title={
              <>
                {texts.title} <span className="ndc-text-gradient ndc-accent-underline">NDC</span>
              </>
            }
            description={
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">NDC Énergie</span> {texts.desc1}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {texts.desc2}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {texts.desc3}
                </p>
              </div>
            }
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            
            return (
              <div
                key={service.id}
                className={`group relative p-8 rounded-2xl transition-all duration-300 hover:shadow-xl ndc-swoosh-bg ndc-plaquette-card ${
                  service.highlighted
                    ? 'ndc-border-gradient-dark text-white ring-1 ring-white/10'
                    : 'ndc-border-gradient'
                }`}
              >
                {service.highlighted && (
                  <div className="absolute -top-3 left-8">
                    <span className="inline-flex items-center rounded-full bg-[#e11a1a] px-3 py-1 text-xs font-semibold tracking-wide text-white">
                      {texts.keyService}
                    </span>
                  </div>
                )}

                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                  service.highlighted ? 'bg-white/10' : 'bg-[#1f1f1f]/10'
                }`}>
                  <IconComponent className={`w-8 h-8 ${service.highlighted ? 'text-white' : 'text-[#e11a1a]'}`} />
                </div>
                
                <h3 className={`text-xl font-bold mb-3 leading-tight ${service.highlighted ? 'text-white' : 'text-foreground'}`}>
                  {service.title}
                </h3>
                <p className={`text-sm mb-8 leading-relaxed ${service.highlighted ? 'text-white/80' : 'text-muted-foreground'}`}>
                  {service.description}
                </p>

                <ul className={`space-y-2 text-sm mb-8 ${service.highlighted ? 'text-white/80' : 'text-muted-foreground'}`}>
                  {service.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className={`mt-2 h-1.5 w-1.5 rounded-full ${service.highlighted ? 'bg-white/70' : 'bg-[#e11a1a]'}`} />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link to={`/services/${service.id}`} className="w-full">
                    <Button
                      className={`w-full rounded-full group/btn ${
                        service.highlighted
                          ? 'bg-white text-[#1f1f1f] hover:bg-white/90'
                          : 'bg-[#e11a1a] hover:bg-red-700 text-white'
                      }`}
                      size="sm"
                    >
                      {texts.discover}
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>

                  <Link to="/contact" className="w-full">
                    <Button
                      variant="outline"
                      className={`w-full rounded-full ${
                        service.highlighted
                          ? 'border-white/25 text-white hover:bg-white/10'
                          : 'border-gray-300 text-foreground hover:bg-gray-50'
                      }`}
                      size="sm"
                    >
                      {texts.quote}
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 rounded-2xl p-8 ndc-border-gradient ndc-swoosh-bg ndc-plaquette-card">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="lg:w-1/2">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                {texts.industrialTitle}
              </h3>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                {texts.industrialDesc}
              </p>
              <Link to="/services/transport-transit" className="inline-block mt-8">
                <Button className="bg-[#e11a1a] hover:bg-red-700 text-white rounded-full" size="sm">
                  {texts.viewService}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="lg:w-1/2 grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-foreground mb-3">{texts.ourStrengths}</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {texts.strengths.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-foreground mb-3">{texts.benefits}</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {texts.benefitsList.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGridSection;
