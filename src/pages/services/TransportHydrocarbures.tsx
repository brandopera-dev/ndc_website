/* eslint-disable no-useless-escape */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  Droplet,
  MapPin,
  Network,
  ShieldCheck,
  Truck,
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
import { initScrollAnimations } from "@/utils/scrollAnimations";

const TransportHydrocarbures = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const leafletMapRef = useRef<any>(null);

  useEffect(() => {
    const cleanup = initScrollAnimations();
    return cleanup;
  }, []);

  const stations = useMemo(
    () => [
      { name: "Lubumbashi", lat: -11.6609, lng: 27.4794 },
      { name: "Likasi", lat: -10.981, lng: 26.7377 },
      { name: "Kolwezi", lat: -10.7167, lng: 25.4667 },
      { name: "Tenke", lat: -10.6129, lng: 26.12 },
      { name: "Kambove", lat: -10.876, lng: 26.597 },
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
      }).setView([-11.6, 26.8], 7);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
      }).addTo(map);

      stations.forEach((s: any) => {
        L.circleMarker([s.lat, s.lng], {
          radius: 7,
          color: "#e11a1a",
          weight: 2,
          fillColor: "#e11a1a",
          fillOpacity: 0.9,
        })
          .addTo(map)
          .bindPopup(`<div style=\"font-weight:600;\">${s.name}</div>`);
      });

      const bounds = L.latLngBounds(stations.map((s: any) => [s.lat, s.lng]));
      map.fitBounds(bounds.pad(0.35));

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
    {
      src: "/images/storage-tanks-petroleum-products.jpg",
      label: "Stockage",
    },
    {
      src: "/images/high-angle-view-industry-factory.jpg",
      label: "Infrastructures",
    },
    {
      src: "/images/vehicles-coal-mine-view.jpg",
      label: "Opérations site",
    },
    {
      src: "/images/large-truck-carrying-sand-platinum-mining-site-africa.jpg",
      label: "Approvisionnement",
    },
  ];

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
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative pt-28 pb-16 bg-[#1f1f1f] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/storage-tanks-petroleum-products.jpg"
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

            <div className="inline-flex items-center justify-center gap-2 border border-white/15 bg-white/10 text-white/85 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-[#e11a1a]" />
              Continuité d’approvisionnement
            </div>

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
                <Link to="/services/stations-essence" className="w-full">
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
                {gallery.map((item) => (
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
                    <p className="text-white/80 text-sm font-semibold tracking-wider uppercase">Implantations</p>
                    <h3 className="text-lg font-bold mt-2">Points de distribution & stations opérées</h3>
                    <p className="text-white/70 text-sm mt-2 leading-relaxed">
                      Visualisez un échantillon de points de service. Les emplacements sont illustratifs et s’adaptent à votre périmètre.
                    </p>
                  </div>
                  <div className="w-11 h-11 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-[#e11a1a]">
                    <MapPin className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6">
                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/30">
                  <div ref={mapContainerRef} className="w-full h-[340px]" />
                </div>

                 
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white scroll-animate">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-[#e11a1a] text-sm font-semibold tracking-wider uppercase">FAQ</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-3">Questions fréquentes</h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((item) => (
              <AccordionItem key={item.q} value={item.q} className="border-b border-gray-200">
                <AccordionTrigger className="text-left font-semibold text-gray-900">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
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

export default TransportHydrocarbures;
