import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return ( 
    // section-dark 
    <section id="contact" className="py-14 sm:py-20 lg:py-32 bg-stone-900 relative overflow-hidden scroll-animate">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50">
          <img
          src="/images/NDC--de-KATI178-sm.jpg"
          alt="Industries et mines"
          className="w-full h-full object-cover"
        />
         <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50"></div>
        
        {/* <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-600 rounded-full blur-3xl" /> */}
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-5 sm:mb-6">
          Prêt à lancer
          <br />
          votre projet ?
        </h2>
        <p className="text-white/60 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto mb-8 sm:mb-10">
          Demandez votre devis gratuitement en quelques minutes et profitez de tarifs compétitifs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/#devis" className="w-full sm:w-auto">
            <Button className="bg-[#e11a1a] hover:bg-red-700 text-white rounded-lg px-8 h-12 sm:h-14 text-base sm:text-lg w-full">
              Demander un devis
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
          <a href="tel:+2252722000000" className="w-full sm:w-auto">
            <Button className="border-2 border-white/20 bg-transparent hover:bg-white/10 text-white rounded-lg px-8 h-12 sm:h-14 text-base sm:text-lg w-full">
              <Phone className="w-5 h-5 mr-2" />
              Nous appeler
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
