import { useEffect } from "react";
import { useI18n } from "@/i18n/I18nProvider";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroModernSection from "@/components/HeroModernSection";
import ProcessSection from "@/components/ProcessSection";
import CTASection from "@/components/CTASection";
import CTAFooterSection from "@/components/Footer";
import AboutUseSection from "@/components/new_components/about_useSection";
import HomeValuesWorkProcessSection from "@/components/new_components/HomeValuesWorkProcessSection";
import ServicesGridSection from "@/components/new_components/ServicesGridSection";
import QuoteCalculatorSection from "@/components/new_components/QuoteCalculatorSection";
import FaqSection from "@/components/new_components/FaqSection";
import { initScrollAnimations } from "@/utils/scrollAnimations";
import FeaturesSection from "@/components/new_components/features_section";

const Index = () => {
  const { language } = useI18n();

  useEffect(() => {
    const cleanup = initScrollAnimations();
    return cleanup;
  }, []);

  const ctaTexts = language === 'fr' ? {
    title: "Un partenaire unique pour vos opérations",
    description: "NDC Énergie vous accompagne avec une approche intégrée : hydrocarbures, transport et transit. Contactez-nous pour discuter de votre projet.",
    button: "Nous contacter",
  } : {
    title: "A single partner for your operations",
    description: "NDC Energy supports you with an integrated approach: hydrocarbons, transport and transit. Contact us to discuss your project.",
    button: "Contact us",
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{language === 'fr' ? 'NDC Énergie | Solutions Énergétiques et Logistiques au Mali' : 'NDC Energy | Energy and Logistics Solutions in Mali'}</title>
        <meta name="description" content={language === 'fr' 
          ? "NDC Énergie : Leader au Mali pour l'importation d'hydrocarbures, le fuel management, le transport et le transit industriel. Solutions intégrées pour les mines et industries." 
          : "NDC Energy: Leader in Mali for hydrocarbon imports, fuel management, transport, and industrial transit. Integrated solutions for mining and industries."} />
        <meta property="og:title" content={language === 'fr' ? 'NDC Énergie - Solutions Énergétiques' : 'NDC Energy - Energy Solutions'} />
        <meta property="og:description" content={language === 'fr' 
          ? "Découvrez nos solutions intégrées : hydrocarbures, logistique et transit pour le secteur minier et industriel en Afrique de l'Ouest." 
          : "Discover our integrated solutions: hydrocarbons, logistics, and transit for the mining and industrial sectors in West Africa."} />
        <meta property="og:url" content="https://ndc.africa/" />
        <link rel="canonical" href="https://ndc.africa/" />
      </Helmet>
      <Header />
      <HeroModernSection />
      {/* <ShipBannerFeaturesSection /> */}
      {/* <HeroAlternative /> */}
      {/* <HeaderModern /> */}
      <AboutUseSection /> 
      <HomeValuesWorkProcessSection />
      <ProcessSection />
      
      {/* <ExperienceSection /> */}
      {/* <ServicesGridSection /> */}
      <FeaturesSection />
      {/* <ServiceUseSection /> */}
      {/* <CustomerServiceSection /> */}
      {/* <TrustedPartnerSection /> à réutiliser */}
      {/* CTA Section - Partenaire unique */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* <div className="inline-flex items-center gap-2 bg-[#e11a1a]/10 text-[#e11a1a] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 bg-[#e11a1a] rounded-full"></span>
            {language === 'fr' ? 'POURQUOI NDC' : 'WHY NDC'}
          </div> */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1f1f1f] mb-6 leading-tight">
            {ctaTexts.title}
          </h2>
          <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            {ctaTexts.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact">
              <button className="bg-[#e11a1a] hover:bg-red-700 text-white rounded-full px-8 py-4 font-semibold inline-flex items-center gap-2 transition-colors">
                {ctaTexts.button}
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </a>
            <a href="/#services">
              <button className="border-2 border-[#1f1f1f] text-[#1f1f1f] hover:bg-[#1f1f1f] hover:text-white rounded-full px-8 py-4 font-semibold transition-colors">
                {language === 'fr' ? 'Découvrir nos services' : 'Discover our services'}
              </button>
            </a>
          </div>
        </div>
      </section>
      <QuoteCalculatorSection />
      {/* <SecureTransportSection /> */}
      <FaqSection />
      <CTASection />
      <CTAFooterSection />
    </div>
  );
};

export default Index;
