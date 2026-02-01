import React, { useMemo, useState } from 'react';
import { Check, Minus, Plus } from 'lucide-react';
import { useI18n } from '@/i18n/I18nProvider';

const FaqSection = () => {
  const { language } = useI18n();
  
  const items = useMemo(
    () => language === "fr" ? [
      {
        title: "Quels sont les différents types de logistique ?",
        content: "La logistique regroupe la planification, l'exécution et le contrôle du transport et du stockage des marchandises, de l'origine jusqu'au point de consommation.",
      },
      {
        title: "Comment fonctionne le dédouanement pour un transport international ?",
        content: "Le dédouanement inclut la documentation, les droits et taxes, et les contrôles de conformité. Un transitaire/broker vous accompagne pour respecter les règles avant la mise à disposition.",
      },
      {
        title: "Quels sont les défis courants en logistique ?",
        content: "Les défis les plus fréquents : variations de capacité, retards, exigences réglementaires, et manque de visibilité sur plusieurs transporteurs et itinéraires.",
      },
      {
        title: "Quel est l'impact de la technologie sur la logistique ?",
        content: "La technologie améliore le tracking, l'optimisation des itinéraires, la précision des stocks et la communication grâce à la visibilité temps réel et l'automatisation.",
      },
    ] : [
      {
        title: "What are the different types of logistics?",
        content: "Logistics encompasses the planning, execution and control of transportation and storage of goods, from origin to point of consumption.",
      },
      {
        title: "How does customs clearance work for international transport?",
        content: "Customs clearance includes documentation, duties and taxes, and compliance checks. A freight forwarder/broker assists you in meeting regulations before release.",
      },
      {
        title: "What are common challenges in logistics?",
        content: "The most frequent challenges: capacity variations, delays, regulatory requirements, and lack of visibility across multiple carriers and routes.",
      },
      {
        title: "What is the impact of technology on logistics?",
        content: "Technology improves tracking, route optimization, inventory accuracy and communication through real-time visibility and automation.",
      },
    ],
    [language]
  );

  const features = language === "fr" ? [
    "Gestion efficace du transport de matières premières, engins et marchandises",
    "Gestion des risques et protocoles d'urgence en cas de déversement de produits transportés",
    "Suivi en temps réel des expéditions avec mises à jour",
  ] : [
    "Efficient management of raw material, equipment and goods transport",
    "Risk management and emergency protocols for transported product spills",
    "Real-time shipment tracking with updates",
  ];

  const texts = {
    badge: language === "fr" ? "Questions & Réponses" : "Questions & Answers",
    title1: language === "fr" ? "Questions" : "Frequently",
    title2: language === "fr" ? "fréquentes" : "Asked Questions",
    description: language === "fr" 
      ? "Nous répondons aux questions les plus courantes sur nos services de transport, stockage et distribution."
      : "We answer the most common questions about our transport, storage and distribution services.",
    viewAllBtn: language === "fr" ? "Voir toutes les FAQ" : "View all FAQs",
  };

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-14 sm:py-20 lg:py-28 bg-white scroll-animate">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="scroll-animate">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#e11a1a]">
              {texts.badge}
              <span className="text-[#e11a1a]">⇄</span>
            </div>

            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              {texts.title1}
              <br />
              {texts.title2}
            </h2>

            <p className="mt-5 text-sm sm:text-base text-gray-500 max-w-md">
              {texts.description}
            </p>

            <div className="mt-8 space-y-3 text-sm text-gray-700">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#e11a1a]/10 flex items-center justify-center text-[#e11a1a] mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <p>{feature}</p>
                </div>
              ))}
            </div>

            <button className="mt-10 bg-[#e11a1a] hover:bg-red-700 text-white px-6 py-3 rounded-md font-semibold text-sm transition-all hover:scale-105 hover:shadow-lg">
              {texts.viewAllBtn}
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
