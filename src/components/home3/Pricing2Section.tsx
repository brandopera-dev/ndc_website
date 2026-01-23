import React from 'react';
import { Check } from 'lucide-react';

export const Pricing2Section = () => {
  const plans = [
    {
      name: 'Starter',
      price: 'Sur devis',
      description: 'Idéal pour les petites opérations',
      features: [
        'Transport routier basique',
        'Support email',
        'Suivi des livraisons',
        'Rapport mensuel'
      ],
      highlighted: false
    },
    {
      name: 'Professional',
      price: 'Sur devis',
      description: 'Pour les opérations moyennes',
      features: [
        'Tout du plan Starter',
        'Transit & Douanes',
        'Support prioritaire 24/7',
        'Fuel Management',
        'Rapports détaillés',
        'Gestionnaire dédié'
      ],
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: 'Sur devis',
      description: 'Solutions sur mesure',
      features: [
        'Tout du plan Professional',
        'Solutions personnalisées',
        'Équipe dédiée',
        'SLA garanti',
        'Intégration API',
        'Formation incluse'
      ],
      highlighted: false
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a1628] mb-4">
            Nos Tarifs
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choisissez le plan qui correspond à vos besoins
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`rounded-2xl p-8 ${
                plan.highlighted 
                  ? 'bg-[#0a1628] text-white border-4 border-[#e11a1a] transform scale-105' 
                  : 'bg-gray-50 border-2 border-gray-200'
              }`}
            >
              {plan.highlighted && (
                <div className="inline-block bg-[#e11a1a] text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  Populaire
                </div>
              )}
              
              <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-[#0a1628]'}`}>
                {plan.name}
              </h3>
              
              <div className="mb-4">
                <span className={`text-4xl font-bold ${plan.highlighted ? 'text-white' : 'text-[#0a1628]'}`}>
                  {plan.price}
                </span>
              </div>
              
              <p className={`mb-6 ${plan.highlighted ? 'text-gray-300' : 'text-gray-600'}`}>
                {plan.description}
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.highlighted ? 'text-[#e11a1a]' : 'text-[#e11a1a]'}`} />
                    <span className={plan.highlighted ? 'text-gray-300' : 'text-gray-700'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-lg font-semibold transition-all ${
                plan.highlighted
                  ? 'bg-[#e11a1a] hover:bg-red-700 text-white'
                  : 'bg-[#0a1628] hover:bg-[#0a1628]/90 text-white'
              }`}>
                Choisir ce plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing2Section;
