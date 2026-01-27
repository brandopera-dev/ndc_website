
import { Button } from "@/components/ui/button";
import { ArrowUpDown, Play, Target } from "lucide-react";
// import transportTrailer from "@/assets/transport-trailer.jpg";

const partnerLogos = [
  "LogoIpsum", "LogoIpsum", "LogoIpsum", "LogoIpsum", 
  "LogoIpsum", "LogoIpsum", "LogoIpsum", "LogoIpsum"
];

   const TrustedPartnerSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-[#f5f5f5] scroll-animate">
      <div className="max-w-7xl mx-auto px-8">
        {/* Partner Logos */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm mb-8">
            <span className="text-[#e11a1a]">★</span>
            <span className="text-sm font-medium text-foreground">Nos Partenaires de Confiance</span>
          </div>
          
          <div className="flex items-center justify-center gap-8 lg:gap-12 flex-wrap opacity-60">
            {partnerLogos.map((logo, index) => (
              <div key={index} className="flex items-center gap-2 text-muted-foreground">
                <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
                  <span className="text-xs">●</span>
                </div>
                <span className="text-sm font-medium">{logo}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-[#e11a1a]">★</span>
            <span className="text-sm font-medium text-muted-foreground">À Propos de Notre Service</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Left - Text Content + Feature Cards */}
          <div className="lg:col-span-3">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              Votre Partenaire de Confiance en Logistique Globale
            </h2>
            
            <p className="text-muted-foreground text-base lg:text-lg max-w-lg mb-10">
              NDC accompagne les opérations minières et industrielles avec des solutions intégrées
              de Fuel Management, Transit & Douanes, transport et approvisionnement multi-sites.
              Priorité : sécurité, conformité et continuité des opérations sur le terrain.
            </p>

            {/* Feature Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Dark Card */}
              <div className="bg-red-500 rounded-2xl p-6 lg:p-8 text-background">
                <div className="w-10 h-10 rounded-full bg-background/20 flex items-center justify-center mb-6">
                  <Play className="w-5 h-5 text-background" />
                </div>
                <h3 className="text-xl font-bold mb-3">L'Excellence à Chaque Kilomètre</h3>
                <p className="text-background/70 text-sm leading-relaxed">
                  Nous nous engageons à fournir des services logistiques efficaces, 
                  transparents et axés sur la technologie qui connectent les entreprises 
                  à l'échelle mondiale avec rapidité et fiabilité.
                </p>
              </div>

              {/* Light Card */}
              <div className="bg-gray-200 shadow-sm shadow-gray-400 rounded-2xl p-6 lg:p-8">
                <div className="w-10 h-10 rounded-full bg-[#1f1f1f]/10 flex items-center justify-center mb-6">
                  <Target className="w-5 h-5 text-[#e11a1a]" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Façonner l'Avenir de la Logistique</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Notre vision est de construire un écosystème logistique plus intelligent 
                  propulsé par l'innovation, la durabilité et une connectivité mondiale sans faille.
                </p>
              </div>
            </div>
          </div>

          {/* Right - Transfer Form with Image */}
          <div className="lg:col-span-2 relative h-[500px] lg:h-[550px]">
            {/* Background Image - Full height */}
            <div className="absolute inset-0 overflow-hidden shadow-2xl">
              <img 
                src="/images/large-truck-carrying-sand-platinum-mining-site-africa.jpg" 
                alt="Transport camion" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            {/* Transfer Form Card - Positioned at top */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 lg:left-6 lg:translate-x-0 bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-2xl w-[260px] z-10">
              <div className="space-y-3">
                <div>
                  <label className="text-xs text-gray-600 mb-2 block font-medium">Transfert Depuis</label>
                  <div className="flex items-center justify-between bg-gray-100 rounded-lg px-3 py-2.5 border border-gray-200">
                    <div>
                      <p className="text-sm font-semibold text-gray-900">+1(457)21457(x)</p>
                      <p className="text-xs text-gray-500">Dhaka, Bangladesh</p>
                    </div>
                    <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                <div className="flex justify-center py-1">
                  <div className="w-9 h-9 rounded-full bg-[#1f1f1f]/10 flex items-center justify-center">
                    <ArrowUpDown className="w-4 h-4 text-[#e11a1a]" />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-gray-600 mb-2 block font-medium">Transfert Vers</label>
                  <div className="flex items-center justify-between bg-gray-100 rounded-lg px-3 py-2.5 border border-gray-200">
                    <div>
                      <p className="text-sm font-semibold text-gray-900">+8(r14521459)Info</p>
                      <p className="text-xs text-gray-500">California, USA</p>
                    </div>
                    <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* NDC Logo Badge - Bottom right */}
            <div className="absolute bottom-6 right-6 bg-[#e11a1a] text-white px-4 py-2 rounded-lg font-bold text-sm shadow-lg">
              NDC
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 

export default TrustedPartnerSection;