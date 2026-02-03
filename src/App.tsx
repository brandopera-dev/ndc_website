import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { I18nProvider } from "@/i18n/I18nProvider";
import { AnimatePresence, motion } from "framer-motion";
import Index from "./pages/Index"; 
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";
import FuelManagement from "./pages/services/FuelManagement";
import TransportTransit from "./pages/services/TransportTransit";
import ReseauxDistribution from "./pages/services/ReseauxDistribution";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Media from "./pages/Media";
import NotFound from "./pages/NotFound";
import { pageTransition } from "@/utils/animations";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Si il y a un hash, défiler vers l'élément
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    
    // Sinon, défiler vers le haut de la page
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
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
  </QueryClientProvider>
);

export default App;
