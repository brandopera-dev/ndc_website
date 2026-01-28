import { useEffect } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Header from "@/components/Header";
import CTAFooterSection from "@/components/Footer";
import FaqSection from "@/components/new_components/FaqSection";
import QuoteCalculatorSection from "@/components/new_components/QuoteCalculatorSection";
import { initScrollAnimations } from "@/utils/scrollAnimations";
import PageHero from "@/components/PageHero";
import { useI18n } from "@/i18n/I18nProvider";

const Contact = () => {
  const contactInfo = [
    { icon: MapPin, title: "Notre Siège", info: "Zone Industrielle, Abidjan, Côte d'Ivoire", subinfo: "Bureau 205, Immeuble NDC" },
    { icon: Phone, title: "Téléphone", info: "+225 27 22 00 00 00", subinfo: "+225 07 00 00 00 00" },
    { icon: Mail, title: "Email", info: "contact@ndc-logistics.com", subinfo: "support@ndc-logistics.com" },
    { icon: Clock, title: "Horaires", info: "Lun - Ven: 8h00 - 18h00", subinfo: "Sam: 9h00 - 13h00" },
  ];

  const { t } = useI18n();

  useEffect(() => {
    const cleanup = initScrollAnimations();
    return cleanup;
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section  badgeText={t('hero.contact.badge')}*/}
      <PageHero
        backgroundImage="/images/vehicles-coal-mine-view.jpg"
        backgroundAlt="Contact NDC"
        breadcrumb={[
          { label: t('nav.home'), to: '/' },
          { label: t('nav.contact') },
        ]}
       
        badgeDotClassName="bg-[#e11a1a]"
        title={t('hero.contact.title')}
        description={t('hero.contact.description')}
        primaryAction={{
          to: 'tel:+2252722000000',
          label: (
            <>
              <Phone className="w-5 h-5" />
              {t('hero.contact.primaryCta')}
            </>
          ),
        }}
        secondaryAction={{
          to: 'mailto:contact@ndc-logistics.com',
          label: (
            <>
              <Mail className="w-5 h-5" />
              {t('hero.contact.secondaryCta')}
            </>
          ),
          variant: 'outline',
        }}
      />

      {/* Contact Info Cards */}
      <section className="py-16 -mt-8 relative z-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-2xl border border-gray-200 hover:shadow-xl transition-all hover:-translate-y-1 scroll-animate"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.info}</p>
                <p className="text-gray-600 text-sm">{item.subinfo}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Calculator Section */}
      <QuoteCalculatorSection />

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

              <form onSubmit={handleSubmit} className="space-y-6 scroll-animate">
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
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl hover:scale-105 transition-transform"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Envoyer le Message
                </Button>
              </form>
            </div>

           
            <div className="space-y-8 scroll-animate">
             
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
                  className="bg-white text-primary hover:bg-white/90 rounded-xl w-full hover:scale-105 transition-transform"
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
