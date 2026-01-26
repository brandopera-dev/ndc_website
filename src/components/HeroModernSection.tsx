import React from 'react';
import { ArrowRight, Shield, Clock, Award } from 'lucide-react';

export const HeroModernSection = () => {
  const stats = [
    { icon: <Shield className="w-6 h-6" />, value: '15+', label: 'Ans d\'expérience' },
    { icon: <Clock className="w-6 h-6" />, value: '24/7', label: 'Support opérationnel' },
    { icon: <Award className="w-6 h-6" />, value: '100%', label: 'Conformité garantie' }
  ];

  return (
    <section id="home" className="relative min-h-[80vh] sm:min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/high-angle-view-industry-factory.jpg"
          alt="Industries et mines"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50"></div>
        
        {/* Overlay Pattern */}
        {/* <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div> */}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 pt-28 sm:pt-36 lg:pt-40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
           

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-5 sm:mb-6 scroll-animate">
              Votre Partenaire Logistique
              <br />
              <span className="text-[#e11a1a]">Mines & Industries</span>
            </h1>

            <p className="text-base sm:text-xl text-gray-300 leading-relaxed mb-7 sm:mb-8 max-w-xl scroll-animate">
              Solutions complètes de Fuel Management, Transit et Transport 
              pour les opérations minières et industrielles en Afrique.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 scroll-animate">
              <a
                href="#services"
                className="group bg-[#e11a1a] hover:bg-red-700 text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all inline-flex items-center justify-center gap-2 shadow-2xl shadow-red-500/30 hover:scale-105 hover:shadow-red-500/50"
              >
                Nos services
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#devis"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all inline-flex items-center justify-center hover:scale-105 hover:border-white/50"
              >
                Demander un devis
              </a>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative">
              {/* Floating Card 1 */}
              <div className="absolute -top-8 right-0 bg-white rounded-2xl p-6 shadow-2xl max-w-[280px] animate-float scroll-animate hover:scale-105 transition-transform cursor-pointer">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-[#e11a1a]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Fuel Management</p>
                    <p className="font-bold text-gray-900">Solution Full</p>
                  </div>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full w-[85%] bg-[#e11a1a] rounded-full"></div>
                </div>
              </div>

              {/* Floating Card 2 */}
              <div className="absolute top-40 -right-12 bg-[#e11a1a] text-white rounded-2xl p-6 shadow-2xl max-w-[240px] animate-float scroll-animate hover:scale-105 transition-transform cursor-pointer" style={{ animationDelay: '1s' }}>
                <p className="text-sm text-white/80 mb-2">Transit & Douanes</p>
                <p className="text-3xl font-extrabold mb-1">98%</p>
                <p className="text-sm text-white/90">Taux de conformité</p>
              </div>

              {/* Floating Card 3 */}
              <div className="absolute bottom-0 right-20 bg-white rounded-2xl p-6 shadow-2xl max-w-[260px] animate-float scroll-animate hover:scale-105 transition-transform cursor-pointer" style={{ animationDelay: '2s' }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
                    <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white"></div>
                    <div className="w-8 h-8 rounded-full bg-gray-500 border-2 border-white"></div>
                  </div>
                  <p className="text-sm text-gray-600">+50 clients actifs</p>
                </div>
                <p className="text-xs text-gray-500">Mines & Industries</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};



export default HeroModernSection