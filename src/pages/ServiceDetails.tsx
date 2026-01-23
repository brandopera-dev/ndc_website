import React, { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowRight, 
  ChevronRight, 
  Shield, 
  Truck, 
  Package, 
  Clock, 
  CheckCircle2,
  Building2,
  BarChart3,
  Layers,
  Network,
  RefreshCcw,
  Globe,
  MapPin
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FaqSection from '@/components/new_components/FaqSection';
import { initScrollAnimations } from "@/utils/scrollAnimations";



const servicesData: Record<string, {
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  benefits: string[];
  features: { icon: React.ElementType; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
}> = {
  'transport-hydrocarbures': {
    title: 'Transport d\'Hydrocarbures',
    subtitle: 'Transport sécurisé de carburants et produits pétroliers',
    description: 'Solutions de transport spécialisées pour les hydrocarbures avec des citernes conformes aux normes internationales de sécurité.',
    longDescription: 'Dans le marché concurrentiel d\'aujourd\'hui, les entreprises ont besoin de solutions de transport d\'hydrocarbures sécurisées et efficaces. Notre service offre des solutions sûres, flexibles et efficaces pour transporter vos produits pétroliers en toute conformité. Avec des citernes stratégiquement positionnées, des systèmes de suivi avancés et une gestion experte, nous garantissons que vos hydrocarbures sont transportés et livrés en toute sécurité.',
    benefits: ['Économies de Coûts', 'Sécurité Maximale', 'Livraison Rapide', 'Satisfaction Client'],
    features: [
      { icon: Shield, title: 'Installations Haute Sécurité', description: 'Équipements de transport conformes aux normes ADR avec systèmes de sécurité avancés.' },
      { icon: BarChart3, title: 'Gestion des Stocks', description: 'Suivi en temps réel de vos volumes et optimisation des livraisons.' },
      { icon: Layers, title: 'Options de Stockage Flexibles', description: 'Solutions adaptées à vos besoins en termes de volume et de durée.' },
      { icon: Network, title: 'Réseau de Distribution', description: 'Couverture nationale avec des points de distribution stratégiques.' },
      { icon: Package, title: 'Exécution Efficace', description: 'Processus optimisés pour une livraison rapide et fiable.' },
      { icon: RefreshCcw, title: 'Support Logistique Inversé', description: 'Gestion complète des retours et du recyclage.' },
    ],
    faqs: [
      { question: 'Comment assurez-vous la sécurité du transport d\'hydrocarbures?', answer: 'Nos véhicules sont équipés de systèmes de sécurité avancés conformes aux normes ADR. Nos chauffeurs sont formés et certifiés pour le transport de matières dangereuses.' },
      { question: 'Pouvez-vous suivre les livraisons en temps réel?', answer: 'Oui, notre système GPS permet un suivi en temps réel de tous nos véhicules. Vous recevez des notifications à chaque étape de la livraison.' },
      { question: 'Quels types de produits pétroliers transportez-vous?', answer: 'Nous transportons tous types d\'hydrocarbures : essence, diesel, kérosène, fioul, lubrifiants et autres produits pétroliers.' },
      { question: 'Quelle est votre couverture géographique?', answer: 'Nous couvrons l\'ensemble du territoire national avec des partenaires régionaux pour les zones les plus reculées.' },
    ],
  },
  'logistique-minerale': {
    title: 'Logistique Minérale',
    subtitle: 'Solutions de transport pour minerais et matériaux',
    description: 'Transport spécialisé pour l\'industrie minière avec des équipements adaptés aux charges lourdes.',
    longDescription: 'Notre expertise dans le transport minier nous permet d\'offrir des solutions sur mesure pour le déplacement de minerais, roches et matériaux d\'extraction. Avec une flotte de véhicules lourds et des équipements spécialisés, nous garantissons un transport efficace et sécurisé de vos ressources minérales.',
    benefits: ['Équipements Spécialisés', 'Charges Lourdes', 'Fiabilité', 'Expertise Terrain'],
    features: [
      { icon: Truck, title: 'Flotte Lourde', description: 'Véhicules adaptés aux charges exceptionnelles et terrains difficiles.' },
      { icon: Shield, title: 'Sécurité Renforcée', description: 'Protocoles stricts pour le transport de matériaux sensibles.' },
      { icon: BarChart3, title: 'Suivi des Volumes', description: 'Pesage et documentation précise de chaque chargement.' },
      { icon: Network, title: 'Accès Sites Miniers', description: 'Expertise pour opérer dans les environnements miniers.' },
      { icon: Clock, title: 'Planification Optimisée', description: 'Coordination efficace des rotations et livraisons.' },
      { icon: Package, title: 'Manutention Spécialisée', description: 'Équipements de chargement et déchargement adaptés.' },
    ],
    faqs: [
      { question: 'Quels types de minerais pouvez-vous transporter?', answer: 'Nous transportons tous types de minerais : or, cuivre, fer, bauxite, manganèse et autres ressources minérales.' },
      { question: 'Pouvez-vous opérer sur des sites miniers éloignés?', answer: 'Oui, notre flotte est conçue pour opérer dans des conditions difficiles et sur des terrains non asphaltés.' },
      { question: 'Comment gérez-vous les charges exceptionnelles?', answer: 'Nous disposons de véhicules spéciaux et d\'autorisations pour le transport de charges hors normes.' },
      { question: 'Proposez-vous des contrats à long terme?', answer: 'Oui, nous offrons des contrats flexibles adaptés aux besoins des exploitations minières.' },
    ],
  },
  'gestion-supply-chain': {
    title: 'Gestion Supply Chain',
    subtitle: 'Optimisation de votre chaîne d\'approvisionnement',
    description: 'Solutions complètes pour gérer et optimiser votre chaîne logistique de bout en bout.',
    longDescription: 'Notre service de gestion de la chaîne d\'approvisionnement offre une visibilité complète et un contrôle total sur vos flux logistiques. De la planification à l\'exécution, nous optimisons chaque étape pour réduire les coûts et améliorer l\'efficacité.',
    benefits: ['Visibilité Totale', 'Réduction des Coûts', 'Optimisation', 'Intégration'],
    features: [
      { icon: BarChart3, title: 'Analytics Avancés', description: 'Tableaux de bord en temps réel pour piloter votre supply chain.' },
      { icon: Network, title: 'Intégration Systèmes', description: 'Connexion avec vos ERP et systèmes existants.' },
      { icon: Layers, title: 'Gestion des Stocks', description: 'Optimisation des niveaux de stock et prévisions.' },
      { icon: RefreshCcw, title: 'Processus Automatisés', description: 'Automatisation des tâches répétitives.' },
      { icon: Shield, title: 'Gestion des Risques', description: 'Identification et mitigation des risques supply chain.' },
      { icon: Clock, title: 'Planification Demande', description: 'Prévisions et planification de la demande.' },
    ],
    faqs: [
      { question: 'Comment intégrez-vous vos solutions à nos systèmes?', answer: 'Nous proposons des API et connecteurs pour les principaux ERP et WMS du marché.' },
      { question: 'Pouvez-vous gérer des supply chains internationales?', answer: 'Oui, notre expertise couvre les flux nationaux et internationaux.' },
      { question: 'Quel ROI peut-on attendre?', answer: 'Nos clients constatent généralement une réduction de 15-25% des coûts logistiques.' },
      { question: 'Proposez-vous de la formation?', answer: 'Oui, nous formons vos équipes à l\'utilisation de nos outils et méthodologies.' },
    ],
  },
  'transport-international': {
    title: 'Transport International',
    subtitle: 'Solutions transfrontalières en Afrique',
    description: 'Services d\'import-export et transport transfrontalier sur le continent africain.',
    longDescription: 'Notre réseau de partenaires et notre expertise des réglementations douanières nous permettent d\'offrir des solutions de transport international fluides et efficaces à travers l\'Afrique.',
    benefits: ['Expertise Douanière', 'Réseau Africain', 'Documentation', 'Fiabilité'],
    features: [
      { icon: Globe, title: 'Couverture Panafricaine', description: 'Présence dans les principaux corridors commerciaux.' },
      { icon: Shield, title: 'Conformité Douanière', description: 'Gestion complète des formalités douanières.' },
      { icon: Package, title: 'Multimodal', description: 'Combinaison route, rail et maritime selon les besoins.' },
      { icon: Clock, title: 'Délais Optimisés', description: 'Routes optimisées pour des délais réduits.' },
      { icon: BarChart3, title: 'Tracking International', description: 'Suivi de bout en bout de vos expéditions.' },
      { icon: Network, title: 'Partenaires Locaux', description: 'Réseau de partenaires fiables dans chaque pays.' },
    ],
    faqs: [
      { question: 'Quels pays couvrez-vous?', answer: 'Nous opérons dans plus de 15 pays africains avec des partenaires locaux.' },
      { question: 'Gérez-vous les formalités douanières?', answer: 'Oui, nous prenons en charge l\'ensemble des démarches administratives et douanières.' },
      { question: 'Quels sont les délais moyens?', answer: 'Les délais varient selon les destinations, généralement de 3 à 10 jours.' },
      { question: 'Proposez-vous une assurance marchandises?', answer: 'Oui, toutes nos expéditions peuvent être assurées selon la valeur déclarée.' },
    ],
  },
  'livraison-dernier-kilometre': {
    title: 'Livraison Dernier Kilomètre',
    subtitle: 'Service de livraison finale rapide',
    description: 'Solutions de livraison urbaine et périurbaine pour une expérience client optimale.',
    longDescription: 'Notre service de livraison dernier kilomètre garantit une expérience client exceptionnelle avec des livraisons rapides, flexibles et traçables jusqu\'à la porte de vos clients.',
    benefits: ['Rapidité', 'Flexibilité', 'Traçabilité', 'Satisfaction'],
    features: [
      { icon: Clock, title: 'Livraison Express', description: 'Options de livraison le jour même ou le lendemain.' },
      { icon: MapPin, title: 'Créneaux Flexibles', description: 'Choix de créneaux horaires pour vos clients.' },
      { icon: BarChart3, title: 'Suivi en Direct', description: 'Notifications temps réel pour vos destinataires.' },
      { icon: RefreshCcw, title: 'Gestion Retours', description: 'Processus simplifié pour les retours.' },
      { icon: Shield, title: 'Preuve de Livraison', description: 'Photos et signatures électroniques.' },
      { icon: Network, title: 'Couverture Urbaine', description: 'Présence dans toutes les grandes villes.' },
    ],
    faqs: [
      { question: 'Quels sont vos délais de livraison?', answer: 'Nous proposons des livraisons J+1 en standard et le jour même pour les urgences.' },
      { question: 'Pouvez-vous livrer le week-end?', answer: 'Oui, nous proposons des livraisons samedi et dimanche sur demande.' },
      { question: 'Comment gérez-vous les absences?', answer: 'Nous proposons plusieurs tentatives et des points relais partenaires.' },
      { question: 'Proposez-vous des API d\'intégration?', answer: 'Oui, notre API permet l\'intégration avec vos plateformes e-commerce.' },
    ],
  },
  'entreposage-distribution': {
    title: 'Entreposage & Distribution',
    subtitle: 'Solutions de stockage et distribution',
    description: 'Entrepôts sécurisés et services de distribution efficaces pour vos marchandises.',
    longDescription: 'Nos entrepôts modernes et notre réseau de distribution vous offrent une solution complète pour stocker et distribuer vos produits en toute sécurité. Avec des systèmes de gestion avancés, nous optimisons vos flux et réduisons vos coûts.',
    benefits: ['Sécurité', 'Efficacité', 'Flexibilité', 'Économies'],
    features: [
      { icon: Building2, title: 'Installations Sécurisées', description: 'Entrepôts équipés de systèmes de sécurité avancés.' },
      { icon: BarChart3, title: 'Gestion des Stocks', description: 'WMS performant pour un suivi précis.' },
      { icon: Layers, title: 'Stockage Flexible', description: 'Solutions adaptées à tous types de produits.' },
      { icon: Network, title: 'Réseau Distribution', description: 'Couverture nationale optimisée.' },
      { icon: Package, title: 'Préparation Commandes', description: 'Services de picking et packing efficaces.' },
      { icon: RefreshCcw, title: 'Logistique Inverse', description: 'Gestion des retours et reconditionnement.' },
    ],
    faqs: [
      { question: 'Quels types de produits pouvez-vous stocker?', answer: 'Nous stockons tous types de marchandises sèches, avec des options pour produits sensibles.' },
      { question: 'Proposez-vous du stockage court terme?', answer: 'Oui, nous offrons des solutions flexibles de quelques jours à plusieurs années.' },
      { question: 'Comment accéder à mon inventaire?', answer: 'Notre portail client vous donne une visibilité temps réel sur vos stocks.' },
      { question: 'Quel est le délai de préparation des commandes?', answer: 'Les commandes reçues avant midi sont préparées le jour même.' },
    ],
  },
  'stations-essence': {
    title: "Stations d'essence",
    subtitle: "Approvisionnement et gestion de stations-service",
    description: "Solutions pour l'alimentation, la gestion et le réassort des stations-service avec traçabilité et sécurité.",
    longDescription:
      "Nous accompagnons les opérateurs de stations-service avec des solutions fiables pour l'approvisionnement en carburants, la planification des livraisons, la traçabilité des volumes et l'optimisation des réassorts. Notre objectif : garantir la disponibilité des produits, réduire les ruptures et sécuriser l'ensemble de la chaîne.",
    benefits: ["Disponibilité", "Traçabilité", "Sécurité", "Optimisation"],
    features: [
      { icon: Shield, title: "Conformité & sécurité", description: "Protocoles de sécurité et conformité adaptés au transport et aux opérations station-service." },
      { icon: BarChart3, title: "Pilotage des volumes", description: "Suivi des livraisons, contrôle des volumes et reporting opérationnel." },
      { icon: Network, title: "Réseau de distribution", description: "Couverture multi-sites avec planification centralisée des réassorts." },
      { icon: RefreshCcw, title: "Réassort optimisé", description: "Planification des tournées et optimisation des fréquences de livraison." },
      { icon: Building2, title: "Support exploitation", description: "Accompagnement opérationnel pour assurer la continuité de service." },
      { icon: MapPin, title: "Livraison multi-sites", description: "Gestion des contraintes locales et livraisons sur plusieurs points de vente." },
    ],
    faqs: [
      { question: "Pouvez-vous livrer plusieurs stations le même jour ?", answer: "Oui, nous planifions des tournées multi-sites adaptées à vos contraintes et à vos volumes." },
      { question: "Avez-vous un suivi des livraisons ?", answer: "Oui, nous mettons en place un suivi avec traçabilité et reporting selon le service." },
      { question: "Proposez-vous des contrats récurrents ?", answer: "Oui, nous proposons des contrats d'approvisionnement avec fréquences et volumes définis." },
      { question: "Intervenez-vous sur des zones éloignées ?", answer: "Oui, selon la zone, nous adaptons le plan de transport et nous nous appuyons sur un réseau de partenaires." },
    ],
  },
};




const ServiceDetails = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const cleanup = initScrollAnimations();
    return cleanup;
  }, []);

  const redirectTo =
    serviceId === "transport-hydrocarbures"
      ? "/services/transport-hydrocarbures"
      : serviceId === "logistique-minerale"
        ? "/services/logistique-minerale"
        : serviceId === "stations-essence"
          ? "/services/stations-essence"
          : null;

  if (redirectTo) {
    return <Navigate to={redirectTo} replace />;
  }

  const service = serviceId ? servicesData[serviceId] : null;

  const serviceTheme = (() => {
    const defaultTheme = {
      accent: "#e11a1a",
      heroImage: "/images/high-angle-view-industry-factory.jpg",
      images: [
        "/images/high-angle-view-industry-factory.jpg",
        "/images/vehicles-coal-mine-view.jpg",
        "/images/large-truck-carrying-sand-platinum-mining-site-africa.jpg",
      ],
    };

    if (!serviceId) return defaultTheme;

    const themes: Record<string, typeof defaultTheme> = {
      "transport-hydrocarbures": {
        accent: "#e11a1a",
        heroImage: "/images/storage-tanks-petroleum-products.jpg",
        images: [
          "/images/storage-tanks-petroleum-products.jpg",
          "/images/high-angle-view-industry-factory.jpg",
          "/images/vehicles-coal-mine-view.jpg",
        ],
      },
      "logistique-minerale": {
        accent: "#f59e0b",
        heroImage: "/images/large-truck-carrying-sand-platinum-mining-site-africa.jpg",
        images: [
          "/images/large-truck-carrying-sand-platinum-mining-site-africa.jpg",
          "/images/vehicles-coal-mine-view.jpg",
          "/images/high-angle-view-industry-factory.jpg",
        ],
      },
      "stations-essence": {
        accent: "#22c55e",
        heroImage: "/images/vehicles-coal-mine-view.jpg",
        images: [
          "/images/vehicles-coal-mine-view.jpg",
          "/images/storage-tanks-petroleum-products.jpg",
          "/images/high-angle-view-industry-factory.jpg",
        ],
      },
    };

    return themes[serviceId] ?? defaultTheme;
  })();

  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-3xl font-bold text-foreground">Service non trouvé</h1>
          <Link to="/services" className="text-primary mt-4 inline-block hover:underline">
            Retour aux services
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const images = serviceTheme.images;

  const rootStyle = {
    ["--service-accent" as unknown as string]: serviceTheme.accent,
  } as React.CSSProperties;

  return (
    <div className="min-h-screen bg-background" style={rootStyle}>
      <Header />

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 bg-[#0a1628] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={serviceTheme.heroImage}
            alt={service.title}
            className="w-full h-full object-cover opacity-45 saturate-125 contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/80 via-[#0a1628]/90 to-[#0a1628]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center gap-2 text-sm text-white/70 mb-8">
              <Link to="/services" className="hover:text-white transition-colors">Services</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">{service.title}</span>
            </nav>

            <div
              className="inline-flex items-center justify-center gap-2 border border-white/15 bg-white/10 text-white/85 px-4 py-2 rounded-full text-sm font-semibold mb-6"
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: "var(--service-accent)" }}
              />
              {service.subtitle}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              {service.title}
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              {service.description}
            </p>
          </div>

          {/* Image Gallery */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-6xl mx-auto">
            {images.map((img, index) => (
              <div
                key={index}
                className={`relative rounded-xl overflow-hidden cursor-pointer transition-all ${
                  index === 0 ? 'col-span-2 row-span-2 aspect-square' : 'aspect-video'
                }`}
                onClick={() => setActiveImageIndex(index)}
              >
                <img
                  src={img}
                  alt={`Service image ${index + 1}`}
                  className={`w-full h-full object-cover hover:scale-105 transition-transform duration-300 ${
                    activeImageIndex === index ? "ring-2" : ""
                  }`}
                  style={activeImageIndex === index ? ({ boxShadow: "0 0 0 2px var(--service-accent)" } as React.CSSProperties) : undefined}
                />
                {index === 0 && (
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                    📷 03:09 / 05:10
                  </div>
                )}
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <span className="text-sm font-semibold tracking-wider uppercase" style={{ color: "var(--service-accent)" }}>
                ● Aperçu du Service
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-4 mb-6">
                Solutions <span style={{ color: "var(--service-accent)" }}>{service.title}</span> sécurisées et efficaces
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {service.longDescription}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Que vous ayez besoin de solutions à court terme ou de partenariats à long terme, 
                notre équipe est dédiée à soutenir vos objectifs avec fiabilité et soin.
              </p>
            </div>

            <div className="lg:w-1/2">
              <div className="bg-white border border-border rounded-2xl p-8">
                <p className="text-muted-foreground mb-6">
                  Les solutions sont idéales pour les entreprises qui souhaitent optimiser 
                  leur logistique et améliorer leur efficacité opérationnelle.
                </p>

                {/* Image Carousel Dots */}
                <div className="flex gap-2 mb-6">
                  {[0, 1, 2].map((index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImageIndex(index)}
                      className="w-3 h-3 rounded-full transition-colors"
                      style={{
                        backgroundColor: activeImageIndex === index ? "var(--service-accent)" : "hsl(var(--muted))",
                      }}
                    />
                  ))}
                </div>

                <div className="border-t border-border pt-6">
                  <h4 className="font-semibold text-foreground mb-4">Avantages</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {service.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5" style={{ color: "var(--service-accent)" }} />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link to="/contact">
                  <Button
                    className="w-full mt-6 text-white"
                    style={{ backgroundColor: "var(--service-accent)" }}
                  >
                    Demander un devis
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Feature Boxes */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="bg-muted/30 rounded-2xl p-8 border border-border">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: "color-mix(in srgb, var(--service-accent) 12%, transparent)" }}>
                <Shield className="w-6 h-6" style={{ color: "var(--service-accent)" }} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Sécurité Garantie</h3>
              <p className="text-muted-foreground">
                Entrepôts et véhicules équipés de systèmes de sécurité avancés avec 
                surveillance 24h/24 et protocoles stricts.
              </p>
            </div>
            <div className="bg-muted/30 rounded-2xl p-8 border border-border">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: "color-mix(in srgb, var(--service-accent) 12%, transparent)" }}>
                <Truck className="w-6 h-6" style={{ color: "var(--service-accent)" }} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Distribution Efficace</h3>
              <p className="text-muted-foreground">
                Réseau optimisé pour garantir des livraisons rapides avec 
                un suivi en temps réel de vos expéditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-muted/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold tracking-wider uppercase" style={{ color: "var(--service-accent)" }}>
              ● Fonctionnalités Clés
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-4">
              Arrêtez de vous inquiéter des <span style={{ color: "var(--service-accent)" }}>problèmes logistiques</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Notre équipe peut vous aider à configurer le meilleur ensemble de services 
              en fonction de vos besoins.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: "color-mix(in srgb, var(--service-accent) 12%, transparent)" }}>
                    <IconComponent className="w-6 h-6" style={{ color: "var(--service-accent)" }} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>



      {/* FAQ Section */}
      {/* <FaqSection /> */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3">
              <span
                className="text-sm font-semibold tracking-wider uppercase"
                style={{ color: "var(--service-accent)" }}
              >
                ● Questions fréquentes
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-4">
                Tout savoir sur{" "}
                <span style={{ color: "var(--service-accent)" }}>{service.title}</span>
              </h2>
              <p className="text-muted-foreground mt-4">
                Des réponses claires pour vous aider à démarrer rapidement.
              </p>
            </div>

            <div className="lg:w-2/3">
              <Accordion type="single" collapsible className="space-y-4">
                {service.faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`faq-${index}`}
                    className="bg-white border border-border rounded-xl px-6"
                  >
                    <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3">
              <span className="text-sm font-semibold tracking-wider uppercase" style={{ color: "var(--service-accent)" }}>
                ● Questions fréquentes
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-4">
                Tout savoir sur <span style={{ color: "var(--service-accent)" }}>{service.title}</span>
              </h2>
              <p className="text-muted-foreground mt-4">
                Des réponses claires pour vous aider à démarrer rapidement.
              </p>
            </div>

            <div className="lg:w-2/3">
              <Accordion type="single" collapsible className="space-y-4">
                {service.faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`faq-${index}`}
                    className="bg-white border border-border rounded-xl px-6"
                  >
                    <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section> */}
      {/* <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase">● Questions Fréquentes</span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-4">
                Questions Courantes Sur Nos Services
              </h2>
            </div>

            <div className="lg:w-2/3">
              <Accordion type="single" collapsible className="space-y-4">
                {service.faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`faq-${index}`}
                    className="bg-white border border-border rounded-xl px-6"
                  >
                    <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative rounded-3xl overflow-hidden">
            <img
              src={serviceTheme.heroImage}
              alt="CTA Background"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(10,22,40,0.95) 0%, rgba(10,22,40,0.80) 55%, color-mix(in srgb, var(--service-accent) 35%, rgba(10,22,40,0.80)) 100%)" }}></div>
            
            <div className="relative z-10 py-16 px-8 md:px-16">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 max-w-lg">
                Prêt à lancer votre projet {service.title} ?
              </h2>
              <p className="text-white/80 mb-8 max-w-md">
                Contactez notre équipe pour un devis rapide et une solution adaptée à vos contraintes.
              </p>
              <Link to="/contact">
                <Button variant="secondary" className="group">
                  Contactez-nous
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetails;
