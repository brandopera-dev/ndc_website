import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send, ChevronRight, Truck, Package, Globe } from "lucide-react";
import Header from "@/components/Header";
import CTAFooterSection from "@/components/Footer";
import FaqSection from "@/components/new_components/FaqSection";
import { initScrollAnimations } from "@/utils/scrollAnimations";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { icon: MapPin, title: "Notre Siège", info: "Zone Industrielle, Abidjan, Côte d'Ivoire", subinfo: "Bureau 205, Immeuble NDC" },
    { icon: Phone, title: "Téléphone", info: "+225 27 22 00 00 00", subinfo: "+225 07 00 00 00 00" },
    { icon: Mail, title: "Email", info: "contact@ndc-logistics.com", subinfo: "support@ndc-logistics.com" },
    { icon: Clock, title: "Horaires", info: "Lun - Ven: 8h00 - 18h00", subinfo: "Sam: 9h00 - 13h00" },
  ];

  const services = [
    { icon: Truck, title: "Transport de Carburant", desc: "Solutions sécurisées pour hydrocarbures" },
    { icon: Package, title: "Logistique Minière", desc: "Transport d'équipements lourds" },
    { icon: Globe, title: "Transit & Douanes", desc: "Formalités import/export" },
  ];

  useEffect(() => {
    const cleanup = initScrollAnimations();
    return cleanup;
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-[#0a1628] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/vehicles-coal-mine-view.jpg" 
            alt="Contact NDC" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/90 to-[#0a1628]/95" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/60 text-sm mb-8">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Contact</span>
          </div>
          
          {/* Content */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#e11a1a]/10 border border-[#e11a1a]/20 text-[#e11a1a] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-[#e11a1a] rounded-full animate-pulse"></span>
              GET IN TOUCH
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Contact <span className="text-[#e11a1a] italic">NDC</span>
            </h1>
            
            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8">
              Our team is ready to answer all your questions and support you in your logistics projects. Let's build success together.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button className="bg-[#e11a1a] hover:bg-red-700 text-white px-8 py-6 rounded-full text-base font-semibold inline-flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call Us Now
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 rounded-full text-base font-semibold inline-flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Send Email
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 -mt-8 relative z-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => (
              <div 
                key={index} 
                className="bg-card p-6 rounded-2xl border shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-foreground">{item.info}</p>
                <p className="text-muted-foreground text-sm">{item.subinfo}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      {/* <section className="py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16">
         
            <div>
              <div className="mb-8">
                <p className="text-primary font-semibold mb-2">FORMULAIRE DE CONTACT</p>
                <h2 className="text-4xl font-bold text-foreground">
                  Envoyez-nous un <span className="text-primary italic">Message</span>
                </h2>
                <p className="text-muted-foreground mt-4">
                  Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Prénom *</label>
                    <Input 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Votre prénom"
                      required
                      className="rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Nom *</label>
                    <Input 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      required
                      className="rounded-xl"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                    <Input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="votre@email.com"
                      required
                      className="rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Téléphone</label>
                    <Input 
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+225 00 00 00 00"
                      className="rounded-xl"
                    />
                  </div>
                </div>

               

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message *</label>
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre besoin..."
                    required
                    rows={5}
                    className="rounded-xl resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Envoyer le Message
                </Button>
              </form>
            </div>

           
            <div className="space-y-8">
             
              <div className="bg-muted rounded-2xl h-80 overflow-hidden relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127067.44894459527!2d-4.0836553!3d5.3484145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1ea5311959121%3A0x3fe70ddce19221a6!2sAbidjan%2C%20C%C3%B4te%20d&#39;Ivoire!5e0!3m2!1sfr!2sfr!4v1699999999999!5m2!1sfr!2sfr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>

        
 
              <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
                <h3 className="text-2xl font-bold mb-4">Besoin d'un Devis Urgent ?</h3>
                <p className="text-primary-foreground/80 mb-6">
                  Appelez-nous directement pour une réponse immédiate.
                </p>
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 rounded-xl w-full"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  +225 27 22 00 00 00
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* FAQ Section */} 
        <FaqSection /> 
      {/* <section className="py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground">
              Questions <span className="text-primary italic">Fréquentes</span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              { q: "Quels sont vos délais de livraison ?", a: "Nos délais varient selon la destination et le type de service. En général, nous proposons des livraisons express en 24-48h et des services standard de 3-5 jours ouvrés." },
              { q: "Proposez-vous un suivi en temps réel ?", a: "Oui, tous nos clients bénéficient d'un accès à notre plateforme de suivi en temps réel pour suivre l'acheminement de leurs marchandises 24h/24." },
              { q: "Comment obtenir un devis personnalisé ?", a: "Vous pouvez remplir le formulaire ci-dessus ou nous appeler directement. Notre équipe vous répondra sous 24 heures avec une proposition détaillée." },
              { q: "Quelles zones géographiques couvrez-vous ?", a: "Nous opérons principalement en Afrique de l'Ouest, avec des services étendus vers l'Europe, l'Asie et le reste du continent africain." },
            ].map((faq, index) => (
              <div key={index} className="bg-card border rounded-2xl p-6">
                <h3 className="font-bold text-foreground mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <CTAFooterSection />
    </div>
  );
};

export default Contact;
