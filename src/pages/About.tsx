import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Check, ChevronLeft, ChevronRight, ArrowRight, Play, ShieldCheck, Target, Users, ClipboardList, Route, BadgeCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {   CTAStreamlineExample } from '@/components/cta/CTAExamples';
import { CTAWithImage, CTASimple, CTAWithBackground } from '@/components/cta';
import ServicesGridSection from '@/components/new_components/ServicesGridSection';
import PageHero from '@/components/PageHero';
import { useI18n } from '@/i18n/I18nProvider';
import { initScrollAnimations } from '@/utils/scrollAnimations';

const About = () => {
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const { t } = useI18n();

  useEffect(() => {
    const cleanup = initScrollAnimations();
    return cleanup;
  }, []);

  const stats = [
    { value: '25', label: 'Years in Service' },
    { value: '99%', label: 'On-Time Delivery Rate' },
    { value: '500+', label: 'Successful Delivery' },
    { value: '300+', label: 'Team Experts We Have' },
  ];

  const freightImages = [
    '/images/high-angle-view-industry-factory.jpg',
    '/images/large-truck-carrying-sand-platinum-mining-site-africa.jpg',
    '/images/freepik__ajouter-la-benne-de-limage-img2-dans-le-sens-oppos__28742.jpeg',
    '/images/vehicles-coal-mine-view.jpg',
  ];

  const features = [
    'Reliability',
    'Efficiency',
    'Customer Focus',
    'Sustainability',
  ];

  const galleryImages = [
    '/images/high-angle-view-industry-factory.jpg',
    '/images/large-truck-carrying-sand-platinum-mining-site-africa.jpg',
    '/images/storage-tanks-petroleum-products.jpg',
    '/images/vehicles-coal-mine-view.jpg',
  ];

  const milestones = [
    { year: '2008', title: 'Founded', description: 'Started with a vision to revolutionize logistics in Africa' },
    { year: '2012', title: 'Expansion', description: 'Opened new logistics routes across the continent' },
    { year: '2016', title: 'Innovation', description: 'Launched advanced Fuel Management solutions' },
    { year: '2020', title: 'Growth', description: 'Established major strategic partnerships' },
    { year: '2024', title: 'Leadership', description: 'Became the regional leader in logistics services' },
  ];

  const teamMembers = [
    { name: 'James May', role: 'CEO & Founder', image: '/images/Social Media Size/NDC--de-KATI101-sm.jpg' },
    { name: 'Emily Tran', role: 'Chief Operations Officer', image: '/images/Social Media Size/NDC--de-KATI107-sm.jpg' },
    { name: 'Mark Douglas', role: 'Head of Logistics', image: '/images/Social Media Size/NDC--de-KATI121-sm.jpg' },
    { name: 'Alex Kim', role: 'Chief Technology Officer', image: '/images/Social Media Size/NDC--de-KATI131-1-sm.jpg' },
  ];

  const missions = [
    {
      title: 'GARANTIR',
      icon: ShieldCheck,
      description:
        "Aux industries minières et de la cimenterie un maintien de l’approvisionnement en hydrocarbures.",
    },
    {
      title: 'OFFRIR',
      icon: Target,
      description:
        "Une palette de solutions logistiques adaptée aux contraintes opérationnelles du client, avec une approche pragmatique orientée performance, dans le respect des règles de Conformité, de Fiabilité et de Sécurité.",
    },
    {
      title: 'INTERVENIR',
      icon: Users,
      description:
        "En tant que partenaire technique capable de sécuriser les flux critiques et de réduire les risques de perturbation et d’interruption d’activité.",
    },
  ];

  const opsPrinciples = [
    {
      title: 'DISPONIBILITÉ',
      icon: Route,
      description:
        "Capacité à fournir et à opérer de façon continue, en rapport avec les besoins d’exploitation.",
    },
    {
      title: 'FIABILITÉ',
      icon: ShieldCheck,
      description:
        "Engagement sur la qualité du service, la régularité des livraisons et la robustesse des infrastructures.",
    },
    {
      title: 'TRAÇABILITÉ',
      icon: ClipboardList,
      description:
        "Suivi des volumes, des mouvements de fuel, des flux de matériaux et des dossiers de transit.",
    },
    {
      title: 'SÉCURITÉ',
      icon: BadgeCheck,
      description:
        "Conception et opération selon des standards HSE stricts, réduction des risques d’incident et de pollution.",
    },
    {
      title: 'CONFORMITÉ',
      icon: Check,
      description:
        "Respect des réglementations locales, des normes environnementales et des exigences des donneurs d’ordre.",
    },
    {
      title: 'RESPONSABILITÉ UNIQUE',
      icon: Users,
      description:
        "Un seul partenaire responsable de l’ensemble de la chaîne hydrocarbure–transport–transit.",
    },
  ];

  const nextSlide = () => {
    setCurrentGalleryIndex((prev) => (prev + 1) % (galleryImages.length - 2));
  };

  const prevSlide = () => {
    setCurrentGalleryIndex((prev) => (prev - 1 + galleryImages.length - 2) % (galleryImages.length - 2));
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
        badgeText={t('hero.about.badge')}
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
                • QUI SOMMES-NOUS
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Nous Sommes Spécialisés dans les{' '}
                <span className="text-[#e11a1a]">Services Logistiques</span> de Bout en Bout
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Notre équipe dédiée travaille sans relâche pour fournir des solutions logistiques 
                fiables pour les entreprises de toutes tailles, vous aidant à atteindre vos 
                objectifs avec rapidité et fiabilité.
              </p>

              <div className="bg-gray-50 border-l-4 border-[#e11a1a] p-4 mb-8">
                <p className="text-gray-700 italic">
                  Nous simplifions la logistique avec une technologie avancée, afin que vous 
                  puissiez vous concentrer sur la croissance de votre entreprise.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="/images/storage-tanks-petroleum-products.jpg"
                  alt="Infrastructure NDC"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6">
                <div className="space-y-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#e11a1a]/10 flex items-center justify-center">
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

      <section className="py-20 ndc-section-red scroll-animate">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="hidden lg:block absolute -left-1 top-24">
            <div className="ndc-vertical-label text-white/80 text-sm">
              CONTEXTE
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-white/90 text-sm font-semibold tracking-wider uppercase mb-4">
                • UN RÔLE CLÉ
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Un rôle clé auprès des mines et industrie
              </h2>
              <p className="mt-6 text-white/80 leading-relaxed">
                L’industrie minière malienne est caractérisée par des activités opérationnelles étroitement liées à la disponibilité d’une
                source d’énergie stable ainsi qu’à une maîtrise parfaite de la chaîne d’approvisionnement des matières premières, des
                consommables, des engins de manutention et des pièces de rechanges.
              </p>
              <p className="mt-5 text-white/80 leading-relaxed">
                Dans ce contexte dynamique et exigeant, chaque interruption imprévue, chaque retard d’approvisionnement ou chaque
                blocage administratif dans les formalités de transit peut entraîner des répercussions considérables tant sur le plan
                financier qu’opérationnel.
              </p>
              <div className="mt-6 rounded-2xl border border-white/20 bg-white/10 p-6 ">
                <p className="text-white/90 leading-relaxed">
                  C'est de ces contraintes que <span className="font-bold text-white">NDC Énergie</span> a pris naissance.
                </p>
              </div>
            </div>

            <div>
              <p className="text-white/90 text-sm font-semibold tracking-wider uppercase mb-4">
                • NOTRE MISSION
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Nous avons pour mission
              </h3>
              <div className="mt-6 space-y-5">
                {missions.map((m) => (
                  <div key={m.title} className="rounded-3xl border border-white/20 bg-white/10 p-7  hover:bg-white/15 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-white">
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

      <section className="py-20 bg-white scroll-animate">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-12">
            <div>
              <p className="text-[#e11a1a] text-sm font-semibold tracking-wider uppercase mb-4">
                • MODELE OPS
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Notre modèle opérationnel
              </h2>
              <p className="mt-5 text-gray-600 leading-relaxed max-w-2xl">
                Pour un acteur minier, travailler avec NDC Énergie, ce n’est pas additionner des prestataires, c’est s’appuyer sur un modèle intégré.
              </p>
            </div>
            <div className="rounded-3xl border border-gray-200 bg-gray-50 p-7  max-w-xl">
              <p className="text-sm font-bold text-gray-900">En pratique :</p>
              <ul className="mt-4 space-y-2 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#e11a1a]" />
                  Capacité à adapter nos solutions en fonction de l’évolution des projets
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#e11a1a]" />
                  Mise en place de procédures et de SLA clairs
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#e11a1a]" />
                  Mise en place de KPI et reporting
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#e11a1a]" />
                  Points de contrôle et d’amélioration continue
                </li>
              </ul>
            </div>
          </div>

          <p className="text-sm font-bold text-gray-900">Nos principes opérationnels :</p>
          <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6 scroll-animate">
            {opsPrinciples.map((p) => (
              <div key={p.title} className="rounded-3xl border border-gray-200 bg-white p-7  hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#e11a1a]/10 flex items-center justify-center text-[#e11a1a]">
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
                • GALERIE
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Notre Flotte en <span className="text-[#e11a1a] italic">Action:</span> Notre
                <br />
                <span className="italic">Parcours</span> Logistique
              </h2>
            </div>
            <p className="text-gray-600 max-w-md mt-4 lg:mt-0 text-sm">
              "Un aperçu du parcours de notre flotte, où chaque étape est soigneusement 
              gérée pour la précision, la rapidité et la fiabilité."
            </p>
          </div>

          <div className="relative">
            <div className="flex gap-4 overflow-hidden">
              {galleryImages.slice(currentGalleryIndex, currentGalleryIndex + 3).map((image, index) => (
                <div key={index} className="flex-1 min-w-0">
                  <div className="rounded-2xl overflow-hidden h-[250px]">
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
              • JALONS
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Notre Histoire Depuis la Création
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
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
      
      {/* <ServicesGridSection /> */}

      {/* Team Section */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#e11a1a] text-sm font-semibold tracking-wider uppercase mb-4">
                • NOTRE ÉQUIPE
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
                Experts Logistiques
                <br />
                <span className="text-[#e11a1a] italic">Engagés</span> à Assurer
                <br />
                Votre Succès
              </h2>
              <button className="flex items-center gap-2 text-gray-700 hover:text-[#e11a1a] transition-colors group">
                <span className="font-medium">Rejoignez-nous</span>
                <div className="w-8 h-8 rounded-full border border-gray-300 group-hover:border-[#e11a1a] flex items-center justify-center transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>
            </div>

            <div className="space-y-6">
              {teamMembers.map((member, index) => (
                <div key={index} className="flex items-center gap-6 bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors">
                  <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{member.name}</h3>
                    <p className="text-gray-600 text-sm">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <CTAWithImage
        title="Let Our Team Handle your Cargo with Care"
        description="Our experienced team ensures your cargo is handled with the utmost care, providing safe and timely delivery every step of the way."
        buttonText="Get a Quote"
        buttonLink="/contact"
        imageSrc="/images/large-truck-carrying-sand-platinum-mining-site-africa.jpg"
        imagePosition="left"
      />

      <Footer />
    </div>
  );
};

export default About;