import React from 'react';
import { Truck, Plane, Ship, Train, ChevronLeft, ChevronRight } from 'lucide-react';

const ServiceUseSection = () => {
  const services = [
    {
      icon: <Truck className="w-14 h-14" strokeWidth={1.5} />,
      title: "Trucking",
      description: "Reliable ground transportation for shipments across the United States with flexible fleet options."
    },
    {
      icon: <Plane className="w-14 h-14" strokeWidth={1.5} />,
      title: "Air Freight",
      description: "Fast delivery of time-sensitive cargo using global air routes with real-time tracking."
    },
    {
      icon: <Ship className="w-14 h-14" strokeWidth={1.5} />,
      title: "Ship Freight",
      description: "Cost-effective shipping solution for bulk cargo with dependable international sea freight services."
    },
    {
      icon: <Train className="w-14 h-14" strokeWidth={1.5} />,
      title: "Rail Freight",
      description: "Efficient and eco-friendly rail transport option ideal for long-distance heavy shipments."
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-8">
          <div>
            <span className="text-[#e11a1a] font-semibold text-sm uppercase tracking-wider">
              Our Services
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
              Services Tailored to You
            </h2>
            <p className="text-gray-600 mt-4 max-w-xl">
              Offering expert project management, innovative design, renovations, and sustainable building services, Artex Construction delivers quality.
            </p>
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex gap-3">
            <button className="w-12 h-12 rounded-full bg-[#e11a1a] hover:bg-red-700 text-white flex items-center justify-center transition-colors">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="w-12 h-12 rounded-full bg-[#e11a1a] hover:bg-red-700 text-white flex items-center justify-center transition-colors">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group cursor-pointer"
            >
              <div className="text-[#e11a1a] mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceUseSection;