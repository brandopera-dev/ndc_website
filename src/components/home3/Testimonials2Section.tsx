import React from 'react';
import { Star, Quote } from 'lucide-react';

export const Testimonials2Section = () => {
  const testimonials = [
    {
      name: 'Jean-Pierre Mukendi',
      role: 'Directeur Opérations',
      company: 'Mining Corp',
      content: 'Un service exceptionnel et une équipe très professionnelle. Nos opérations n\'ont jamais été aussi fluides.',
      rating: 5,
      image: '/images/avatar1.jpg'
    },
    {
      name: 'Marie Kabongo',
      role: 'Responsable Logistique',
      company: 'Industrial Solutions',
      content: 'La gestion de carburant et le transit sont gérés de manière impeccable. Je recommande vivement leurs services.',
      rating: 5,
      image: '/images/avatar2.jpg'
    },
    {
      name: 'Patrick Mwamba',
      role: 'CEO',
      company: 'Transport & Co',
      content: 'Un partenaire fiable qui comprend vraiment les défis de l\'industrie minière en Afrique.',
      rating: 5,
      image: '/images/avatar3.jpg'
    }
  ];

  return (
    <section className="py-20 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ce Que Disent Nos Clients
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            La satisfaction de nos clients est notre priorité absolue
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all"
            >
              <Quote className="w-10 h-10 text-[#e11a1a] mb-4" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#e11a1a] text-[#e11a1a]" />
                ))}
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-600"></div>
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials2Section;
