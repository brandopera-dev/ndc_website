import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Camera,
  Droplet,
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

const FuelManagement = () => {
  const { t, language } = useI18n();

  useEffect(() => {
    const cleanup = initScrollAnimations();
    return cleanup;
  }, []);

  const gallery = [
    { src: "/images/images_ndc/FUEL/1F.jpg", label: language === "fr" ? "Stockage" : "Storage" },
    { src: "/images/images_ndc/FUEL/2F.jpg", label: language === "fr" ? "Infrastructures" : "Infrastructure" },
    { src: "/images/images_ndc/FUEL/3F.jpg", label: language === "fr" ? "Installation" : "Installation" },
    { src: "/images/images_ndc/FUEL/6F.jpg", label: language === "fr" ? "Approvisionnement" : "Supply" },
    { src: "/images/images_ndc/FUEL/1.jpg", label: language === "fr" ? "Cuves" : "Tanks" },
    { src: "/images/images_ndc/FUEL/3.jpg", label: language === "fr" ? "Dépôt" : "Depot" },
    { src: "/images/images_ndc/FUEL/7.jpg", label: "Site" },
    { src: "/images/images_ndc/FUEL/13.jpg", label: language === "fr" ? "Opérations" : "Operations" },
    { src: "/images/images_ndc/FUEL/14.jpg", label: "Maintenance" },
    { src: "/images/images_ndc/FUEL/16.jpg", label: language === "fr" ? "Équipements" : "Equipment" },
    { src: "/images/images_ndc/FUEL/17.jpg", label: language === "fr" ? "Contrôle" : "Control" },
    { src: "/images/images_ndc/FUEL/20241031_142136.jpg", label: language === "fr" ? "Terrain" : "Field" },
  ];

  const [selectedImage, setSelectedImage] = useState<{ src: string; label: string } | null>(null);

  const faqs = language === "fr" ? [
    { q: "Comment garantissez-vous la traçabilité des volumes ?", a: "Nous mettons en place des procédures de contrôle (entrées/sorties), des points de comptage et des reportings. La traçabilité est adaptée au niveau de service et aux contraintes site." },
    { q: "Intervenez-vous directement sur site minier ?", a: "Oui. Nos équipes peuvent déployer et opérer des solutions directement sur site pour sécuriser l'approvisionnement et réduire les risques de rupture." },
    { q: "Pouvez-vous proposer un contrat récurrent (SLA/KPI) ?", a: "Oui. Nous définissons des SLA, des KPI et un rythme de reporting selon vos objectifs d'exploitation." },
    { q: "Quels standards sécurité appliquez-vous ?", a: "Nous opérons selon des exigences HSE strictes (procédures, contrôles, formation), pour réduire les risques d'incident et de pollution." },
  ] : [
    { q: "How do you ensure volume traceability?", a: "We implement control procedures (inputs/outputs), counting points and reporting. Traceability is adapted to the service level and site constraints." },
    { q: "Do you work directly on mining sites?", a: "Yes. Our teams can deploy and operate solutions directly on site to secure supply and reduce disruption risks." },
    { q: "Can you offer a recurring contract (SLA/KPI)?", a: "Yes. We define SLAs, KPIs and a reporting rhythm according to your operational objectives." },
    { q: "What safety standards do you apply?", a: "We operate according to strict HSE requirements (procedures, controls, training), to reduce incident and pollution risks." },
  ];

  const processSteps = language === "fr" ? [
    { number: "01", title: "LA CONCEPTION", description: "Dimensionnement des capacités de stockage suivant les besoins de consommations, Élaboration des notes de calculs et l'ensemble des Plans d'exécution." },
    { number: "02", title: "LA CONSTRUCTION", description: "Constructions des infrastructures, Installation des Automates et Équipements d'hydrocarbures, Mise en place du système informatique de Fuel Management, Installation des dispositifs du système Réseau Incendie, Travaux de Tests." },
    { number: "03", title: "L'EXPLOITATION", description: "Détermination de la stratégie et des fréquences de livraisons en hydrocarbures, Mise en place des manuels de procédures d'exploitation, Élaboration des rapports d'exploitation (suivi des consommations, les inventaires et réconciliation), Mise en place des indicateurs de performance." },
    { number: "04", title: "LA MAINTENANCE", description: "Inspections régulières des installations, Planning d'intervention pour maintenance préventive et curative, Mise à disposition de stocks de consommables et de pièces de rechanges." },
  ] : [
    { number: "01", title: "DESIGN", description: "Sizing storage capacities according to consumption needs, Preparation of calculation notes and all execution plans." },
    { number: "02", title: "CONSTRUCTION", description: "Infrastructure construction, Installation of hydrocarbon automatics and equipment, Implementation of Fuel Management IT system, Installation of fire network system devices, Testing work." },
    { number: "03", title: "OPERATION", description: "Determination of hydrocarbon delivery strategy and frequencies, Implementation of operating procedure manuals, Preparation of operating reports (consumption monitoring, inventories and reconciliation), Implementation of performance indicators." },
    { number: "04", title: "MAINTENANCE", description: "Regular facility inspections, Intervention planning for preventive and corrective maintenance, Provision of consumables and spare parts stocks." },
  ];

  const texts = {
    hero: {
      breadcrumb: t("hero.fuelManagement.breadcrumb"),
      title: t("hero.fuelManagement.title"),
      description: t("hero.fuelManagement.description"),
      quoteBtn: t("hero.fuelManagement.quoteBtn"),
      startBtn: t("hero.fuelManagement.startBtn"),
    },
    secure: {
      badge: language === "fr" ? "• Ce que nous sécurisons" : "• What we secure",
      title: language === "fr" ? "Un modèle opérationnel intégré, orienté performance" : "An integrated, performance-oriented operational model",
      description: language === "fr" ? "Au service des acteurs miniers et industriels, nous offrons une solution complète et sur mesure qui englobe :" : "Serving mining and industrial players, we offer a complete, tailored solution that includes:",
      axesTitle: language === "fr" ? "Axes de service" : "Service areas",
      axes: language === "fr" ? [
        { icon: Droplet, title: "Stockage & distribution sur site", description: "Conception, déploiement, exploitation et maintenance des infrastructures." },
        { icon: Network, title: "Traçabilité des flux", description: "Suivi des volumes, mouvements, consommations et écarts." },
        { icon: Truck, title: "Approvisionnement", description: "Planification, continuité et réduction des ruptures." },
      ] : [
        { icon: Droplet, title: "On-site storage & distribution", description: "Design, deployment, operation and maintenance of infrastructure." },
        { icon: Network, title: "Flow traceability", description: "Tracking of volumes, movements, consumption and variances." },
        { icon: Truck, title: "Supply", description: "Planning, continuity and disruption reduction." },
      ],
      contactBtn: language === "fr" ? "Contacter un expert" : "Contact an expert",
      reseauxBtn: language === "fr" ? "Réseaux de distribution" : "Distribution networks",
    },
    process: {
      badge: language === "fr" ? "• NOTRE PROCESSUS" : "• OUR PROCESS",
      title: language === "fr" ? "Une approche intégrée en 4 étapes" : "An integrated 4-step approach",
    },
    gallery: {
      badge: language === "fr" ? "Galerie photos" : "Photo gallery",
      title1: language === "fr" ? "Nos installations" : "Our facilities",
      title2: language === "fr" ? "& opérations terrain" : "& field operations",
      description: language === "fr" ? "Découvrez nos infrastructures de stockage, nos équipements de pointe et nos équipes en action." : "Discover our storage infrastructure, state-of-the-art equipment and teams in action.",
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
            src="/images/images_ndc/FUEL/2F.jpg"
            alt="Fuel management"
            className="w-full h-full object-cover opacity-45 saturate-125 contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/10" />
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
              <Link to="/#devis">
                <Button variant="outline" className="border-white/25 text-white hover:bg-white/10 rounded-xl px-8 py-6 font-semibold">
                  {texts.hero.startBtn}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 ndc-section-red scroll-animate">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-white/90 text-sm font-semibold tracking-wider uppercase">
                {texts.secure.badge}
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-white mt-4">
                {texts.secure.title}
              </h2>
              <p className="text-white/80 leading-relaxed mt-5">
                {texts.secure.description}
              </p>
            </div>

            <div className="rounded-3xl border border-white/20 bg-white/10 p-6">
              <h3 className="text-lg font-bold text-white">{texts.secure.axesTitle}</h3>
              <div className="mt-5 space-y-4">
                {texts.secure.axes.map((axis, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-xl ${index === 0 ? 'bg-white border border-gray-200 text-[#e11a1a]' : 'bg-white/20 border border-white/30 text-white'} flex items-center justify-center`}>
                      <axis.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">{axis.title}</p>
                      <p className="text-sm text-white/80">{axis.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link to="/contact" className="w-full">
                  <Button className="w-full ndc-btn-red rounded-xl py-3 font-semibold">{texts.secure.contactBtn}</Button>
                </Link>
                <Link to="/services/reseaux-distribution" className="w-full">
                  <Button variant="outline" className="w-full rounded-xl py-3 font-semibold">
                    {texts.secure.reseauxBtn}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Timeline - Notre Processus */}
      <section className="py-20 bg-white scroll-animate">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#e11a1a] text-sm font-semibold tracking-wider uppercase mb-4">
              {texts.process.badge}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {texts.process.title}
            </h2>
          </div>

          <div className="relative">
            <div className="absolute top-6 left-0 right-0 h-0.5 bg-gray-200 hidden md:block">
              <div className="absolute top-0 left-0 h-full bg-[#e11a1a]" style={{ width: '100%' }} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
              {processSteps.map((step) => (
                <div key={step.number} className="relative text-center">
                  <div className="w-12 h-12 mx-auto bg-[#e11a1a] border-4 border-[#e11a1a] rounded-full flex items-center justify-center mb-4 relative z-10">
                    <span className="text-white font-bold text-sm">{step.number}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
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

            {gallery.slice(5, 9).map((item, index) => (
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

export default FuelManagement;
