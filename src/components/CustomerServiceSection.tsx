import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Mail } from "lucide-react";

const CustomerServiceSection = () => {
  return (
    <section className="py-10 lg:py-12 ">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex-1">
              <span className="inline-block bg-[#1f1f1f]/10 text-red-600 text-xs font-semibold px-4 py-2 rounded-full mb-4 uppercase tracking-wider">
                ASSISTANCE
              </span>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
                Un support client à portée de main
              </h2>
              <p className="text-muted-foreground max-w-xl">
                Quand vous avez besoin de nous, nous sommes là. Appelez, envoyez un message, un email, ou discutez avec nous sur WhatsApp. À vous de choisir.
              </p>
            </div>
            <Button className="bg-red-600 hover:bg-red-700 text-white rounded-lg px-8 shrink-0">
              Discuter maintenant
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <a 
              href="tel:+22391883867" 
              className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <div className="w-10 h-10 bg-[#1f1f1f]/10 rounded-full flex items-center justify-center">
                <Phone className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Appelez-nous</p>
                <p className="text-xs text-muted-foreground">Support 24/7</p>
              </div>
            </a>
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
              <div className="w-10 h-10 bg-[#1f1f1f]/10 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Chat en direct</p>
                <p className="text-xs text-muted-foreground">Réponse rapide</p>
              </div>
            </div>
            <a 
              href="mailto:info@ndc.africa" 
              className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <div className="w-10 h-10 bg-[#1f1f1f]/10 rounded-full flex items-center justify-center">
                <Mail className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Envoyez un email</p>
                <p className="text-xs text-muted-foreground">Retour rapide</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerServiceSection;
