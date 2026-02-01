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
  const { t, language } = useI18n();

  const contactInfo = language === "fr" ? [
    { icon: MapPin, title: "Notre Siège", info: "Hamdalaye, ACI 2000, Bamako, Mali", subinfo: "" },
    { icon: Phone, title: "Téléphone", info: "+223 91 88 38 67", subinfo: "" },
    { icon: Mail, title: "Email", info: "info@ndc.africa", subinfo: "" },
    { icon: Clock, title: "Horaires", info: "Lun - Ven: 8h00 - 18h00", subinfo: "Sam: 9h00 - 13h00" },
  ] : [
    { icon: MapPin, title: "Headquarters", info: "Hamdalaye, ACI 2000, Bamako, Mali", subinfo: "" },
    { icon: Phone, title: "Phone", info: "+223 91 88 38 67", subinfo: "" },
    { icon: Mail, title: "Email", info: "info@ndc.africa", subinfo: "" },
    { icon: Clock, title: "Hours", info: "Mon - Fri: 8:00 AM - 6:00 PM", subinfo: "Sat: 9:00 AM - 1:00 PM" },
  ];

  useEffect(() => {
    const cleanup = initScrollAnimations();
    return cleanup;
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
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
          to: 'tel:+22391883867',
          label: (
            <>
              <Phone className="w-5 h-5" />
              {t('hero.contact.primaryCta')}
            </>
          ),
        }}
        secondaryAction={{
          to: 'mailto:info@ndc.africa',
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
                {item.subinfo && <p className="text-gray-600 text-sm">{item.subinfo}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Calculator Section */}
      <QuoteCalculatorSection />

      {/* FAQ Section */} 
      <FaqSection />

      <CTAFooterSection />
    </div>
  );
};

export default Contact;
