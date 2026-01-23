import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  Building2,
  MapPin,
  Network,
  RefreshCcw,
  ShieldCheck,
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

const StationsEssence = () => {
  useEffect(() => {
    const cleanup = initScrollAnimations();
    return cleanup;
  }, []);

  const gallery = [
    {
      src: "/images/high-angle-view-industry-factory.jpg",
      label: "Réseau",
    },
    {
      src: "/images/storage-tanks-petroleum-products.jpg",
      label: "Dépôts",
    },
    {
      src: "/images/vehicles-coal-mine-view.jpg",
      label: "Livraisons",
    },
    {
      src: "/images/large-truck-carrying-sand-platinum-mining-site-africa.jpg",
      label: "Couverture",
    },
  ];

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

      <section className="relative pt-28 pb-16 bg-[#0a1628] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/vehicles-coal-mine-view.jpg"
            alt="Réseaux de distribution"
            className="w-full h-full object-cover opacity-45 saturate-125 contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black/50" />
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

            <div className="inline-flex items-center justify-center gap-2 border border-white/15 bg-white/10 text-white/85 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
              Disponibilité multi-sites
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Réseaux de distribution
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Approvisionnement et gestion de stations-service avec planification des réassorts, traçabilité et standards de sécurité.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/contact">
                <Button className="ndc-btn-gradient text-white rounded-xl px-8 py-6 font-semibold inline-flex items-center gap-2">
                  Demander un devis
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/services/logistique-minerale">
                <Button variant="outline" className="border-white/25 text-white hover:bg-white/10 rounded-xl px-8 py-6 font-semibold">
                  Transport & transit
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <p className="text-[#22c55e] text-sm font-semibold tracking-wider uppercase">• Comment nous opérons</p>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-4">
                Réassort, planification et pilotage des volumes
              </h2>
              <p className="text-muted-foreground leading-relaxed mt-5">
                Nous accompagnons vos stations avec des solutions fiables pour garantir la disponibilité des produits, réduire les
                ruptures et sécuriser l’ensemble de la chaîne.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-gray-200 bg-white p-5 ndc-plaquette-card">
                  <div className="w-11 h-11 rounded-2xl bg-[#22c55e]/10 flex items-center justify-center text-[#22c55e]">
                    <RefreshCcw className="w-5 h-5" />
                  </div>
                  <p className="mt-4 font-bold text-gray-900">Réassort optimisé</p>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    Planification des tournées et optimisation des fréquences.
                  </p>
                </div>
                <div className="rounded-2xl border border-gray-200 bg-white p-5 ndc-plaquette-card">
                  <div className="w-11 h-11 rounded-2xl bg-[#22c55e]/10 flex items-center justify-center text-[#22c55e]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <p className="mt-4 font-bold text-gray-900">Conformité & sécurité</p>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    Protocoles adaptés aux opérations station-service.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6 ndc-plaquette-card">
              <h3 className="text-lg font-bold text-gray-900">Modules</h3>
              <div className="mt-5 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-[#22c55e]">
                    <Network className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Distribution multi-sites</p>
                    <p className="text-sm text-gray-600">Planification centralisée et coordination des points de vente.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-[#22c55e]">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Pilotage des volumes</p>
                    <p className="text-sm text-gray-600">Suivi des livraisons, contrôle des volumes et reporting.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-[#22c55e]">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Support exploitation</p>
                    <p className="text-sm text-gray-600">Accompagnement opérationnel pour assurer la continuité de service.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-[#22c55e]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Livraison multi-zones</p>
                    <p className="text-sm text-gray-600">Gestion des contraintes locales et des zones éloignées.</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link to="/contact" className="w-full">
                  <Button className="w-full ndc-btn-red rounded-xl py-3 font-semibold">Contacter</Button>
                </Link>
                <Link to="/services/transport-hydrocarbures" className="w-full">
                  <Button variant="outline" className="w-full rounded-xl py-3 font-semibold">
                    Fuel management
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <p className="text-[#22c55e] text-sm font-semibold tracking-wider uppercase">• Espace d’exposition</p>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-4">Réseau, réassorts et pilotage des volumes</h2>
              <p className="text-gray-600 leading-relaxed mt-5">
                Un aperçu des environnements et opérations : gestion multi-sites, dépôts, livraisons et couverture géographique.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="grid sm:grid-cols-2 gap-4">
                {gallery.map((item) => (
                  <div key={item.label} className="group relative rounded-2xl overflow-hidden border border-gray-200">
                    <img
                      src={item.src}
                      alt={item.label}
                      className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <div className="absolute left-3 bottom-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/35 px-3 py-1.5 backdrop-blur">
                      <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
                      <span className="text-xs font-semibold text-white">{item.label}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border border-gray-200 bg-gray-50 p-5">
                <p className="text-sm text-gray-700 leading-relaxed">
                  Nous configurons des tournées et fréquences de réassort en fonction des ventes, des stocks et des contraintes locales.
                </p>
                <div className="mt-4 flex flex-col sm:flex-row gap-3">
                  <Link to="/contact" className="w-full">
                    <Button className="w-full ndc-btn-red rounded-xl py-3 font-semibold">Demander une étude</Button>
                  </Link>
                  <Link to="/services/logistique-minerale" className="w-full">
                    <Button variant="outline" className="w-full rounded-xl py-3 font-semibold">Transport & transit</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-[#22c55e] text-sm font-semibold tracking-wider uppercase">FAQ</p>
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

export default StationsEssence;
