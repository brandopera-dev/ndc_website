import React from 'react';
import { Truck, Shield, Clock, Globe } from 'lucide-react';

export const FeaturesGrid2Section = () => {
  const features = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Transport Fiable',
      description: 'Solutions de transport routier et maritime adaptées à vos besoins'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Sécurité Garantie',
      description: 'Protection complète de vos marchandises tout au long du trajet'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Livraison Rapide',
      description: 'Respect des délais avec un suivi en temps réel'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Couverture Internationale',
      description: 'Services de transit et douanes dans toute l\'Afrique'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-6 rounded-xl bg-gray-50 hover:bg-[#1f1f1f] transition-all duration-300 cursor-pointer"
            >
              <div className="w-16 h-16 rounded-lg bg-[#e11a1a]/10 group-hover:bg-[#e11a1a] flex items-center justify-center mb-4 transition-all">
                <div className="text-[#e11a1a] group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-white transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-300 transition-colors">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid2Section;
