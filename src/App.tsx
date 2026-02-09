import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { I18nProvider } from "@/i18n/I18nProvider";
import { AnimatePresence, motion } from "framer-motion";
import { HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index"; 
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";
import FuelManagement from "./pages/services/FuelManagement";
import TransportTransit from "./pages/services/TransportTransit";
import ReseauxDistribution from "./pages/services/ReseauxDistribution";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Media from "./pages/Media";
import LegalNotice from "./pages/LegalNotice";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";
import { pageTransition } from "@/utils/animations";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      
      const scrollToElement = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          return true;
        }
        return false;
      };

      // Premier essai immédiat
      if (scrollToElement()) return;

      // Essais répétés pour compenser le chargement asynchrone (images, animations)
      const intervals = [100, 300, 600, 1000];
      const timeoutIds = intervals.map(delay => 
        setTimeout(scrollToElement, delay)
      );

      return () => timeoutIds.forEach(clearTimeout);
    }
    
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname, location.hash]);

  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageTransition}
        className="min-h-screen"
      >
        <Routes location={location}>
          <Route path="/" element={<Index />} /> 
          <Route path="/services" element={<Services />} />
          <Route path="/services/fuel-management" element={<FuelManagement />} />
          <Route path="/services/transport-transit" element={<TransportTransit />} />
          <Route path="/services/reseaux-distribution" element={<ReseauxDistribution />} />
          <Route path="/services/:serviceId" element={<ServiceDetails />} />
          <Route path="/media" element={<Media />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions-legales" element={<LegalNotice />} />
          <Route path="/politique-confidentialite" element={<PrivacyPolicy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <I18nProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <AnimatedRoutes />
          </BrowserRouter>
        </TooltipProvider>
      </I18nProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
