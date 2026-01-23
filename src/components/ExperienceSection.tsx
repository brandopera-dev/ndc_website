import React from 'react';
import { Truck, Phone, Globe, Tag } from 'lucide-react';

  const ExperienceSection = () => {
  const features = [
    {
      icon: <Truck className="text-[#e11a1a]" size={32} />,
      title: "Transport minier & distribution",
      description: "Acheminement sécurisé vers sites miniers, dépôts et stations, avec planification et suivi opérationnel."
    },
    {
      icon: <Globe className="text-[#e11a1a]" size={32} />,
      title: "Transit & Douanes",
      description: "Gestion documentaire, conformité et coordination des opérations de transit pour fluidifier vos flux."
    },
    {
      icon: <Tag className="text-[#e11a1a]" size={32} />,
      title: "Fuel Management",
      description: "Stockage, distribution et contrôle des opérations carburant (traçabilité, optimisation et maîtrise des pertes)."
    },
    {
      icon: <Phone className="text-[#e11a1a]" size={32} />,
      title: "Support 24/7 & HSE",
      description: "Assistance terrain continue, procédures de sécurité et respect des exigences opérationnelles."
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-white scroll-animate">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-12">
          <span className="bg-gray-200 text-gray-600 text-xs font-semibold px-4 py-2 rounded-full uppercase tracking-wider mb-4 inline-block">
            NOS ENGAGEMENTS TERRAIN
          </span>
          <h2 className="text-4xl font-bold text-black">
            L'expertise NDC sur le terrain
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 hover:shadow-md transition-all duration-300 ease-in-out">
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-black mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default ExperienceSection;