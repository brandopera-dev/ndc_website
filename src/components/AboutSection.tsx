import { Button } from "@/components/ui/button";
import { ArrowUpDown, Play, Target } from "lucide-react";
import transportTrailer from "@/assets/transport-trailer.jpg";

const partnerLogos = [
  "LogoIpsum", "LogoIpsum", "LogoIpsum", "LogoIpsum", 
  "LogoIpsum", "LogoIpsum", "LogoIpsum", "LogoIpsum"
];

const AboutSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-[#f5f5f5]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Partner Logos */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm mb-8">
            <span className="text-orange-500">★</span>
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
            <span className="text-orange-500">★</span>
            <span className="text-sm font-medium text-muted-foreground">À Propos de Notre Service</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12">
          {/* Left - Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              Votre Partenaire de Confiance en Logistique Globale
            </h2>
            
            <p className="text-muted-foreground text-base lg:text-lg max-w-lg">
              SwiftMove Logistics livre plus que des expéditions — nous livrons confiance, 
              précision et technologie intelligente qui fait avancer les entreprises.
            </p>
          </div>

          {/* Right - Transfer Form with Image */}
          <div className="relative">
            {/* Transfer Form Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg max-w-xs ml-auto relative z-10">
              <div className="space-y-4">
                <div>
                  <label className="text-xs text-muted-foreground mb-1 block">Transfert Depuis</label>
                  <div className="flex items-center justify-between bg-muted/30 rounded-lg px-3 py-2">
                    <div>
                      <p className="text-sm font-medium text-foreground">+1(457)21457(x)</p>
                      <p className="text-xs text-muted-foreground">Dhaka, Bangladesh</p>
                    </div>
                    <svg className="w-4 h-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="w-8 h-8 rounded-full bg-muted/50 flex items-center justify-center">
                    <ArrowUpDown className="w-4 h-4 text-muted-foreground" />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-muted-foreground mb-1 block">Transfert Vers</label>
                  <div className="flex items-center justify-between bg-muted/30 rounded-lg px-3 py-2">
                    <div>
                      <p className="text-sm font-medium text-foreground">+8(r14521459)Info</p>
                      <p className="text-xs text-muted-foreground">California, USA</p>
                    </div>
                    <svg className="w-4 h-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Image */}
            <div className="absolute top-12 -right-4 lg:-right-8 w-64 lg:w-80 h-48 lg:h-56 overflow-hidden shadow-xl -z-0">
              <img 
                src={transportTrailer} 
                alt="Transport camion" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
          {/* Dark Card */}
          <div className="bg-foreground rounded-2xl p-6 lg:p-8 text-background">
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
          <div className="bg-white rounded-2xl p-6 lg:p-8">
            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mb-6">
              <Target className="w-5 h-5 text-orange-500" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Façonner l'Avenir de la Logistique</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Notre vision est de construire un écosystème logistique plus intelligent 
              propulsé par l'innovation, la durabilité et une connectivité mondiale sans faille.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
