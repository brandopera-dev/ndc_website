import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Check, ChevronLeft, ChevronRight, ArrowRight, Play, ShieldCheck, Target, Users, ClipboardList, Route, BadgeCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CTAStreamlineExample } from '@/components/cta/CTAExamples';
import { CTAWithImage, CTASimple, CTAWithBackground } from '@/components/cta';
import ServicesGridSection from '@/components/new_components/ServicesGridSection';
import PageHero from '@/components/PageHero';
import { useI18n } from '@/i18n/I18nProvider';
import { initScrollAnimations } from '@/utils/scrollAnimations';

const About = () => {
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const { t, language } = useI18n();

  useEffect(() => {
    const cleanup = initScrollAnimations();
    return cleanup;
  }, []);

  const stats = language === "fr" ? [
    { value: '16', label: 'Années d\'expérience' },
    { value: '94%', label: 'Taux de réussites des opérations' },
    { value: '18 000+', label: 'Personnes impactées par nos oeuvres sociales' },
    { value: '50+', label: 'Experts dans notre équipe' },
  ] : [
    { value: '16', label: 'Years of experience' },
    { value: '94%', label: 'Operations success rate' },
    { value: '18,000+', label: 'People impacted by our social work' },
    { value: '50+', label: 'Experts in our team' },
  ];

  const features = language === "fr" 
    ? ['Fiabilité', 'Efficacité', 'Orientation client', 'Durabilité']
    : ['Reliability', 'Efficiency', 'Customer focus', 'Sustainability'];

  const galleryImages = [
    '/images/images_ndc/TRANSPORT/TR_1.webp',
    '/images/images_ndc/TRANSPORT/TR_6.webp',
    '/images/images_ndc/FUEL/1F.jpg',
    '/images/images_ndc/FUEL/2F.jpg',
    '/images/images_ndc/RESEAUX/NDC  de KATI101 copy.jpg',
    '/images/images_ndc/RESEAUX/NDC  de KATI137 copy.jpg',
    '/images/images_ndc/Bureaux/B-1.png',
    '/images/images_ndc/Bureaux/B-2.png',
    '/images/images_ndc/GARAGE/G_1.webp',
  ];

  const milestones = language === "fr" ? [
    { year: '2008', title: 'Fondation', description: 'Démarré avec une vision de révolutionner le secteur des hydrocarbures et de la logistique au Mali' },
    { year: '2012', title: 'Expansion', description: 'Ouverture de nouvelles routes logistiques à travers le continent africain' },
    { year: '2015', title: 'Innovation', description: 'Lancement de solutions avancées de Fuel Management' },
    { year: '2020', title: 'Croissance', description: 'Établissement de partenariats stratégiques majeurs' },
    { year: '2022', title: 'Leadership', description: 'Devenu le leader régional en importation de produits pétroliers' },
  ] : [
    { year: '2008', title: 'Foundation', description: 'Started with a vision to revolutionize the hydrocarbons and logistics sector in Mali' },
    { year: '2012', title: 'Expansion', description: 'Opening new logistics routes across the African continent' },
    { year: '2015', title: 'Innovation', description: 'Launch of advanced Fuel Management solutions' },
    { year: '2020', title: 'Growth', description: 'Establishment of major strategic partnerships' },
    { year: '2022', title: 'Leadership', description: 'Became the regional leader in petroleum product imports' },
  ];

  const missions = language === "fr" ? [
    {
      title: 'GARANTIR',
      icon: ShieldCheck,
      description: "Aux industriels, un maintien de l'approvisionnement en hydrocarbures.",
    },
    {
      title: 'OFFRIR',
      icon: Target,
      description: "Une palette de solutions logistiques adaptée aux contraintes opérationnelles du client, avec une approche pragmatique orientée performance, dans le respect des règles de Conformité, de Fiabilité et de Sécurité.",
    },
    {
      title: 'INTERVENIR',
      icon: Users,
      description: "En tant que partenaire technique capable de sécuriser les flux critiques et de réduire les risques de perturbation et d'interruption d'activité.",
    },
  ] : [
    {
      title: 'GUARANTEE',
      icon: ShieldCheck,
      description: "To industrials, maintaining hydrocarbon supply.",
    },
    {
      title: 'OFFER',
      icon: Target,
      description: "A range of logistics solutions adapted to the client's operational constraints, with a pragmatic performance-oriented approach, respecting Compliance, Reliability and Safety rules.",
    },
    {
      title: 'INTERVENE',
      icon: Users,
      description: "As a technical partner capable of securing critical flows and reducing risks of disruption and business interruption.",
    },
  ];

  const opsPrinciples = language === "fr" ? [
    { title: 'DISPONIBILITÉ', icon: Route, description: "Capacité à fournir et à opérer de façon continue, en rapport avec les besoins d'exploitation." },
    { title: 'FIABILITÉ', icon: ShieldCheck, description: "Engagement sur la qualité du service, la régularité des livraisons et la robustesse des infrastructures." },
    { title: 'TRAÇABILITÉ', icon: ClipboardList, description: "Suivi des volumes, des mouvements de fuel, des flux de matériaux et des dossiers de transit." },
    { title: 'SÉCURITÉ', icon: BadgeCheck, description: "Conception et opération selon des standards HSE stricts, réduction des risques d'incident et de pollution." },
    { title: 'CONFORMITÉ', icon: Check, description: "Respect des réglementations locales, des normes environnementales et des exigences des donneurs d'ordre." },
    { title: 'RESPONSABILITÉ UNIQUE', icon: Users, description: "Un seul partenaire responsable de l'ensemble de la chaîne Hydrocarbures–Transport–Transit." },
  ] : [
    { title: 'AVAILABILITY', icon: Route, description: "Ability to provide and operate continuously, in line with operational needs." },
    { title: 'RELIABILITY', icon: ShieldCheck, description: "Commitment to service quality, delivery regularity and infrastructure robustness." },
    { title: 'TRACEABILITY', icon: ClipboardList, description: "Tracking of volumes, fuel movements, material flows and transit files." },
    { title: 'SAFETY', icon: BadgeCheck, description: "Design and operation according to strict HSE standards, reducing incident and pollution risks." },
    { title: 'COMPLIANCE', icon: Check, description: "Compliance with local regulations, environmental standards and client requirements." },
    { title: 'SINGLE RESPONSIBILITY', icon: Users, description: "A single partner responsible for the entire Hydrocarbons-Transport-Transit chain." },
  ];

  const practiceItems = language === "fr" 
    ? [
        "Capacité à adapter nos solutions en fonction de l'évolution des projets",
        "Mise en place de procédures et de SLA clairs",
        "Mise en place de KPI et reporting",
        "Points de contrôle et d'amélioration continue"
      ]
    : [
        "Ability to adapt our solutions according to project evolution",
        "Implementation of clear procedures and SLAs",
        "Implementation of KPIs and reporting",
        "Control points and continuous improvement"
      ];

  const nextSlide = () => {
    setCurrentGalleryIndex((prev) => (prev + 1) % (galleryImages.length - 2));
  };

  const prevSlide = () => {
    setCurrentGalleryIndex((prev) => (prev - 1 + galleryImages.length - 2) % (galleryImages.length - 2));
  };

  // Translations
  const whoWeAre = {
    badge: language === "fr" ? "• QUI SOMMES-NOUS" : "• WHO WE ARE",
    title: language === "fr" ? "Nous Sommes Spécialisés dans : " : "We Specialize in:",
    bullets: language === "fr" ? [
      "L'importation et la distribution d'hydrocarbures",
      "La conception, la construction, l'exploitation, la maintenance de systèmes de stockage d'hydrocarbures et le Fuel Management",
      "Le transport transfrontalier et le transit"
    ] : [
      "Import and distribution of hydrocarbons",
      "Design, construction, operation, maintenance of hydrocarbon storage systems and Fuel Management",
      "Cross-border transport and transit"
    ],
    quote: language === "fr" 
      ? "Nous plaçons la valorisation des ressources humaines au cœur de notre stratégie à travers laquelle nos Femmes et hommes engagés, contribuent à bâtir une vision ambitieuse et durable."
      : "We place the development of human resources at the heart of our strategy through which our committed women and men contribute to building an ambitious and sustainable vision.",
  };

  const context = {
    verticalLabel: language === "fr" ? "CONTEXTE" : "CONTEXT",
    badge: language === "fr" ? "• UN RÔLE CLÉ" : "• A KEY ROLE",
    title: language === "fr" ? "Un rôle clé auprès des mines et industrie" : "A key role with mines and industry",
    paragraph1: language === "fr" 
      ? "L'industrie minière malienne est caractérisée par des activités opérationnelles étroitement liées à la disponibilité d'une source d'énergie stable ainsi qu'à une maîtrise parfaite de la chaîne d'approvisionnement des matières premières, des consommables, des engins de manutention et des pièces de rechanges."
      : "The Malian mining industry is characterized by operational activities closely linked to the availability of a stable energy source as well as perfect control of the supply chain for raw materials, consumables, handling equipment and spare parts.",
    paragraph2: language === "fr"
      ? "Dans ce contexte dynamique et exigeant, chaque interruption imprévue, chaque retard d'approvisionnement ou chaque blocage administratif dans les formalités de transit peut entraîner des répercussions considérables tant sur le plan financier qu'opérationnel."
      : "In this dynamic and demanding context, each unexpected interruption, supply delay or administrative blockage in transit formalities can have considerable financial and operational repercussions.",
    highlight: language === "fr" 
      ? "C'est de ces contraintes que NDC Énergie a pris naissance."
      : "It is from these constraints that NDC Energy was born.",
    missionBadge: language === "fr" ? "• NOTRE MISSION" : "• OUR MISSION",
    missionTitle: language === "fr" ? "Nous avons pour mission" : "Our mission is to",
  };

  const opsModel = {
    badge: language === "fr" ? "• MODELE OPS" : "• OPS MODEL",
    title: language === "fr" ? "Notre modèle opérationnel" : "Our operational model",
    subtitle: language === "fr" 
      ? "Travailler avec NDC Énergie, ce n'est pas additionner des prestataires, c'est s'appuyer sur un modèle intégré."
      : "Working with NDC Energy is not about adding service providers, it's about relying on an integrated model.",
    practiceTitle: language === "fr" ? "En pratique :" : "In practice:",
    principlesTitle: language === "fr" ? "Nos principes opérationnels :" : "Our operational principles:",
  };

  const gallery = {
    badge: language === "fr" ? "• GALERIE" : "• GALLERY",
    title: language === "fr" ? "NDC Énergie en" : "NDC Energy in",
    titleHighlight: "Action",
  };

  const timeline = {
    badge: language === "fr" ? "• JALONS" : "• MILESTONES",
    title: language === "fr" ? "Notre Histoire Depuis la Création" : "Our History Since Creation",
  };

  const ctaTexts = {
    title: language === "fr" ? "Laissez notre équipe gérer votre cargaison avec soin" : "Let our team handle your cargo with care",
    description: language === "fr" 
      ? "Notre équipe expérimentée garantit que votre cargaison est traitée avec le plus grand soin, assurant une livraison sûre et ponctuelle à chaque étape."
      : "Our experienced team ensures your cargo is handled with the utmost care, ensuring safe and timely delivery at every step.",
    button: language === "fr" ? "Demander un devis" : "Request a quote",
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <PageHero
        backgroundImage="/images/large-truck-carrying-sand-platinum-mining-site-africa.jpg"
        backgroundAlt="About NDC"
        breadcrumb={[
          { label: t('nav.home'), to: '/' },
          { label: t('nav.about') },
        ]}
        badgeDotClassName="bg-[#e11a1a]"
        title={t('hero.about.title')}
        description={t('hero.about.description')}
        primaryAction={{
          to: '/services',
          label: t('hero.about.primaryCta'),
        }}
        secondaryAction={{
          to: '/contact',
          label: t('hero.about.secondaryCta'),
          variant: 'outline',
        }}
      />

      {/* Who We Are Section */}
      <section className="py-20 bg-white scroll-animate">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#e11a1a] text-sm font-semibold tracking-wider uppercase mb-4">
                {whoWeAre.badge}
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                {whoWeAre.title}
              </h2>
              <ul className="text-gray-600 mb-6 leading-relaxed space-y-2">
                {whoWeAre.bullets.map((bullet, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-[#e11a1a] mt-1">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-gray-50 border-l-4 border-[#e11a1a] p-4 mb-8">
                <p className="text-gray-700 italic">
                  {whoWeAre.quote}
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden">
                <img
                  src="/images/images_ndc/Bureaux/B-1.png"
                  alt="Bureaux NDC Énergie"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6">
                <div className="space-y-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#1f1f1f]/10 flex items-center justify-center">
                        <Check className="w-3 h-3 text-[#e11a1a]" />
                      </div>
                      <span className="text-gray-700 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Context & Mission Section */}
      <section className="py-20 ndc-section-red scroll-animate">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="hidden lg:block absolute -left-1 top-24">
            <div className="ndc-vertical-label text-white/80 text-sm">
              {context.verticalLabel}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-white/90 text-sm font-semibold tracking-wider uppercase mb-4">
                {context.badge}
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                {context.title}
              </h2>
              <p className="mt-6 text-white/80 leading-relaxed">
                {context.paragraph1}
              </p>
              <p className="mt-5 text-white/80 leading-relaxed">
                {context.paragraph2}
              </p>
              <div className="mt-6 rounded-2xl border border-white/20 bg-white/10 p-6">
                <p className="text-white/90 leading-relaxed">
                  {context.highlight.split("NDC Énergie")[0]}<span className="font-bold text-white">NDC Énergie</span>{context.highlight.split("NDC Énergie")[1] || context.highlight.split("NDC Energy")[1]}
                </p>
              </div>
            </div>

            <div>
              <p className="text-white/90 text-sm font-semibold tracking-wider uppercase mb-4">
                {context.missionBadge}
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                {context.missionTitle}
              </h3>
              <div className="mt-6 space-y-5">
                {missions.map((m) => (
                  <div key={m.title} className="rounded-3xl border border-white/20 bg-white/10 p-7 hover:bg-white/15 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 flex items-center justify-center text-white">
                        <m.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-xs font-extrabold tracking-widest text-white">
                          {m.title}
                        </p>
                        <p className="mt-2 text-white/80 leading-relaxed">
                          {m.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Model Section */}
      <section className="py-20 bg-white scroll-animate">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-12">
            <div>
              <p className="text-[#e11a1a] text-sm font-semibold tracking-wider uppercase mb-4">
                {opsModel.badge}
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {opsModel.title}
              </h2>
              <p className="mt-5 text-gray-600 leading-relaxed max-w-2xl">
                {opsModel.subtitle}
              </p>
            </div>
            <div className="rounded-3xl border border-gray-200 bg-gray-50 p-7 max-w-xl">
              <p className="text-sm font-bold text-gray-900">{opsModel.practiceTitle}</p>
              <ul className="mt-4 space-y-2 text-gray-700 text-sm">
                {practiceItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#e11a1a]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-sm font-bold text-gray-900">{opsModel.principlesTitle}</p>
          <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6 scroll-animate">
            {opsPrinciples.map((p) => (
              <div key={p.title} className="rounded-3xl border border-gray-200 bg-white p-7 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center text-[#e11a1a]">
                    <p.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-extrabold text-gray-900 tracking-wide">{p.title}</p>
                    <p className="mt-2 text-gray-600 text-sm leading-relaxed">{p.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 section-dark scroll-animate">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 scroll-animate">
            {stats.map((stat, index) => (
              <div key={index} className="text-center hover:scale-110 transition-transform cursor-pointer">
                <p className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-white/70 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white scroll-animate">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
            <div>
              <p className="text-[#e11a1a] text-sm font-semibold tracking-wider uppercase mb-4">
                {gallery.badge}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                {gallery.title} <span className="text-[#e11a1a] italic">{gallery.titleHighlight}</span>
              </h2>
            </div>
          </div>

          <div className="relative">
            <div className="flex gap-4 overflow-hidden">
              {galleryImages.slice(currentGalleryIndex, currentGalleryIndex + 3).map((image, index) => (
                <div key={index} className="flex-1 min-w-0">
                  <div className="overflow-hidden h-[250px]">
                    <img
                      src={image}
                      alt={`Galerie ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-end gap-2 mt-6">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-[#e11a1a] flex items-center justify-center hover:bg-red-700 transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 ndc-section-red">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-white/90 text-sm font-semibold tracking-wider uppercase mb-4">
              {timeline.badge}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {timeline.title}
            </h2>
          </div>

          <div className="relative">
            <div className="absolute top-6 left-0 right-0 h-0.5 bg-white/20">
              <div className="absolute top-0 left-0 h-full bg-white" style={{ width: '100%' }} />
            </div>

            <div className="grid grid-cols-5 gap-4">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative text-center">
                  <div className="w-12 h-12 mx-auto bg-white border-4 border-white rounded-full flex items-center justify-center mb-4 relative z-10">
                    <span className="text-[#e11a1a] font-bold text-xs">{milestone.year}</span>
                  </div>
                  <h3 className="font-bold text-white text-sm mb-1">{milestone.title}</h3>
                  <p className="text-white/80 text-xs">{milestone.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTAWithImage
        title={ctaTexts.title}
        description={ctaTexts.description}
        buttonText={ctaTexts.button}
        buttonLink="/contact"
        imageSrc="/images/images_ndc/TRANSPORT/TR_1.webp"
        imagePosition="left"
      />

      <Footer />
    </div>
  );
};

export default About;
