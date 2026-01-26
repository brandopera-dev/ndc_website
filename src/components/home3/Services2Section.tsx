import React from 'react';
import { Fuel, Ship, Truck, Package, Wrench, Mountain } from 'lucide-react';

export const Services2Section = () => {
  const services = [
    {
      icon: <Fuel className="w-10 h-10" />,
      title: 'Fuel Management',
      description: 'Gestion complète de carburant pour les opérations minières et industrielles',
      image: '/images/fuel-management.jpg'
    },
    {
      icon: <Ship className="w-10 h-10" />,
      title: 'Transit & Douanes',
      description: 'Services de transit et dédouanement pour vos importations et exportations',
      image: '/images/transit.jpg'
    },
    {
      icon: <Truck className="w-10 h-10" />,
      title: 'Transport Routier',
      description: 'Solutions de transport routier sécurisé à travers toute l\'Afrique',
      image: '/images/transport.jpg'
    },
    {
      icon: <Package className="w-10 h-10" />,
      title: 'Transport Maritime',
      description: 'Fret maritime international avec suivi complet de vos marchandises',
      image: '/images/maritime.jpg'
    },
    {
      icon: <Wrench className="w-10 h-10" />,
      title: 'Conception Cuves',
      description: 'Conception et installation de cuves de stockage sur mesure',
      image: '/images/cuves.jpg'
    },
    {
      icon: <Mountain className="w-10 h-10" />,
      title: 'Logistique Minière',
      description: 'Solutions logistiques spécialisées pour l\'industrie minière',
      image: '/images/mining.jpg'
    }
  ];

  return (
    <section className="py-20 bg-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nos Services
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Des solutions logistiques complètes adaptées à vos besoins spécifiques
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 cursor-pointer border border-white/10"
            >
              <div className="p-8">
                <div className="w-16 h-16 rounded-lg bg-[#e11a1a] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services2Section;
