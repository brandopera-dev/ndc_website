import { Timer, Truck, Globe, ShieldCheck, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Timer,
    title: "Suivi en Temps Réel",
    description: "Suivez vos expéditions avec des mises à jour en direct à chaque étape. Notre système de suivi avancé vous tient informé 24h/7. Recevez des notifications instantanées sur les changements de statut et les délais."
  },
  {
    icon: Globe,
    title: "Couverture Nationale",
    description: "Notre réseau logistique couvre plus de 60 pays, offrant une livraison fluide à travers les continents — où que votre cargaison doive aller."
  },
  {
    icon: ShieldCheck,
    title: "Sécurisé & Fiable",
    description: "Nous priorisons la sécurité de votre cargaison avec des protocoles de sécurité de premier ordre et des partenaires de transport de confiance pour une expérience sans souci."
  }
];

const WhyChooseSection = () => {
  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-md">
            Pourquoi <span className="italic font-normal text-blue-400">TransLog</span> est Le Bon Choix pour vous
          </h2>
          <Button 
            variant="outline" 
            className="border-blue-500 text-blue-400 hover:bg-blue-500/10 rounded-full px-6 self-start"
          >
            Découvrir nos Services
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column - 3 feature cards */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Right column - Large feature card */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 flex flex-col justify-between hover:border-blue-500/50 transition-all duration-300">
            <div>
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                <Truck className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Livraison Rapide</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Nos solutions logistiques express garantissent que vos marchandises arrivent rapidement, sans compromettre la sécurité ou la qualité du service.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Que ce soit national ou international, nous priorisons vos expéditions urgentes avec une coordination haute vitesse.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Avec une planification flexible et un support 24h/7
              </p>
            </div>
            <Button 
              className="mt-8 bg-blue-600 hover:bg-blue-700 text-white rounded-full w-full"
            >
              Obtenir un Devis Express
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
