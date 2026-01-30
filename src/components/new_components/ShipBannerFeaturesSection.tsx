import React from 'react';
import { ShieldCheck, Globe2, BadgeDollarSign, Headphones } from 'lucide-react';

const ShipBannerFeaturesSection = () => {
  const features = [
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: 'Livraison fiable, sur site',
      description: "Sécurisation des flux vers sites miniers\net zones industrielles.",
    },
    {
      icon: <Globe2 className="w-5 h-5" />,
      title: 'Couverture multi-sites',
      description: 'Coordination des trajets\net gestion des points de chute.',
    },
    {
      icon: <BadgeDollarSign className="w-5 h-5" />,
      title: 'Coûts maîtrisés',
      description: 'Optimisation des itinéraires\net transparence des opérations.',
    },
    {
      icon: <Headphones className="w-5 h-5" />,
      title: 'Support 24/7',
      description: 'Assistance opérationnelle\npour continuité sur le terrain.',
    },
  ];

  return (
    <section className="py-14 bg-white scroll-animate">
      <div className="max-w-7xl mx-auto px-8">
        <div className="relative overflow-hidden">
          <div className="h-[420px]">
            <img
              src="/images/images_ndc/TRANSPORT/TR -7.png"
              alt="Opérations minières"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#0f1729]/40"></div>
          </div>

          <div className="absolute inset-x-0 bottom-0">
            <div className="grid md:grid-cols-4 bg-black/35 backdrop-blur-sm border-t border-white/10">
              {features.map((f, idx) => (
                <div
                  key={idx}
                  className={`p-8 text-white ${idx !== 0 ? 'border-t md:border-t-0 md:border-l border-white/10' : ''}`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${idx === 0 ? 'bg-[#e11a1a]' : 'bg-white/15'} text-white`}>
                      {f.icon}
                    </div>
                    <div>
                      <p className="font-extrabold text-sm md:text-base leading-snug">
                        {f.title}
                      </p>
                      <p className="mt-2 text-xs text-white/80 leading-relaxed whitespace-pre-line">
                        {f.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default ShipBannerFeaturesSection;