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

const FuelManagement = () => {
  useEffect(() => {
    const cleanup = initScrollAnimations();
    return cleanup;
  }, []);

  const gallery = [
    { src: "/images/images_ndc/FUEL/1F.jpg", label: "Stockage" },
    { src: "/images/images_ndc/FUEL/2F.jpg", label: "Infrastructures" },
    { src: "/images/images_ndc/FUEL/3F.jpg", label: "Installation" },
    { src: "/images/images_ndc/FUEL/6F.jpg", label: "Approvisionnement" },
    { src: "/images/images_ndc/FUEL/1.jpg", label: "Cuves" },
    { src: "/images/images_ndc/FUEL/3.jpg", label: "Dépôt" },
    { src: "/images/images_ndc/FUEL/7.jpg", label: "Site" },
    { src: "/images/images_ndc/FUEL/13.jpg", label: "Opérations" },
    { src: "/images/images_ndc/FUEL/14.jpg", label: "Maintenance" },
    { src: "/images/images_ndc/FUEL/16.jpg", label: "Équipements" },
    { src: "/images/images_ndc/FUEL/17.jpg", label: "Contrôle" },
    { src: "/images/images_ndc/FUEL/20241031_142136.jpg", label: "Terrain" },
  ];

  const [selectedImage, setSelectedImage] = useState<{ src: string; label: string } | null>(null);

  const faqs = [
    {
      q: "Comment garantissez-vous la traçabilité des volumes ?",
      a: "Nous mettons en place des procédures de contrôle (entrées/sorties), des points de comptage et des reportings. La traçabilité est adaptée au niveau de service et aux contraintes site.",
    },
    {
      q: "Intervenez-vous directement sur site minier ?",
      a: "Oui. Nos équipes peuvent déployer et opérer des solutions directement sur site pour sécuriser l’approvisionnement et réduire les risques de rupture.",
    },
    {
      q: "Pouvez-vous proposer un contrat récurrent (SLA/KPI) ?",
      a: "Oui. Nous définissons des SLA, des KPI et un rythme de reporting selon vos objectifs d’exploitation.",
    },
    {
      q: "Quels standards sécurité appliquez-vous ?",
      a: "Nous opérons selon des exigences HSE strictes (procédures, contrôles, formation), pour réduire les risques d’incident et de pollution.",
    },
  ];

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
          <div className="absolute inset-0  bg-gradient-to-r from-black/85 via-black/70 to-black/50" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <nav className="flex items-center justify-center gap-2 text-sm text-white/70 mb-8">
              <Link to="/services" className="hover:text-white transition-colors">
                Services
              </Link>
              <span className="text-white/50">/</span>
              <span className="text-white">Fuel management & infrastructures</span>
            </nav>

            {/* <div className="inline-flex items-center justify-center gap-2 border border-white/15 bg-white/10 text-white/85 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-[#e11a1a]" />
              Continuité d’approvisionnement
            </div> */}

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Fuel management & infrastructures
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
             Importateur de produits pétroliers, NDC Énergie conçoit, déploie , exploite et assure la Maintenance des systèmes de stockage d’hydrocarbures
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/contact">
                <Button className="bg-[#e11a1a] hover:bg-red-700 text-white rounded-xl px-8 py-6 font-semibold inline-flex items-center gap-2">
                  Demander un devis
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/#devis">
                <Button variant="outline" className="border-white/25 text-white hover:bg-white/10 rounded-xl px-8 py-6 font-semibold">
                  Démarrer une demande
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
                • Ce que nous sécurisons
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-white mt-4">
                Un modèle opérationnel intégré, orienté performance
              </h2>
              <p className="text-white/80 leading-relaxed mt-5">
              Au service des acteurs miniers et industriels, nous offrons une solution complète et sur mesure qui englobe : intégrer les 4 points de la plaquette – Partie Fuel Management
              </p>

              {/* <div className="mt-8 grid sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/20 bg-white/10 p-5 hover:bg-white/15 transition-all">
                  <div className="w-11 h-11 rounded-2xl bg-white/20 flex items-center justify-center text-white">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <p className="mt-4 font-bold text-white">Conformité & sécurité</p>
                  <p className="mt-2 text-sm text-white/80 leading-relaxed">
                    Standards HSE stricts, procédures de contrôle et réduction des risques d'incident.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/20 bg-white/10 p-5 hover:bg-white/15 transition-all">
                  <div className="w-11 h-11 rounded-2xl bg-white/20 flex items-center justify-center text-white">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <p className="mt-4 font-bold text-white">Pilotage & reporting</p>
                  <p className="mt-2 text-sm text-white/80 leading-relaxed">
                    KPI, tableaux de bord et points de contrôle pour améliorer en continu.
                  </p>
                </div>
              </div> */}
            </div>

            <div className="rounded-3xl border border-white/20 bg-white/10 p-6">
              <h3 className="text-lg font-bold text-white">Axes de service</h3>
              <div className="mt-5 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-[#e11a1a]">
                    <Droplet className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Stockage & distribution sur site</p>
                    <p className="text-sm text-white/80">Conception, déploiement, exploitation et maintenance des infrastructures.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/20 border border-white/30 flex items-center justify-center text-white">
                    <Network className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Traçabilité des flux</p>
                    <p className="text-sm text-white/80">Suivi des volumes, mouvements, consommations et écarts.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/20 border border-white/30 flex items-center justify-center text-white">
                    <Truck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Approvisionnement</p>
                    <p className="text-sm text-white/80">Planification, continuité et réduction des ruptures.</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link to="/contact" className="w-full">
                  <Button className="w-full ndc-btn-red rounded-xl py-3 font-semibold">Contacter un expert</Button>
                </Link>
                <Link to="/services/reseaux-distribution" className="w-full">
                  <Button variant="outline" className="w-full rounded-xl py-3 font-semibold">
                    Réseaux de distribution
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 section-dark scroll-animate">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-[#e11a1a] text-sm font-semibold tracking-wider uppercase">• Espace d’exposition</p>
              <h2 className="text-2xl md:text-3xl font-bold text-white mt-4">Infrastructures, opérations et continuité</h2>
              <p className="text-white/80 leading-relaxed mt-5">
                Un aperçu des environnements sur lesquels nous intervenons : stockage, distribution, opérations site et approvisionnement.
              </p>

              <div className="mt-7 grid grid-cols-2 gap-4">
                {gallery.slice(0,4).map((item) => (
                  <div key={item.label} className="group relative overflow-hidden border border-white/10">
                    <img
                      src={item.src}
                      alt={item.label}
                      className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <div className="absolute left-3 bottom-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/35 px-3 py-1.5 backdrop-blur">
                      <span className="w-2 h-2 rounded-full bg-[#e11a1a]" />
                      <span className="text-xs font-semibold text-white">{item.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#121826] text-white overflow-hidden">
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-white/80 text-sm font-semibold tracking-wider uppercase">Nos engagements</p>
                    <h3 className="text-lg font-bold mt-2">Garanties opérationnelles</h3>
                    <p className="text-white/70 text-sm mt-2 leading-relaxed">
                      Un modèle de service conçu pour sécuriser vos opérations et garantir la continuité.
                    </p>
                  </div>
                  <div className="w-11 h-11 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-[#e11a1a]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 space-y-4">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="w-3 h-3 rounded-full bg-[#e11a1a]" />
                  <span className="text-white/90">Disponibilité 24/7 des équipes terrain</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="w-3 h-3 rounded-full bg-[#e11a1a]" />
                  <span className="text-white/90">Conformité HSE et standards internationaux</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="w-3 h-3 rounded-full bg-[#e11a1a]" />
                  <span className="text-white/90">Reporting et KPI personnalisés</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="w-3 h-3 rounded-full bg-[#e11a1a]" />
                  <span className="text-white/90">Maintenance préventive et corrective</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Galerie - Style Bento */}
      <section className="py-24 bg-white scroll-animate overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header avec style premium */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#e11a1a]/10 border border-[#e11a1a]/20 mb-4">
                <Camera className="w-4 h-4 text-[#e11a1a]" />
                <span className="text-[#e11a1a] text-sm font-semibold">Galerie photos</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Nos installations
                <span className="block text-gray-400">& opérations terrain</span>
              </h2>
            </div>
            <p className="text-gray-600 max-w-md text-sm leading-relaxed">
              Découvrez nos infrastructures de stockage, nos équipements de pointe et nos équipes en action.
            </p>
          </div>

          {/* Grille Bento asymétrique */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {/* Grande image */}
            <div
              onClick={() => setSelectedImage(gallery[0])}
              className="col-span-2 row-span-2 group relative overflow-hidden rounded-3xl cursor-pointer h-[300px] md:h-[450px]"
            >
              <img src={gallery[0]?.src} alt={gallery[0]?.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur text-white text-xs font-medium mb-2">{gallery[0]?.label}</span>
                <p className="text-white/80 text-sm">Infrastructure de stockage</p>
              </div>
            </div>

            {/* Images moyennes */}
            {gallery.slice(1, 5).map((item, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(item)}
                className="group relative overflow-hidden rounded-2xl cursor-pointer h-[140px] md:h-[215px]"
              >
                <img src={item.src} alt={item.label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-white text-sm font-medium">{item.label}</span>
                </div>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                    <Camera className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            ))}

            {/* Rangée du bas - images plus petites */}
            {gallery.slice(5, 9).map((item, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(item)}
                className="group relative overflow-hidden rounded-2xl cursor-pointer h-[120px] md:h-[180px]"
              >
                <img src={item.src} alt={item.label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-white text-xs font-medium">{item.label}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Compteur */}
          <div className="mt-8 flex items-center justify-center gap-2 text-gray-400 text-sm">
            <span>{gallery.length} photos</span>
            <span>•</span>
            <span>Cliquez pour agrandir</span>
          </div>
        </div>
      </section>

      {/* Modal Image - Style Premium */}
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
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/50 to-transparent">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#e11a1a] flex items-center justify-center">
                    <Camera className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-xl">{selectedImage.label}</p>
                    <p className="text-white/60 text-sm">NDC Énergie • Fuel Management</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <section className="py-16 section-dark scroll-animate">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-[#e11a1a] text-sm font-semibold tracking-wider uppercase">FAQ</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mt-3">Questions fréquentes</h2>
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
