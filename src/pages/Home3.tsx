import { useEffect } from "react";
import Header from "@/components/Header";
import Hero2Section from "@/components/home3/Hero2Section";
import FeaturesGrid2Section from "@/components/home3/FeaturesGrid2Section";
import Services2Section from "@/components/home3/Services2Section";
import Stats2Section from "@/components/home3/Stats2Section";
import WhyChoose2Section from "@/components/home3/WhyChoose2Section";
import Testimonials2Section from "@/components/home3/Testimonials2Section";
import Pricing2Section from "@/components/home3/Pricing2Section";
import CTA2Section from "@/components/home3/CTA2Section";
import CTAFooterSection from "@/components/Footer";
import { initScrollAnimations } from "@/utils/scrollAnimations";

const Home3 = () => {
  useEffect(() => {
    const cleanup = initScrollAnimations();
    return cleanup;
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero2Section />
      <FeaturesGrid2Section />
      <Services2Section />
      <Stats2Section />
      <WhyChoose2Section />
      <Testimonials2Section />
      <Pricing2Section />
      <CTA2Section />
      <CTAFooterSection />
    </div>
  );
};

export default Home3;
