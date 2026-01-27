import React from 'react';
import { Check } from 'lucide-react';

interface FaqSectionProps {
  variant?: 'dark' | 'light';
}

const FaqSection = ({ variant = 'dark' }: FaqSectionProps) => {

  const isDark = variant === 'dark';
  
  return (
    <section id="faq" className={`py-14 sm:py-20 lg:py-28 ${isDark ? 'section-dark' : 'bg-white'} scroll-animate`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-2xl">
          <div className="scroll-animate">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#e11a1a]">
              Questions & Réponses
              <span className="text-[#e11a1a]">⇄</span>
            </div>

            <h2 className={`mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Questions
              <br />
              fréquentes
            </h2>

            <p className={`mt-5 text-sm sm:text-base max-w-md ${isDark ? 'text-white/70' : 'text-gray-600'}`}>
              Nous répondons aux questions les plus courantes sur nos services de système de stockage d'hydrocarbures, de transport et de transit.
            </p>

            <div className={`mt-8 space-y-3 text-sm ${isDark ? 'text-white/80' : 'text-gray-700'}`}>
              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#e11a1a]/10 flex items-center justify-center text-[#e11a1a] mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <p>Solutions spécialisées pour marchandises fragiles et périssables</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#e11a1a]/10 flex items-center justify-center text-[#e11a1a] mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <p>Suivi en temps réel des expéditions avec mises à jour</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;