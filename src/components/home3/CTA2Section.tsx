import React from 'react';
import { ArrowRight, Phone, Mail } from 'lucide-react';

export const CTA2Section = () => {
  return (
    <section className="py-20 bg-[#1f1f1f] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%">
          <pattern id="grid2" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid2)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="bg-gradient-to-r from-[#e11a1a] to-red-700 rounded-3xl p-12 md:p-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Prêt à Optimiser Votre Logistique ?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Contactez-nous dès aujourd'hui pour discuter de vos besoins 
                et découvrir comment nous pouvons vous aider.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-white text-[#e11a1a] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all inline-flex items-center justify-center gap-2">
                  Demander un devis
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-lg font-semibold text-lg transition-all">
                  En savoir plus
                </button>
              </div>
            </div>

            <div className="space-y-6">
              <a 
                href="tel:+22391883867" 
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-colors block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-white/80">Appelez-nous</div>
                    <div className="text-xl font-bold text-white">+223 91 88 38 67</div>
                  </div>
                </div>
              </a>

              <a 
                href="mailto:info@ndc.africa" 
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-colors block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-white/80">Écrivez-nous</div>
                    <div className="text-xl font-bold text-white">info@ndc.africa</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA2Section;
