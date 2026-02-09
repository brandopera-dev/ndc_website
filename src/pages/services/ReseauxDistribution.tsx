import React, { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  BarChart3,
  Building2,
  Camera,
  MapPin,
  Network,
  X,
  LucideIcon,
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

// ============================================================================
// Types & Interfaces
// ============================================================================

interface Station {
  name: string;
  lat: number;
  lng: number;
}

interface GalleryItem {
  src: string;
  category: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

interface ModuleItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface LeafletMap {
  remove: () => void;
  setView: (center: [number, number], zoom: number) => LeafletMap;
  fitBounds: (bounds: unknown, options?: unknown) => LeafletMap;
}

interface LeafletLibrary {
  map: (container: HTMLElement, options?: object) => LeafletMap;
  tileLayer: (url: string, options?: object) => { addTo: (map: LeafletMap) => void };
  divIcon: (options: object) => unknown;
  marker: (latlng: [number, number], options?: object) => { 
    addTo: (map: LeafletMap) => { bindPopup: (content: string) => void } 
  };
  latLngBounds: (latlngs: [number, number][]) => { pad: (ratio: number) => unknown };
}

declare global {
  interface Window {
    L?: LeafletLibrary;
  }
}

// ============================================================================
// Constants
// ============================================================================

const STATIONS: Station[] = [
  { name: "NDC ENERGIE SOTUBA", lat: 12.6480099, lng: -8.0579007 },
  { name: "NDC ENERGIE KABALA", lat: 12.5526023, lng: -8.1091869 },
  { name: "NDC ÉNERGIE KATI", lat: 12.626886, lng: -8.0349376 },
  { name: "NDC ÉNERGIE Sirakoro", lat: 12.648448, lng: -8.0150528},
];

const GALLERY_IMAGES: GalleryItem[] = [
  { src: "/images/images_ndc/RESEAUX/NDC-de-KATI101-copy.webp", category: "reseaux" },
  { src: "/images/images_ndc/RESEAUX/NDC-de-KATI107-copy.webp", category: "reseaux" },
  { src: "/images/images_ndc/RESEAUX/NDC-de-KATI131-1-copy.webp", category: "reseaux" },
  { src: "/images/images_ndc/RESEAUX/NDC-de-KATI137-copy.webp", category: "reseaux" },
  { src: "/images/images_ndc/RESEAUX/NDC-de-KATI178-copy.webp", category: "reseaux" },
  { src: "/images/images_ndc/RESEAUX/NDC-de-KATI30-copy.webp", category: "reseaux" },
  { src: "/images/images_ndc/RESEAUX/NDC-Lancement119-sm.webp", category: "reseaux" },
  { src: "/images/images_ndc/Bureaux/B-3.webp", category: "reseaux" },
  { src: "/images/images_ndc/Bureaux/NDC--de-KATI206-sm.webp", category: "reseaux" },
];

const LEAFLET_CSS_URL = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
const LEAFLET_JS_URL = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
const MAP_TILE_URL = "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png";

// ============================================================================
// Hooks
// ============================================================================

/**
 * Hook personnalisé pour charger et initialiser la carte Leaflet
 */
const useLeafletMap = (
  containerRef: React.RefObject<HTMLDivElement | null>,
  stations: Station[],
  popupText: string
) => {
  const mapRef = useRef<LeafletMap | null>(null);

  useEffect(() => {
    const loadLeafletAssets = async (): Promise<void> => {
      if (window.L) return;

      // Charger le CSS
      if (!document.querySelector('link[data-leaflet="true"]')) {
        const linkEl = document.createElement("link");
        linkEl.rel = "stylesheet";
        linkEl.href = LEAFLET_CSS_URL;
        linkEl.setAttribute("data-leaflet", "true");
        document.head.appendChild(linkEl);
      }

      // Charger le JS
      await new Promise<void>((resolve, reject) => {
        const existing = document.querySelector('script[data-leaflet="true"]') as HTMLScriptElement | null;
        
        if (existing) {
          if (window.L) {
            resolve();
          } else {
            existing.addEventListener("load", () => resolve(), { once: true });
          }
          return;
        }

        const scriptEl = document.createElement("script");
        scriptEl.src = LEAFLET_JS_URL;
        scriptEl.async = true;
        scriptEl.defer = true;
        scriptEl.setAttribute("data-leaflet", "true");
        scriptEl.onload = () => resolve();
        scriptEl.onerror = () => reject(new Error("Failed to load Leaflet"));
        document.body.appendChild(scriptEl);
      });
    };

    const createCustomIcon = (L: LeafletLibrary) => {
      return L.divIcon({
        className: "ndc-map-marker",
        html: `
          <div style="width: 36px; height: 46px; position: relative; filter: drop-shadow(0 4px 6px rgba(0,0,0,0.4));">
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
    };

    const createPopupContent = (stationName: string) => `
      <div style="font-family: system-ui, sans-serif; padding: 8px 12px; text-align: center;">
        <div style="font-weight: 700; font-size: 14px; color: #1f1f1f;">${stationName}</div>
        <div style="font-size: 11px; color: #666; margin-top: 4px;">${popupText}</div>
      </div>
    `;

    const initializeMap = async () => {
      if (!containerRef.current || mapRef.current) return;

      await loadLeafletAssets();
      
      const L = window.L;
      if (!L) return;

      const map = L.map(containerRef.current, {
        zoomControl: false,
        attributionControl: false,
      }).setView([14.0, -6.0], 6);

      L.tileLayer(MAP_TILE_URL, {
        maxZoom: 19,
        subdomains: "abcd",
      }).addTo(map);

      const customIcon = createCustomIcon(L);

      stations.forEach((station) => {
        L.marker([station.lat, station.lng], { icon: customIcon })
          .addTo(map)
          .bindPopup(createPopupContent(station.name));
      });

      const bounds = L.latLngBounds(stations.map((s) => [s.lat, s.lng] as [number, number]));
      map.fitBounds(bounds.pad(0.25));

      mapRef.current = map;
    };

    initializeMap();

    return () => {
      if (mapRef.current) {
        try {
          mapRef.current.remove();
        } finally {
          mapRef.current = null;
        }
      }
    };
  }, [containerRef, stations, popupText]);

  return mapRef;
};

// ============================================================================
// Sub-Components
// ============================================================================

interface GalleryImageProps {
  item: GalleryItem;
  onClick: () => void;
  className?: string;
  iconSize?: "sm" | "md" | "lg";
}

const GalleryImage: React.FC<GalleryImageProps> = ({ 
  item, 
  onClick, 
  className = "", 
  iconSize = "md" 
}) => {
  const iconSizes = {
    sm: { container: "w-8 h-8", icon: "w-4 h-4" },
    md: { container: "w-10 h-10", icon: "w-5 h-5" },
    lg: { container: "w-14 h-14", icon: "w-6 h-6" },
  };

  return (
    <div
      onClick={onClick}
      className={`group relative overflow-hidden cursor-pointer ${className}`}
    >
      <img 
        src={item.src} 
        alt="" 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
      />
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300" />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className={`${iconSizes[iconSize].container} rounded-full bg-white/20 backdrop-blur flex items-center justify-center`}>
          <Camera className={`${iconSizes[iconSize].icon} text-white`} />
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// Main Component
// ============================================================================

const ReseauxDistribution: React.FC = () => {
  const { t, language } = useI18n();
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  // Initialize scroll animations
  useEffect(() => {
    const cleanup = initScrollAnimations();
    return cleanup;
  }, []);

  // Memoized stations data
  const stations = useMemo(() => STATIONS, []);
  const stationPopupText = language === "fr" ? "Station NDC Énergie" : "NDC Energy Station";

  // Initialize Leaflet map
  useLeafletMap(mapContainerRef, stations, stationPopupText);

  // Memoized FAQ data
  const faqs: FaqItem[] = useMemo(() => {
    return language === "fr" ? [
      { 
        question: "Pouvez-vous livrer plusieurs stations sur une même journée ?", 
        answer: "Oui. Nous planifions des tournées multi-sites selon vos volumes et vos contraintes locales." 
      },
      { 
        question: "Proposez-vous un suivi des livraisons ?", 
        answer: "Oui. Traçabilité et reporting sont mis en place selon le périmètre de service." 
      },
      { 
        question: "Peut-on mettre en place un contrat récurrent ?", 
        answer: "Oui, avec fréquences, volumes et indicateurs de performance (SLA/KPI)." 
      },
      { 
        question: "Intervenez-vous sur des zones éloignées ?", 
        answer: "Oui. Nous adaptons le plan de transport et, si nécessaire, nous nous appuyons sur un réseau de partenaires." 
      },
    ] : [
      { 
        question: "Can you deliver to multiple stations on the same day?", 
        answer: "Yes. We plan multi-site routes according to your volumes and local constraints." 
      },
      { 
        question: "Do you offer delivery tracking?", 
        answer: "Yes. Traceability and reporting are set up according to the service scope." 
      },
      { 
        question: "Can we set up a recurring contract?", 
        answer: "Yes, with frequencies, volumes and performance indicators (SLA/KPI)." 
      },
      { 
        question: "Do you operate in remote areas?", 
        answer: "Yes. We adapt the transport plan and, if necessary, rely on a network of partners." 
      },
    ];
  }, [language]);

  // Memoized modules data
  const modules: ModuleItem[] = useMemo(() => {
    return language === "fr" ? [
      { icon: Network, title: "La distribution multi-sites", description: "Planification centralisée et coordination des points de vente." },
      { icon: BarChart3, title: "Le pilotage des volumes", description: "Suivi des livraisons, contrôle des volumes et reporting." },
      { icon: Building2, title: "Support exploitation", description: "Accompagnement opérationnel pour assurer la continuité de service." },
      { icon: MapPin, title: "Livraison multi-zones", description: "Gestion des contraintes locales et des zones éloignées." },
    ] : [
      { icon: Network, title: "Multi-site distribution", description: "Centralized planning and coordination of sales points." },
      { icon: BarChart3, title: "Volume management", description: "Delivery tracking, volume control and reporting." },
      { icon: Building2, title: "Operations support", description: "Operational support to ensure service continuity." },
      { icon: MapPin, title: "Multi-zone delivery", description: "Management of local constraints and remote areas." },
    ];
  }, [language]);

  // Memoized text content
  const texts = useMemo(() => ({
    hero: {
      breadcrumb: t("hero.reseauxDistribution.breadcrumb"),
      title: t("hero.reseauxDistribution.title"),
      description: t("hero.reseauxDistribution.description"),
      quoteBtn: t("hero.reseauxDistribution.quoteBtn"),
      transportBtn: t("hero.reseauxDistribution.transportBtn"),
    },
    operate: {
      badge: language === "fr" ? "• Comment nous opérons" : "• How we operate",
      title: language === "fr" 
        ? "Système automatisé, Planification et pilotage des volumes" 
        : "Automated system, Planning and volume management",
      paragraph1: language === "fr" 
        ? "Dotées de systèmes de gestion automatisée, nos stations-services sont suivies et pilotées en temps réel pour garantir la disponibilité des produits ainsi qu'une traçabilité sécurisée des flux de ventes et de stocks."
        : "Equipped with automated management systems, our service stations are monitored and controlled in real time to guarantee product availability and secure traceability of sales and stock flows.",
      paragraph2: language === "fr"
        ? "Leader en importation de produits pétroliers au Mali, NDC Energie accompagne les distributeurs d'hydrocarbures et détenteur de stations-service par une politique d'approvisionnement qui s'appuie sur :"
        : "Leader in petroleum product imports in Mali, NDC Energy supports hydrocarbon distributors and service station owners with a supply policy based on:",
      modulesTitle: language === "fr" ? "Modules" : "Modules",
      contactBtn: language === "fr" ? "Contacter" : "Contact",
      fuelBtn: language === "fr" ? "Fuel management" : "Fuel management",
    },
    map: {
      badge: language === "fr" ? "• Notre réseau" : "• Our network",
      title: language === "fr" ? "Stations NDC Énergie au Mali" : "NDC Energy Stations in Mali",
      description: language === "fr"
        ? "Un maillage stratégique couvrant les principales zones économiques du Mali pour garantir la disponibilité des produits pétroliers sur l'ensemble du territoire."
        : "A strategic network covering Mali's main economic zones to guarantee the availability of petroleum products throughout the territory.",
      legendStation: language === "fr" ? "Station-service NDC Énergie" : "NDC Energy Service Station",
      legendCoverage: language === "fr" ? "Zone de couverture" : "Coverage area",
    },
    gallery: {
      badge: language === "fr" ? "Galerie photos" : "Photo gallery",
      title1: language === "fr" ? "Nos stations" : "Our stations",
      title2: language === "fr" ? "& événements" : "& events",
      description: language === "fr" 
        ? "Découvrez notre réseau de stations-service, nos inaugurations et nos équipes sur le terrain au Mali."
        : "Discover our service station network, our inaugurations and our teams in the field in Mali.",
      photoCount: language === "fr" ? "photos" : "photos",
      clickToEnlarge: language === "fr" ? "Cliquez pour agrandir" : "Click to enlarge",
    },
    faq: {
      badge: "FAQ",
      title: language === "fr" ? "Questions fréquentes" : "Frequently asked questions",
    },
  }), [t, language]);

  // Handlers
  const handleImageClick = useCallback((image: GalleryItem) => {
    setSelectedImage(image);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedImage(null);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{language === 'fr' ? 'Réseaux de Distribution | NDC Énergie' : 'Distribution Networks | NDC Energy'}</title>
        <meta name="description" content={language === 'fr' 
          ? "Approvisionnement et gestion de stations-service au Mali. Traçabilité, planification et pilotage des volumes en temps réel." 
          : "Supply and management of service stations in Mali. Traceability, planning, and real-time volume management."} />
        <link rel="canonical" href="https://ndc.africa/services/reseaux-distribution" />
      </Helmet>
      <Header />

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 bg-[#1f1f1f] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/Social Media Size/NDC--de-KATI134-sm.jpg"
            alt=""
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
              <Link to="/services/transport-transit">
                <Button variant="outline" className="border-white/25 text-white hover:bg-white/10 rounded-xl px-8 py-6 font-semibold">
                  {texts.hero.transportBtn}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Operations Section */}
      <section className="py-16 ndc-section-red scroll-animate">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <p className="text-white/90 text-sm font-semibold tracking-wider uppercase">
                {texts.operate.badge}
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-white mt-4">
                {texts.operate.title}
              </h2>
              <p className="text-white/80 leading-relaxed mt-5">
                {texts.operate.paragraph1}
              </p>
              <p className="text-white/80 leading-relaxed mt-5">
                {texts.operate.paragraph2}
              </p>
            </div>

            <div className="rounded-3xl border border-white/20 bg-white/10 p-6">
              <h3 className="text-lg font-bold text-white">{texts.operate.modulesTitle}</h3>
              <div className="mt-5 space-y-4">
                {modules.map((module, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/20 border border-white/30 flex items-center justify-center text-white">
                      <module.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">{module.title}</p>
                      <p className="text-sm text-white/80">{module.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link to="/contact" className="w-full">
                  <Button className="w-full ndc-btn-red rounded-xl py-3 font-semibold">
                    {texts.operate.contactBtn}
                  </Button>
                </Link>
                <Link to="/services/fuel-management" className="w-full">
                  <Button variant="outline" className="w-full rounded-xl py-3 font-semibold">
                    {texts.operate.fuelBtn}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 section-dark scroll-animate">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#e11a1a] text-sm font-semibold tracking-wider uppercase">
              {texts.map.badge}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
              {texts.map.title}
            </h2>
            <p className="text-white/70 leading-relaxed mt-4 max-w-2xl mx-auto">
              {texts.map.description}
            </p>
          </div>

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

          <div className="rounded-3xl overflow-hidden border border-white/10 bg-[#0d1117]">
            <div ref={mapContainerRef} className="w-full h-[500px] md:h-[600px]" />
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-10 flex items-center justify-center">
                <svg viewBox="0 0 36 46" fill="none" className="w-6 h-8">
                  <path d="M18 0C8.06 0 0 8.06 0 18c0 12.6 18 28 18 28s18-15.4 18-28C36 8.06 27.94 0 18 0z" fill="#e11a1a"/>
                  <circle cx="18" cy="16" r="8" fill="white"/>
                </svg>
              </div>
              <span className="text-white/80 text-sm">{texts.map.legendStation}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-[#e11a1a]/30 border-2 border-[#e11a1a]" />
              <span className="text-white/80 text-sm">{texts.map.legendCoverage}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
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
            {/* Featured image */}
            <GalleryImage
              item={GALLERY_IMAGES[0]}
              onClick={() => handleImageClick(GALLERY_IMAGES[0])}
              className="col-span-2 row-span-2 rounded-3xl h-[300px] md:h-[450px]"
              iconSize="lg"
            />

            {/* Secondary images */}
            {GALLERY_IMAGES.slice(1, 5).map((item, index) => (
              <GalleryImage
                key={index}
                item={item}
                onClick={() => handleImageClick(item)}
                className="rounded-2xl h-[140px] md:h-[215px]"
                iconSize="md"
              />
            ))}

            {/* Tertiary images */}
            {GALLERY_IMAGES.slice(5, 9).map((item, index) => (
              <GalleryImage
                key={index}
                item={item}
                onClick={() => handleImageClick(item)}
                className="rounded-2xl h-[120px] md:h-[180px]"
                iconSize="sm"
              />
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-gray-400 text-sm">
            <span>{GALLERY_IMAGES.length} {texts.gallery.photoCount}</span>
            <span>•</span>
            <span>{texts.gallery.clickToEnlarge}</span>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={handleCloseModal}>
        <DialogContent className="max-w-6xl w-[95vw] p-0 bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden">
          <DialogTitle className="sr-only">
            {language === "fr" ? "Image agrandie" : "Enlarged image"}
          </DialogTitle>
          <button
            onClick={handleCloseModal}
            className="absolute top-4 right-4 z-50 w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
            aria-label={language === "fr" ? "Fermer" : "Close"}
          >
            <X className="w-5 h-5" />
          </button>
          {selectedImage && (
            <div className="relative">
              <img 
                src={selectedImage.src} 
                alt="" 
                className="w-full h-auto max-h-[80vh] object-contain" 
              />
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* FAQ Section */}
      <section className="py-16 section-dark scroll-animate">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-[#e11a1a] text-sm font-semibold tracking-wider uppercase">
              {texts.faq.badge}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mt-3">
              {texts.faq.title}
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((item) => (
              <AccordionItem 
                key={item.question} 
                value={item.question} 
                className="border-b border-white/20"
              >
                <AccordionTrigger className="text-left font-semibold text-white">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/80 leading-relaxed">
                  {item.answer}
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
