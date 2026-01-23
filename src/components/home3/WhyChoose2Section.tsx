import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const WhyChoose2Section = () => {
  const reasons = [
    'Expertise de plus de 15 ans dans la logistique',
    'Réseau étendu à travers toute l\'Afrique',
    'Solutions personnalisées pour chaque client',
    'Équipe professionnelle et expérimentée',
    'Technologie de suivi en temps réel',
    'Conformité totale aux normes internationales'
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a1628] mb-6">
              Pourquoi Nous Choisir ?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Nous sommes votre partenaire de confiance pour tous vos besoins logistiques. 
              Notre expertise et notre engagement garantissent le succès de vos opérations.
            </p>
            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#e11a1a] flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700">{reason}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="/images/high-angle-view-industry-factory.jpg"
                alt="Why Choose Us"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#e11a1a] text-white p-8 rounded-xl shadow-2xl max-w-xs">
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-sm">Taux de satisfaction client</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose2Section;
