import React from 'react';

export const Stats2Section = () => {
  const stats = [
    { value: '18', label: 'Ans d\'expérience' },
    { value: '500+', label: 'Projets réalisés' },
    { value: '50+', label: 'Clients satisfaits' },
    { value: '24/7', label: 'Support disponible' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-[#e11a1a] mb-2">
                {stat.value}
              </div>
              <div className="text-lg text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats2Section;
