import React, { useMemo, useState } from 'react';
import { Check, Minus, Plus } from 'lucide-react';

const FaqSection = () => {
  const items = useMemo(
    () => [
      {
        title: "Quels sont les différents types de logistique ?",
        content:
          "La logistique regroupe la planification, l'exécution et le contrôle du transport et du stockage des marchandises, de l'origine jusqu'au point de consommation.",
      },
      {
        title: "Comment fonctionne le dédouanement pour un transport international ?",
        content:
          "Le dédouanement inclut la documentation, les droits et taxes, et les contrôles de conformité. Un transitaire/broker vous accompagne pour respecter les règles avant la mise à disposition.",
      },
      {
        title: "Quels sont les défis courants en logistique ?",
        content:
          "Les défis les plus fréquents : variations de capacité, retards, exigences réglementaires, et manque de visibilité sur plusieurs transporteurs et itinéraires.",
      },
      {
        title: "Quel est l'impact de la technologie sur la logistique ?",
        content:
          "La technologie améliore le tracking, l'optimisation des itinéraires, la précision des stocks et la communication grâce à la visibilité temps réel et l'automatisation.",
      },
    ],
    []
  );

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-14 sm:py-20 lg:py-28 bg-white scroll-animate">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="scroll-animate">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#e11a1a]">
              Questions & Réponses
              <span className="text-[#e11a1a]">⇄</span>
            </div>

            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Questions
              <br />
              fréquentes
            </h2>

            <p className="mt-5 text-sm sm:text-base text-gray-500 max-w-md">
              Nous répondons aux questions les plus courantes sur nos services de transport, stockage et distribution.
            </p>

            <div className="mt-8 space-y-3 text-sm text-gray-700">
              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#e11a1a]/10 flex items-center justify-center text-[#e11a1a] mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <p>Gestion efficace du transport de marchandises</p>
              </div>
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

            <button className="mt-10 bg-[#e11a1a] hover:bg-red-700 text-white px-6 py-3 rounded-md font-semibold text-sm transition-all hover:scale-105 hover:shadow-lg">
              Voir toutes les FAQ
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden scroll-animate">
            {items.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={item.title} className="border-b border-gray-200 last:border-b-0">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className={`w-full text-left px-6 py-5 flex items-center justify-between gap-6 ${
                      isOpen ? 'bg-[#e11a1a] text-white' : 'bg-white text-gray-900'
                    }`}
                  >
                    <span className="font-bold text-sm md:text-base">{item.title}</span>
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        isOpen ? 'bg-white/15 text-white' : 'bg-gray-100 text-gray-900'
                      }`}
                    >
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 py-5 bg-[#f2f2f2] text-sm text-gray-600 leading-relaxed">
                      {item.content}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;