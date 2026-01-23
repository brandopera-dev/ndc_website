import { useEffect } from "react";
import Header from "@/components/Header";
import HeroModernSection from "@/components/HeroModernSection";
import ProcessSection from "@/components/ProcessSection";
import CTASection from "@/components/CTASection";
import CTAFooterSection from "@/components/Footer";
import AboutUseSection from "@/components/new_components/about_useSection";
import HomeValuesWorkProcessSection from "@/components/new_components/HomeValuesWorkProcessSection";
import ServicesGridSection from "@/components/new_components/ServicesGridSection";
import TestimonialsModernSection from "@/components/new_components/TestimonialsModernSection";
import QuoteCalculatorSection from "@/components/new_components/QuoteCalculatorSection";
import FaqSection from "@/components/new_components/FaqSection";
import { initScrollAnimations } from "@/utils/scrollAnimations";
import FeaturesSection from "@/components/new_components/features_section";

const Index = () => {
  useEffect(() => {
    const cleanup = initScrollAnimations();
    return cleanup;
  }, []);

  return (
    <div className="min-h-screen">
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
      <TestimonialsModernSection />
      <QuoteCalculatorSection />
      {/* <SecureTransportSection /> */}
      <FaqSection />
      <CTASection />
      <CTAFooterSection />
    </div>
  );
};

export default Index;
