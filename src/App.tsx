import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Index from "./pages/Index";
import Home3 from "./pages/Home3";
import Home2 from "./pages/Home2";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";
import TransportHydrocarbures from "./pages/services/TransportHydrocarbures";
import LogistiqueMinerale from "./pages/services/LogistiqueMinerale";
import StationsEssence from "./pages/services/StationsEssence";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Media from "./pages/Media";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [location.pathname, location.hash]);

  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <div key={location.pathname} className="page-transition">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/home3" element={<Home3 />} />
        <Route path="/home2" element={<Home2 />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/transport-hydrocarbures" element={<TransportHydrocarbures />} />
        <Route path="/services/logistique-minerale" element={<LogistiqueMinerale />} />
        <Route path="/services/stations-essence" element={<StationsEssence />} />
        <Route path="/services/:serviceId" element={<ServiceDetails />} />
        <Route path="/media" element={<Media />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToHash />
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
