/* eslint-disable no-useless-escape */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  Building2,
  Camera,
  MapPin,
  Network,
  RefreshCcw,
  ShieldCheck,
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

const ReseauxDistribution = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const leafletMapRef = useRef<any>(null);

  useEffect(() => {
    const cleanup = initScrollAnimations();
    return cleanup;
  }, []);

  const stations = useMemo(
    () => [
      { name: "Bamako", lat: 12.6392, lng: -8.0029 },
      { name: "Kayes", lat: 14.4469, lng: -11.4356 },
      { name: "Sikasso", lat: 11.3167, lng: -5.6667 },
      { name: "Ségou", lat: 13.4317, lng: -6.2617 },
      { name: "Mopti", lat: 14.4843, lng: -4.1973 },
      { name: "Koutiala", lat: 12.3833, lng: -5.4667 },
    ],
    []
  );

  useEffect(() => {
    const loadLeaflet = async () => {
      if ((window as any).L) return;

      if (!document.querySelector('link[data-leaflet="true"]')) {
        const linkEl = document.createElement("link");
        linkEl.rel = "stylesheet";
        linkEl.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
        linkEl.setAttribute("data-leaflet", "true");
        document.head.appendChild(linkEl);
      }

      await new Promise<void>((resolve, reject) => {
        const existing = document.querySelector('script[data-leaflet="true"]') as HTMLScriptElement | null;
        if (existing) {
          if ((window as any).L) resolve();
          else existing.addEventListener("load", () => resolve(), { once: true });
          return;
        }

        const scriptEl = document.createElement("script");
        scriptEl.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
        scriptEl.async = true;
        scriptEl.defer = true;
        scriptEl.setAttribute("data-leaflet", "true");
        scriptEl.onload = () => resolve();
        scriptEl.onerror = () => reject(new Error("Leaflet load failed"));
        document.body.appendChild(scriptEl);
      });
    };

    const initMap = async () => {
      if (!mapContainerRef.current) return;
      await loadLeaflet();
      const L = (window as any).L as any;
      if (!L || leafletMapRef.current) return;

      const map = L.map(mapContainerRef.current, {
        zoomControl: false,
        attributionControl: false,
      }).setView([14.0, -6.0], 6);

      // Tile layer gris/dark style
      L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
        maxZoom: 19,
        subdomains: "abcd",
      }).addTo(map);

      // Custom pin icon NDC
      const ndcIcon = L.divIcon({
        className: "ndc-map-marker",
        html: `
          <div style="
            width: 36px;
            height: 46px;
            position: relative;
            filter: drop-shadow(0 4px 6px rgba(0,0,0,0.4));
          ">
            <svg viewBox="0 0 36 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 0C8.06 0 0 8.06 0 18c0 12.6 18 28 18 28s18-15.4 18-28C36 8.06 27.94 0 18 0z" fill="#e11a1a"/>
              <circle cx="18" cy="16" r="8" fill="white"/>
              <text x="18" y="20" text-anchor="middle" fill="#e11a1a" font-size="10" font-weight="bold">⛽</text>
            </svg>
          </div>
        `,
        iconSize: [36, 46],
        iconAnchor: [18, 46],
        popupAnchor: [0, -46],
      });

      stations.forEach((s: any) => {
        L.marker([s.lat, s.lng], { icon: ndcIcon })
          .addTo(map)
          .bindPopup(`
            <div style="
              font-family: system-ui, sans-serif;
              padding: 8px 12px;
              text-align: center;
            ">
              <div style="font-weight: 700; font-size: 14px; color: #1f1f1f;">${s.name}</div>
              <div style="font-size: 11px; color: #666; margin-top: 4px;">Station NDC Énergie</div>
            </div>
          `);
      });

      const bounds = L.latLngBounds(stations.map((s: any) => [s.lat, s.lng]));
      map.fitBounds(bounds.pad(0.25));

      leafletMapRef.current = map;
    };

    initMap();

    return () => {
      if (leafletMapRef.current) {
        try {
          leafletMapRef.current.remove();
        } finally {
          leafletMapRef.current = null;
        }
      }
    };
  }, [stations]);

  const gallery = [
    { src: "/images/images_ndc/RESEAUX/NDC  de KATI101 copy.jpg", label: "Station Kati" },
    { src: "/images/images_ndc/RESEAUX/NDC  de KATI137 copy.jpg", label: "Réseau" },
    { src: "/images/images_ndc/RESEAUX/NDC  de KATI178 copy.jpg", label: "Distribution" },
    { src: "/images/images_ndc/RESEAUX/NDC Lancement142 copy.jpg", label: "Inauguration" },
    { src: "/images/images_ndc/RESEAUX/NDC  de KATI107 copy.jpg", label: "Infrastructure" },
    { src: "/images/images_ndc/RESEAUX/NDC  de KATI131 1 copy.jpg", label: "Station-service" },
    { src: "/images/images_ndc/RESEAUX/NDC  de KATI19 copy.jpg", label: "Pompes" },
    { src: "/images/images_ndc/RESEAUX/NDC  de KATI30 copy.jpg", label: "Équipements" },
    { src: "/images/Social Media Size/NDC-Lancement103-sm.jpg", label: "Lancement" },
    { src: "/images/Social Media Size/NDC-Lancement119-sm.jpg", label: "Événement" },
    { src: "/images/Social Media Size/NDC--de-KATI181-sm.jpg", label: "Équipe" },
    { src: "/images/Social Media Size/NDC--de-KATI134-sm.jpg", label: "Service" },
  ];

  const [selectedImage, setSelectedImage] = useState<{ src: string; label: string } | null>(null);

  const faqs = [
    {
      q: "Pouvez-vous livrer plusieurs stations sur une même journée ?",
      a: "Oui. Nous planifions des tournées multi-sites selon vos volumes et vos contraintes locales.",
    },
    {
      q: "Proposez-vous un suivi des livraisons ?",
      a: "Oui. Traçabilité et reporting sont mis en place selon le périmètre de service.",
    },
    {
      q: "Peut-on mettre en place un contrat récurrent ?",
      a: "Oui, avec fréquences, volumes et indicateurs de performance (SLA/KPI).",
    },
    {
      q: "Intervenez-vous sur des zones éloignées ?",
      a: "Oui. Nous adaptons le plan de transport et, si nécessaire, nous nous appuyons sur un réseau de partenaires.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative pt-28 pb-16 bg-[#1f1f1f] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/Social Media Size/NDC--de-KATI134-sm.jpg"
            alt="Réseaux de distribution"
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
              <span className="text-white">Réseaux de distribution</span>
            </nav>

            {/* <div className="inline-flex items-center justify-center gap-2 border border-white/15 bg-white/10 text-white/85 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-[#e11a1a]" />
              Disponibilité multi-sites
            </div> */}

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Réseaux de distribution
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Approvisionnement et gestion automatisée de stations-service avec une plateforme dédiée au suivi des flux de vente et de stocks en temps réel.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/contact">
                <Button className="bg-[#e11a1a] hover:bg-red-700 text-white rounded-xl px-8 py-6 font-semibold inline-flex items-center gap-2">
                  Demander un devis
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/services/transport-transit">
                <Button variant="outline" className="border-white/25 text-white hover:bg-white/10 rounded-xl px-8 py-6 font-semibold">
                  Transport & transit
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
              <p className="text-white/90 text-sm font-semibold tracking-wider uppercase">• Comment nous opérons</p>
              <h2 className="text-2xl md:text-3xl font-bold text-white mt-4">
              Système automatisé, Planification et pilotage des volumes
              </h2>
              <p className="text-white/80 leading-relaxed mt-5">
              Dotées de systèmes gestion automatisée, nos stations-services sont suivis et pilotés en temps réel pourgarantir la disponibilité des produits ainsi qu’une traçabilité sécurisée des flux de ventes et de stocks.
              </p>
              <p className="text-white/80 leading-relaxed mt-5">
              Leader en importation de produits pétroliers au Mali, NDC Energie accompagne les distributeursd’hydrocarbures et détenteur de stations-service par une politique d’approvisionnement quis’appuie sur :
              </p>

              {/* <div className="mt-8 grid sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/20 bg-white/10 p-5 hover:bg-white/15 transition-all">
                  <div className="w-11 h-11 rounded-2xl bg-white/20 flex items-center justify-center text-white">
                    <RefreshCcw className="w-5 h-5" />
                  </div>
                  <p className="mt-4 font-bold text-white">Réassort optimisé</p>
                  <p className="mt-2 text-sm text-white/80 leading-relaxed">
                    Planification des tournées et optimisation des fréquences.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/20 bg-white/10 p-5 hover:bg-white/15 transition-all">
                  <div className="w-11 h-11 rounded-2xl bg-white/20 flex items-center justify-center text-white">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <p className="mt-4 font-bold text-white">Conformité & sécurité</p>
                  <p className="mt-2 text-sm text-white/80 leading-relaxed">
                    Protocoles adaptés aux opérations station-service.
                  </p>
                </div>
              </div> */}
            </div>

            <div className="rounded-3xl border border-white/20 bg-white/10 p-6">
              <h3 className="text-lg font-bold text-white">Modules</h3>
              <div className="mt-5 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/20 border border-white/30 flex items-center justify-center text-white">
                    <Network className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">La distribution multi-sites</p>
                    <p className="text-sm text-white/80">Planification centralisée et coordination des points de vente.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/20 border border-white/30 flex items-center justify-center text-white">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Le pilotage des volumes</p>
                    <p className="text-sm text-white/80">Suivi des livraisons, contrôle des volumes et reporting.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/20 border border-white/30 flex items-center justify-center text-white">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Support exploitation</p>
                    <p className="text-sm text-white/80">Accompagnement opérationnel pour assurer la continuité de service.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/20 border border-white/30 flex items-center justify-center text-white">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Livraison multi-zones</p>
                    <p className="text-sm text-white/80">Gestion des contraintes locales et des zones éloignées.</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link to="/contact" className="w-full">
                  <Button className="w-full ndc-btn-red rounded-xl py-3 font-semibold">Contacter</Button>
                </Link>
                <Link to="/services/fuel-management" className="w-full">
                  <Button variant="outline" className="w-full rounded-xl py-3 font-semibold">
                    Fuel management
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Carte des implantations - Grande carte */}
      <section className="py-20 section-dark scroll-animate">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-[#e11a1a] text-sm font-semibold tracking-wider uppercase">• Notre réseau</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">Stations NDC Énergie au Mali</h2>
            <p className="text-white/70 leading-relaxed mt-4 max-w-2xl mx-auto">
              Un maillage stratégique couvrant les principales zones économiques du Mali pour garantir 
              la disponibilité des produits pétroliers sur l'ensemble du territoire.
            </p>
          </div>

          {/* Stations list */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {stations.map((station) => (
              <div 
                key={station.name} 
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#e11a1a]" />
                <span className="font-medium text-white text-sm">{station.name}</span>
              </div>
            ))}
          </div>

          {/* Grande carte */}
          <div className="rounded-3xl overflow-hidden border border-white/10 bg-[#0d1117]">
            <div ref={mapContainerRef} className="w-full h-[500px] md:h-[600px]" />
          </div>

          {/* Légende */}
          <div className="mt-8 flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-10 flex items-center justify-center">
                <svg viewBox="0 0 36 46" fill="none" className="w-6 h-8">
                  <path d="M18 0C8.06 0 0 8.06 0 18c0 12.6 18 28 18 28s18-15.4 18-28C36 8.06 27.94 0 18 0z" fill="#e11a1a"/>
                  <circle cx="18" cy="16" r="8" fill="white"/>
                </svg>
              </div>
              <span className="text-white/80 text-sm">Station-service NDC Énergie</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-[#e11a1a]/30 border-2 border-[#e11a1a]" />
              <span className="text-white/80 text-sm">Zone de couverture</span>
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
                Nos stations
                <span className="block text-gray-400">& événements</span>
              </h2>
            </div>
            <p className="text-gray-600 max-w-md text-sm leading-relaxed">
              Découvrez notre réseau de stations-service, nos inaugurations et nos équipes sur le terrain au Mali.
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
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                  <Camera className="w-6 h-6 text-white" />
                </div>
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
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                    <Camera className="w-5 h-5 text-white" />
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
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                    <Camera className="w-4 h-4 text-white" />
                  </div>
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

export default ReseauxDistribution;
