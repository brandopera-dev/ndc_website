import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero2Section = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#1f1f1f]">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/high-angle-view-industry-factory.jpg"
          alt="Logistics"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/90 to-[#0a1628]/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 pt-32 pb-20 w-full">
        <div className="max-w-2xl">
          <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <span className="text-white text-sm font-medium">🚚 Transport & Logistique</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white">
            Delivering More
            <br />
            <span className="text-[#e11a1a]">Than Just Freight</span>
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-xl">
            Solutions logistiques complètes pour vos besoins de transport, 
            transit et gestion de carburant en Afrique.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="group bg-[#e11a1a] hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all inline-flex items-center justify-center gap-2">
              Nos Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white text-[#1f1f1f] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all">
              Demander un devis
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2Section;
