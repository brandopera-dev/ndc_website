import React from 'react';
import { ArrowDown } from 'lucide-react';

const HeroAlternative = () => {
  return (
    <section className="relative min-h-screen flex items-start justify-center overflow-hidden">
      {/* Sky Blue Gradient Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#a8d4f0] via-[#c5e3f6] to-[#e8f4fc]"></div>

      {/* Background Image - Station */}
      <div className="absolute inset-x-0 bottom-0 z-10 h-[60%]">
        <img
          src="/images/high-angle-view-industry-factory.jpg"
          alt="NDC Station"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-[#c5e3f6]/80"></div>
      </div>

      {/* Dark Wave at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg viewBox="0 0 1440 100" className="w-full h-auto" preserveAspectRatio="none">
          <path
            fill="#1a1a1a"
            d="M0,40 C200,80 400,20 600,50 C800,80 1000,30 1200,60 C1300,75 1380,50 1440,40 L1440,100 L0,100 Z"
          ></path>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-30 max-w-4xl mx-auto px-8 text-center pt-32 md:pt-40">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg" style={{ fontStyle: 'italic' }}>
          Toujours plus{' '}
          <span className="text-[#e11a1a]">loin.</span>
        </h1>

        <p className="text-white/90 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed drop-shadow-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed nibh felis. 
          Aliquam eget mauris ultrices ligula sollicitudin consequat.
        </p>

        <button className="group bg-[#e11a1a] hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold text-base transition-all inline-flex items-center gap-2 shadow-xl">
          Visioner
          <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/your-number"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110"
      >
        <svg
          className="w-7 h-7 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>
    </section>
  );
};

export default HeroAlternative;
