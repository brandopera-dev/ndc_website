import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Camera,
  CheckCircle2,
  MapPin,
  Network,
  ShieldCheck,
  Truck,
  X,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { initScrollAnimations } from "@/utils/scrollAnimations";
import { useI18n } from "@/i18n/I18nProvider";

const TransportTransit = () => {
  const { t, language } = useI18n();

  useEffect(() => {
    const cleanup = initScrollAnimations();
    return cleanup;
  }, []);

  const gallery =  [
    { src: "/images/images_ndc/TRANSPORT/TR_1.webp", label: "Flotte NDC" },
    { src: "/images/images_ndc/TRANSPORT/TR_2.webp", label: "Camion citerne" },
    { src: "/images/images_ndc/TRANSPORT/TR_3.webp", label: "Convoi routier" },
    { src: "/images/images_ndc/TRANSPORT/TR_4.webp", label: "Livraison carburant" },
    { src: "/images/images_ndc/TRANSPORT/TR_5.webp", label: "Transport sécurisé" },
    { src: "/images/images_ndc/TRANSPORT/TR_6.webp", label: "Véhicules NDC" },
    { src: "/images/images_ndc/TRANSPORT/TR_7.webp", label: "Opérations terrain" },
    { src: "/images/images_ndc/TRANSPORT/TR_8.webp", label: "Logistique" },
    { src: "/images/images_ndc/TRANSPORT/TR_9.webp", label: "Corridor transport" },
    { src: "/images/images_ndc/TRANSPORT/TR_10.webp", label: "Transport hydrocarbures" },
    { src: "/images/images_ndc/CITERNE/C_1.webp", label: "Citerne NDC"},
    { src: "/images/images_ndc/CITERNE/C_2.webp", label: "Équipement citerne" },
    { src: "/images/images_ndc/CHAUFFEURS/CF-1.webp", label: "Équipe chauffeurs" },
    { src: "/images/images_ndc/CHAUFFEURS/CF_2.webp", label: "Chauffeurs professionnels" },
    { src: "/images/images_ndc/GARAGE/G_1.webp", label: "Atelier maintenance" },
    { src: "/images/images_ndc/GARAGE/G_2.webp", label: "Atelier maintenance" },
    { src: "/images/images_ndc/GARAGE/G_3.webp", label: "Équipements garage" },
  ];

  const [selectedImage, setSelectedImage] = useState<{ src: string; label: string } | null>(null);

  const points = language === "fr" ? [
    "Organisation des flux et planification des rotations",
    "Sécurisation des trajets et coordination opérationnelle",
    "Opérations adaptées aux contraintes terrain (sites éloignés)",
    "Reporting et amélioration continue",
  ] : [
    "Flow organization and rotation planning",
    "Route security and operational coordination",
    "Operations adapted to field constraints (remote sites)",
    "Reporting and continuous improvement",
  ];

  const faqs = language === "fr" ? [
    { q: "Pouvez-vous opérer sur des pistes / zones éloignées ?", a: "Oui. Nous adaptons le plan de transport aux contraintes terrain et aux accès site." },
    { q: "Comment sécurisez-vous les convois ?", a: "Par la planification, des procédures HSE, des contrôles, et une coordination opérationnelle continue." },
    { q: "Proposez-vous des contrats long terme ?", a: "Oui. Nos contrats s'adaptent à l'évolution des projets, avec des SLA/KPI et un reporting." },
    { q: "Gérez-vous également le transit ?", a: "Selon le périmètre, nous pouvons intégrer les dossiers de transit pour réduire les délais et les blocages." },
  ] : [
    { q: "Can you operate on tracks / remote areas?", a: "Yes. We adapt the transport plan to terrain constraints and site access." },
    { q: "How do you secure convoys?", a: "Through planning, HSE procedures, controls, and continuous operational coordination." },
    { q: "Do you offer long-term contracts?", a: "Yes. Our contracts adapt to project evolution, with SLA/KPIs and reporting." },
    { q: "Do you also handle transit?", a: "Depending on scope, we can integrate transit files to reduce delays and blockages." },
  ];

  const texts = {
    hero: {
      breadcrumb: t("hero.transportTransit.breadcrumb"),
      title: t("hero.transportTransit.title"),
      description: t("hero.transportTransit.description"),
      quoteBtn: t("hero.transportTransit.quoteBtn"),
      fuelBtn: t("hero.transportTransit.fuelBtn"),
    },
    terrain: {
      badge: language === "fr" ? "• Spécificités terrain" : "• Field specifics",
      title: language === "fr" ? "Un rôle clé auprès des mines et industries" : "A key role with mines and industries",
      description: language === "fr" 
        ? "Chaque interruption imprévue, retard d'approvisionnement ou blocage administratif peut impacter fortement la performance d'exploitation. Notre approche vise à réduire ces risques et à rendre les flux plus prévisibles."
        : "Every unexpected interruption, supply delay or administrative blockage can strongly impact operational performance. Our approach aims to reduce these risks and make flows more predictable.",
      fleet: {
        title: language === "fr" ? "Flotte dédiée" : "Dedicated fleet",
        description: language === "fr" ? "Capacités adaptées aux rotations et aux contraintes d'accès." : "Capacities adapted to rotations and access constraints.",
      },
      security: {
        title: language === "fr" ? "Sécurité des flux" : "Flow security",
        description: language === "fr" ? "Planification, procédures HSE et points de contrôle." : "Planning, HSE procedures and checkpoints.",
      },
      benefitsTitle: language === "fr" ? "Ce que vous gagnez" : "What you gain",
      zonesTitle: language === "fr" ? "Zones d'intervention" : "Intervention zones",
      zonesDescription: language === "fr" ? "Corridors miniers, zones industrielles, dépôts et plateformes logistiques." : "Mining corridors, industrial zones, depots and logistics platforms.",
      contactBtn: language === "fr" ? "Contacter" : "Contact",
      reseauxBtn: language === "fr" ? "Réseaux de distribution" : "Distribution networks",
    },
    gallery: {
      badge: language === "fr" ? "Galerie photos" : "Photo gallery",
      title1: language === "fr" ? "Notre flotte" : "Our fleet",
      title2: language === "fr" ? "& nos opérations" : "& our operations",
      description: language === "fr" 
        ? "Découvrez notre flotte de transport, nos équipes de chauffeurs professionnels et nos opérations sur le terrain."
        : "Discover our transport fleet, our professional driver teams and our field operations.",
      photoCount: language === "fr" ? "photos" : "photos",
      clickToEnlarge: language === "fr" ? "Cliquez pour agrandir" : "Click to enlarge",
    },
    faq: {
      badge: "FAQ",
      title: language === "fr" ? "Questions fréquentes" : "Frequently asked questions",
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="relative pt-28 pb-16 bg-[#1f1f1f] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/images_ndc/TRANSPORT/TR_5.webp"
            alt="Transport transit"
            className="w-full h-full object-cover opacity-45 saturate-125 contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/10" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <nav className="flex items-center justify-center gap-2 text-sm text-white/70 mb-8">
              <Link to="/services" className="hover:text-white transition-colors">
                Services
              </Link>
              <span className="text-white/50">/</span>
              <span className="text-white">{texts.hero.breadcrumb}</span>
            </nav>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              {texts.hero.title}
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              {texts.hero.description}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/contact">
                <Button className="bg-[#e11a1a] hover:bg-red-700 text-white rounded-xl px-8 py-6 font-semibold inline-flex items-center gap-2">
                  {texts.hero.quoteBtn}
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/services/fuel-management">
                <Button variant="outline" className="border-white/25 text-white hover:bg-white/10 rounded-xl px-8 py-6 font-semibold">
                  {texts.hero.fuelBtn}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 ndc-section-red scroll-animate">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <p className="text-white/90 text-sm font-semibold tracking-wider uppercase">{texts.terrain.badge}</p>
              <h2 className="text-2xl md:text-3xl font-bold text-white mt-4">
                {texts.terrain.title}
              </h2>
              <p className="text-white/80 leading-relaxed mt-5">
                {texts.terrain.description}
              </p>

              <div className="mt-7 grid sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/20 bg-white/10 p-5 hover:bg-white/15 transition-all">
                  <div className="w-11 h-11 rounded-2xl bg-white/20 flex items-center justify-center text-white">
                    <Truck className="w-5 h-5" />
                  </div>
                  <p className="mt-4 font-bold text-white">{texts.terrain.fleet.title}</p>
                  <p className="mt-2 text-sm text-white/80 leading-relaxed">
                    {texts.terrain.fleet.description}
                  </p>
                </div>
                <div className="rounded-2xl border border-white/20 bg-white/10 p-5 hover:bg-white/15 transition-all">
                  <div className="w-11 h-11 rounded-2xl bg-white/20 flex items-center justify-center text-white">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <p className="mt-4 font-bold text-white">{texts.terrain.security.title}</p>
                  <p className="mt-2 text-sm text-white/80 leading-relaxed">
                    {texts.terrain.security.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/20 bg-white/10 p-6">
              <h3 className="text-lg font-bold text-white">{texts.terrain.benefitsTitle}</h3>
              <div className="mt-4 space-y-3">
                {points.map((p) => (
                  <div key={p} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-white mt-0.5" />
                    <p className="text-sm text-white/80 leading-relaxed">{p}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-white/5 border border-white/20 p-5">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{texts.terrain.zonesTitle}</p>
                    <p className="text-sm text-white/80">
                      {texts.terrain.zonesDescription}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link to="/contact" className="w-full">
                  <Button className="w-full ndc-btn-red rounded-xl py-3 font-semibold">{texts.terrain.contactBtn}</Button>
                </Link>
                <Link to="/services/reseaux-distribution" className="w-full">
                  <Button variant="outline" className="w-full rounded-xl py-3 font-semibold">
                    {texts.terrain.reseauxBtn}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Galerie */}
      <section className="py-24 bg-white scroll-animate overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#e11a1a]/10 border border-[#e11a1a]/20 mb-4">
                <Camera className="w-4 h-4 text-[#e11a1a]" />
                <span className="text-[#e11a1a] text-sm font-semibold">{texts.gallery.badge}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                {texts.gallery.title1}
                <span className="block text-gray-400">{texts.gallery.title2}</span>
              </h2>
            </div>
            <p className="text-gray-600 max-w-md text-sm leading-relaxed">
              {texts.gallery.description}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            <div
              onClick={() => setSelectedImage(gallery[0])}
              className="col-span-2 row-span-2 group relative overflow-hidden rounded-3xl cursor-pointer h-[300px] md:h-[450px]"
            >
              <img src={gallery[0]?.src} alt={gallery[0]?.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                  <Camera className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>

            {gallery.slice(1, 5).map((item, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(item)}
                className="group relative overflow-hidden rounded-2xl cursor-pointer h-[140px] md:h-[215px]"
              >
                <img src={item.src} alt={item.label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                    <Camera className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            ))}

            {gallery.slice(5, 17).map((item, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(item)}
                className="group relative overflow-hidden rounded-2xl cursor-pointer h-[120px] md:h-[180px]"
              >
                <img src={item.src} alt={item.label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                    <Camera className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-gray-400 text-sm">
            <span>{gallery.length} {texts.gallery.photoCount}</span>
            <span>•</span>
            <span>{texts.gallery.clickToEnlarge}</span>
          </div>
        </div>
      </section>

      {/* Modal Image */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-6xl w-[95vw] p-0 bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden">
          <DialogTitle className="sr-only">{selectedImage?.label || "Image"}</DialogTitle>
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-50 w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
          {selectedImage && (
            <div className="relative">
              <img src={selectedImage.src} alt={selectedImage.label} className="w-full h-auto max-h-[80vh] object-contain" />
            </div>
          )}
        </DialogContent>
      </Dialog>

      <section className="py-16 section-dark scroll-animate">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-[#e11a1a] text-sm font-semibold tracking-wider uppercase">{texts.faq.badge}</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mt-3">{texts.faq.title}</h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((item) => (
              <AccordionItem key={item.q} value={item.q} className="border-b border-white/20">
                <AccordionTrigger className="text-left font-semibold text-white">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-white/80 leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TransportTransit;
