import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Droplet, Network, Truck, TrendingUp, ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { CTASimple } from '@/components/cta';
import { CTAWarehouseExample } from '@/components/cta/CTAExamples';
import { useI18n } from '@/i18n/I18nProvider';

const Services = () => {
  const { t, language } = useI18n();

  const texts = language === 'fr' ? {
    breadcrumbHome: "Accueil",
    badge: "NOS SERVICES",
    heroTitle1: "Solutions",
    heroTitle2: "Logistiques",
    heroTitle3: "pour Chaque Besoin",
    heroDescription: "Des solutions logistiques complètes conçues pour optimiser votre chaîne d'approvisionnement et améliorer vos opérations commerciales. De l'entreposage à la livraison finale, nous offrons l'excellence.",
    getQuote: "Demander un devis",
    viewAllServices: "Voir tous les services",
    communityBadge: "NOTRE COMMUNAUTÉ",
    communityTitle1: "Rejoignez une",
    communityTitle2: "Communauté",
    communityTitle3: "Croissante de Partenaires",
    communityDescription: "Une communauté florissante d'entreprises et de partenaires logistiques, optimisant les chaînes d'approvisionnement et stimulant la croissance. Ensemble, nous construisons l'avenir de la logistique en Afrique.",
    joinNow: "Rejoindre",
    servicesBadge: "SERVICES NDC",
    servicesTitle1: "Services",
    servicesTitle2: "NDC",
    servicesTitle3: "Complets Adaptés à Vos Besoins",
    servicesDescription: "Notre vision est d'être le partenaire logistique de référence, reconnu pour l'excellence en gestion de la chaîne d'approvisionnement, l'innovation et la satisfaction client. Nous offrons des solutions qui font avancer votre entreprise.",
    discover: "Découvrir",
    processBadge: "PROCESSUS",
    processTitle1: "Notre",
    processTitle2: "Processus",
    processTitle3: "Éprouvé pour l'Excellence",
    processDescription: "Notre processus est simple mais efficace. Chaque projet est différent, mais nous en avons vu des milliers depuis notre lancement. Notre expérience est votre avantage. Nous combinons des méthodologies éprouvées avec des solutions innovantes.",
    trustedBy: "Confiance de 500+ Entreprises",
    deliveringExcellence: "Livrer l'excellence à travers l'Afrique",
    ctaTitle: "Optimisez Votre Logistique Dès Aujourd'hui !",
    ctaDescription: "Découvrez un monde de logistique fluide et sans effort, prêt à transformer votre façon d'avancer.",
    ctaButton: "Demander un devis",
  } : {
    breadcrumbHome: "Home",
    badge: "OUR SERVICES",
    heroTitle1: "Logistics",
    heroTitle2: "Solutions",
    heroTitle3: "for Every Need",
    heroDescription: "Comprehensive logistics solutions designed to streamline your supply chain and enhance your business operations. From warehousing to last-mile delivery, we deliver excellence.",
    getQuote: "Get a Quote",
    viewAllServices: "View All Services",
    communityBadge: "OUR COMMUNITY",
    communityTitle1: "Join a Growing",
    communityTitle2: "Community",
    communityTitle3: "of Business and Logistics Partners",
    communityDescription: "A thriving community of businesses and logistics partners, optimizing supply chains and driving growth. Together, we're building the future of logistics in Africa.",
    joinNow: "Join Now",
    servicesBadge: "NDC SERVICES",
    servicesTitle1: "Comprehensive",
    servicesTitle2: "NDC",
    servicesTitle3: "Services Tailored to Meet Your Unique Needs",
    servicesDescription: "Our vision is to be the leading logistics partner, recognized for excellence in supply chain management, innovation, and customer satisfaction. We deliver solutions that drive your business forward.",
    discover: "Discover",
    processBadge: "WORK PROCESS",
    processTitle1: "Our Proven",
    processTitle2: "Process",
    processTitle3: "for Excellence",
    processDescription: "Our process is simple yet effective. Every project is different, but we've seen thousands since our launch. Our experience is your advantage. We combine proven methodologies with innovative solutions.",
    trustedBy: "Trusted by 500+ Companies",
    deliveringExcellence: "Delivering excellence across Africa",
    ctaTitle: "Streamline Your Logistics Today!",
    ctaDescription: "Discover a world of effortless and seamless logistics, ready to transform the way you move forward.",
    ctaButton: "Get a Quote",
  };

  const services = language === 'fr' ? [
    {
      id: 'fuel-management',
      icon: Droplet,
      title: "Fuel management & infrastructures",
      description: "Conception, déploiement et exploitation d'infrastructures de stockage et de distribution d'hydrocarbures sur site.",
      highlighted: false
    },
    {
      id: 'reseaux-distribution',
      icon: Network,
      title: "Réseaux de distribution",
      description: "Approvisionnement et gestion de stations-service : planification des réassorts, traçabilité et standards de sécurité.",
      highlighted: true
    },
    {
      id: 'transport-transit',
      icon: Truck,
      title: "Transport & transit",
      description: "Transport industriel et transit des intrants et matériaux sur sites avec coordination opérationnelle continue.",
      highlighted: false
    },
  ] : [
    {
      id: 'fuel-management',
      icon: Droplet,
      title: "Fuel management & infrastructure",
      description: "Design, deployment and operation of on-site hydrocarbon storage and distribution infrastructure.",
      highlighted: false
    },
    {
      id: 'reseaux-distribution',
      icon: Network,
      title: "Distribution networks",
      description: "Supply and management of service stations: replenishment planning, traceability and safety standards.",
      highlighted: true
    },
    {
      id: 'transport-transit',
      icon: Truck,
      title: "Transport & transit",
      description: "Industrial transport and transit of inputs and materials to sites with continuous operational coordination.",
      highlighted: false
    },
  ];

  const stats = language === 'fr' ? [
    { value: '25', label: 'Années de service' },
    { value: '300+', label: 'Experts dans notre équipe' },
    { value: '500+', label: 'Livraisons réussies' },
    { value: '99%', label: 'Taux de livraison à temps' },
  ] : [
    { value: '25', label: 'Years in Service' },
    { value: '300+', label: 'Team Experts We Have' },
    { value: '500+', label: 'Successful Delivery' },
    { value: '99%', label: 'On-Time Delivery Rate' },
  ];

  const processSteps = language === 'fr' ? [
    {
      number: '01',
      title: 'Consultation approfondie',
      description: 'Une évaluation minutieuse de vos besoins logistiques pour garantir des solutions sur mesure répondant à vos exigences spécifiques.',
    },
    {
      number: '02',
      title: 'Planification stratégique',
      description: 'Conception d\'un plan optimal pour assurer une livraison efficace de vos marchandises avec un maximum de rentabilité.',
    },
    {
      number: '03',
      title: 'Exécution efficace',
      description: 'Coordination précise de chaque étape du processus d\'expédition avec suivi et surveillance en temps réel.',
    },
    {
      number: '04',
      title: 'Livraison ponctuelle',
      description: 'Livraison fiable et ponctuelle de vos expéditions, garantissant la satisfaction client et la continuité des affaires.',
    },
  ] : [
    {
      number: '01',
      title: 'In-Depth Consultation',
      description: 'A careful assessment of your logistics needs to ensure tailored solutions that meet your specific requirements.',
    },
    {
      number: '02',
      title: 'Strategic Planning',
      description: 'Designing an optimal plan to ensure efficient delivery of your goods with maximum cost-effectiveness.',
    },
    {
      number: '03',
      title: 'Efficient Execution',
      description: 'Precise coordination of every step in the shipping process with real-time tracking and monitoring.',
    },
    {
      number: '04',
      title: 'On-Time Delivery',
      description: 'Reliable and punctual delivery of your shipments, ensuring customer satisfaction and business continuity.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{language === 'fr' ? 'Nos Services | NDC Énergie - Fuel Management, Transport et Transit' : 'Our Services | NDC Energy - Fuel Management, Transport and Transit'}</title>
        <meta name="description" content={language === 'fr' 
          ? "Explorez nos solutions : Fuel Management, Réseaux de Distribution et Transport/Transit. Expertise logistique complète pour les secteurs minier et industriel." 
          : "Explore our solutions: Fuel Management, Distribution Networks and Transport/Transit. Complete logistics expertise for mining and industrial sectors."} />
        <meta property="og:title" content={language === 'fr' ? 'Services de NDC Énergie' : 'NDC Energy Services'} />
        <meta property="og:description" content={language === 'fr' 
          ? "Solutions intégrées pour optimiser votre chaîne d'approvisionnement énergétique et logistique." 
          : "Integrated solutions to optimize your energy and logistics supply chain."} />
        <link rel="canonical" href="https://ndc.africa/services" />
      </Helmet>
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-[#1f1f1f] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/images_ndc/TRANSPORT/TR_1.webp"
            alt={language === 'fr' ? "Nos Services NDC" : "Our NDC Services"}
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1f1f1f]/90 to-[#1f1f1f]/95" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/60 text-sm mb-8">
            <a href="/" className="hover:text-white transition-colors">{texts.breadcrumbHome}</a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Services</span>
          </div>
          
          {/* Content */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#1f1f1f]/10 border border-[#e11a1a]/20 text-[#e11a1a] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-[#e11a1a] rounded-full animate-pulse"></span>
              {texts.badge}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {texts.heroTitle1} <span className="text-[#e11a1a] italic">{texts.heroTitle2}</span> {texts.heroTitle3}
            </h1>
            
            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8">
              {texts.heroDescription}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="/contact">
                <Button className="bg-[#e11a1a] hover:bg-red-700 text-white px-8 py-6 rounded-full text-base font-semibold inline-flex items-center gap-2">
                  {texts.getQuote}
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 rounded-full text-base font-semibold inline-flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                {texts.viewAllServices}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start gap-12">
            <div className="lg:w-1/2">
              <span className="text-[#e11a1a] text-sm font-semibold tracking-wider uppercase flex items-center gap-2">
                <span className="w-2 h-2 bg-[#e11a1a] rounded-full"></span>
                {texts.communityBadge}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 leading-tight">
                {texts.communityTitle1} <span className="text-[#e11a1a]">{texts.communityTitle2}</span><br />
                {texts.communityTitle3}
              </h2>
              <p className="text-muted-foreground mt-6 leading-relaxed">
                {texts.communityDescription}
              </p>
              <Button className="mt-8 bg-[#1f1f1f] hover:bg-[#1f1f1f]/90 text-white rounded-full px-8 group">
                {texts.joinNow}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-8 bg-white border border-gray-200 rounded-2xl hover:shadow-lg transition-shadow">
                  <div className="text-5xl md:text-6xl font-bold text-[#1f1f1f] mb-2">{stat.value}</div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 ndc-section-red">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#e11a1a] text-sm font-semibold tracking-wider uppercase flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-[#e11a1a] rounded-full"></span>
              {texts.servicesBadge}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 leading-tight">
              {texts.servicesTitle1} <span className="text-[#e11a1a]">{texts.servicesTitle2}</span> {texts.servicesTitle3}
            </h2>
            <p className="text-muted-foreground mt-6 max-w-3xl mx-auto leading-relaxed">
              {texts.servicesDescription}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              
              return (
                <div
                  key={service.id}
                  className={`group p-8 rounded-2xl transition-all duration-300 hover:shadow-xl ${
                    service.highlighted
                      ? 'bg-[#1f1f1f] text-white' 
                      : 'bg-white border border-gray-200 hover:border-[#e11a1a]/30'
                  }`}
                >
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                    service.highlighted ? 'bg-white/10' : 'bg-[#1f1f1f]/10'
                  }`}>
                    <IconComponent className={`w-8 h-8 ${service.highlighted ? 'text-white' : 'text-[#e11a1a]'}`} />
                  </div>
                  
                  <h3 className={`text-xl font-bold mb-4 ${service.highlighted ? 'text-white' : 'text-foreground'}`}>
                    {service.title}
                  </h3>
                  <p className={`text-sm mb-8 leading-relaxed ${service.highlighted ? 'text-white/80' : 'text-muted-foreground'}`}>
                    {service.description}
                  </p>
                  
                  <Link to={`/services/${service.id}`}>
                    <Button 
                      className={`rounded-full group/btn ${
                        service.highlighted
                          ? 'bg-white text-[#1f1f1f] hover:bg-white/90'
                          : 'bg-[#1f1f1f] text-white hover:bg-[#1f1f1f]/90'
                      }`}
                      size="sm"
                    >
                      {texts.discover}
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Work Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#e11a1a] text-sm font-semibold tracking-wider uppercase flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-[#e11a1a] rounded-full"></span>
              {texts.processBadge}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4">
              {texts.processTitle1} <span className="text-[#e11a1a]">{texts.processTitle2}</span> {texts.processTitle3}
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                {texts.processDescription}
              </p>
              
              <div className="relative overflow-hidden">
                <img
                  src="/images/vehicles-coal-mine-view.jpg"
                  alt={language === 'fr' ? "Processus de travail" : "Work Process"}
                  className="w-full object-cover aspect-square"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1f1f1f]/80 via-[#0a1628]/40 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
                    <p className="text-white font-semibold text-lg">{texts.trustedBy}</p>
                    <p className="text-white/80 text-sm mt-1">{texts.deliveringExcellence}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 space-y-10">
              {processSteps.map((step) => (
                <div key={step.number} className="flex gap-6">
                  <div className="text-6xl font-bold text-[#e11a1a]/20 leading-none">{step.number}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section 1 */}
      <CTAWarehouseExample />

      {/* CTA Section 2 */}
      <CTASimple
        title={texts.ctaTitle}
        description={texts.ctaDescription}
        buttonText={texts.ctaButton}
        buttonLink="/contact"
      />

      <Footer />
    </div>
  );
};

export default Services;
