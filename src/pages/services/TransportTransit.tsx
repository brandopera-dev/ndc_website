import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
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

const TransportTransit = () => {
  useEffect(() => {
    const cleanup = initScrollAnimations();
    return cleanup;
  }, []);

  const gallery = [
    {
      src: "/images/large-truck-carrying-sand-platinum-mining-site-africa.jpg",
      label: "Convoyage",
    },
    {
      src: "/images/vehicles-coal-mine-view.jpg",
      label: "Site minier",
    },
    {
      src: "/images/high-angle-view-industry-factory.jpg",
      label: "Plateformes",
    },
    {
      src: "/images/storage-tanks-petroleum-products.jpg",
      label: "Corridors",
    },
  ];

  const points = [
    "Organisation des flux et planification des rotations",
    "Sécurisation des trajets et coordination opérationnelle",
    "Opérations adaptées aux contraintes terrain (sites éloignés)",
    "Reporting et amélioration continue",
  ];

  const faqs = [
    {
      q: "Pouvez-vous opérer sur des pistes / zones éloignées ?",
      a: "Oui. Nous adaptons le plan de transport aux contraintes terrain et aux accès site.",
    },
    {
      q: "Comment sécurisez-vous les convois ?",
      a: "Par la planification, des procédures HSE, des contrôles, et une coordination opérationnelle continue.",
    },
    {
      q: "Proposez-vous des contrats long terme ?",
      a: "Oui. Nos contrats s’adaptent à l’évolution des projets, avec des SLA/KPI et un reporting.",
    },
    {
      q: "Gérez-vous également le transit ?",
      a: "Selon le périmètre, nous pouvons intégrer les dossiers de transit pour réduire les délais et les blocages.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative pt-28 pb-16 bg-[#1f1f1f] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/large-truck-carrying-sand-platinum-mining-site-africa.jpg"
            alt="Logistique minérale"
            className="w-full h-full object-cover opacity-45 saturate-125 contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <nav className="flex items-center justify-center gap-2 text-sm text-white/70 mb-8">
              <Link to="/services" className="hover:text-white transition-colors">
                Services
              </Link>
              <span className="text-white/50">/</span>
              <span className="text-white">Transport & transit</span>
            </nav>

            {/* <div className="inline-flex items-center justify-center gap-2 border border-white/15 bg-white/10 text-white/85 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-[#f59e0b]" />
              Continuité des opérations
            </div> */}

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Transport & transit
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Transport industriel et transit des intrants et matériaux sur site avec coordination continue, sécurisation des flux et planification optimisée.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/contact">
                <Button className="bg-[#e11a1a] hover:bg-red-700 text-white rounded-xl px-8 py-6 font-semibold inline-flex items-center gap-2">
                  Demander un devis
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/services/fuel-management">
                <Button variant="outline" className="border-white/25 text-white hover:bg-white/10 rounded-xl px-8 py-6 font-semibold">
                  Fuel management
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
              <p className="text-white/90 text-sm font-semibold tracking-wider uppercase">• Spécificités terrain</p>
              <h2 className="text-2xl md:text-3xl font-bold text-white mt-4">
                Un rôle clé auprès des mines et industries
              </h2>
              <p className="text-white/80 leading-relaxed mt-5">
                Chaque interruption imprévue, retard d’approvisionnement ou blocage administratif peut impacter fortement la
                performance d’exploitation. Notre approche vise à réduire ces risques et à rendre les flux plus prévisibles.
              </p>

              <div className="mt-7 grid sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/20 bg-white/10 p-5 hover:bg-white/15 transition-all">
                  <div className="w-11 h-11 rounded-2xl bg-white/20 flex items-center justify-center text-white">
                    <Truck className="w-5 h-5" />
                  </div>
                  <p className="mt-4 font-bold text-white">Flotte dédiée</p>
                  <p className="mt-2 text-sm text-white/80 leading-relaxed">
                    Capacités adaptées aux rotations et aux contraintes d’accès.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/20 bg-white/10 p-5 hover:bg-white/15 transition-all">
                  <div className="w-11 h-11 rounded-2xl bg-white/20 flex items-center justify-center text-white">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <p className="mt-4 font-bold text-white">Sécurité des flux</p>
                  <p className="mt-2 text-sm text-white/80 leading-relaxed">
                    Planification, procédures HSE et points de contrôle.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/20 bg-white/10 p-6">
              <h3 className="text-lg font-bold text-white">Ce que vous gagnez</h3>
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
                    <p className="font-semibold text-white">Zones d'intervention</p>
                    <p className="text-sm text-white/80">
                      Corridors miniers, zones industrielles, dépôts et plateformes logistiques.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link to="/contact" className="w-full">
                  <Button className="w-full ndc-btn-red rounded-xl py-3 font-semibold">Contacter</Button>
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
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <p className="text-[#f59e0b] text-sm font-semibold tracking-wider uppercase">• Espace d’exposition</p>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-100 mt-4">Matériels, flux et zones d’intervention</h2>
              <p className="text-gray-100 leading-relaxed mt-5">
                Un aperçu des contextes terrain (pistes, corridors, plateformes) et des opérations de transport & transit.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="grid sm:grid-cols-2 gap-4">
                {gallery.map((item) => (
                  <div key={item.label} className="group relative overflow-hidden border border-gray-700">
                    <img
                      src={item.src}
                      alt={item.label}
                      className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <div className="absolute left-3 bottom-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/35 px-3 py-1.5 backdrop-blur">
                      <span className="w-2 h-2 rounded-full bg-[#f59e0b]" />
                      <span className="text-xs font-semibold text-white">{item.label}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border border-gray-200 bg-gray-50 p-5">
                <p className="text-sm text-gray-700 leading-relaxed">
                  Besoin d’un dispositif adapté à vos rotations et contraintes d’accès ? Nous dimensionnons une organisation opérationnelle
                  (planning, coordination, reporting) selon votre site.
                </p>
                <div className="mt-4 flex flex-col sm:flex-row gap-3">
                  <Link to="/contact" className="w-full">
                    <Button className="w-full ndc-btn-red rounded-xl py-3 font-semibold">Discuter de votre flux</Button>
                  </Link>
                  <Link to="/services/fuel-management" className="w-full">
                    <Button variant="outline" className="w-full rounded-xl py-3 font-semibold">Fuel management</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white scroll-animate">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-[#f59e0b] text-sm font-semibold tracking-wider uppercase">FAQ</p>
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

export default TransportTransit;
