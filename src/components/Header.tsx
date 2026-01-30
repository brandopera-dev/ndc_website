import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useI18n } from "@/i18n/I18nProvider";
import { headerVariants, fadeInUp } from "@/utils/animations";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpenMobile, setIsServicesOpenMobile] = useState(false);
  const [isServicesOpenDesktop, setIsServicesOpenDesktop] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, toggleLanguage, t } = useI18n();

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: t("nav.home"), to: "/" },
    { label: t("nav.about"), to: "/about" },
    { label: t("nav.media"), to: "/media" },
  ];

  const serviceMenuItems = [
  {
    title: "Fuel Management",
    subtitle: "Stockage & distribution d’hydrocarbures sur site",
    to: "/services/fuel-management",
    image: "/images/storage-tanks-petroleum-products.jpg",
  },
  {
    title: "Transport & Transit",
    subtitle: "Logistique industrielle et ressources minières",
    to: "/services/transport-transit",
    image: "/images/images_ndc/CITERNE/C 1.png",
  },
  {
    title: "Réseaux de distribution",
    subtitle: "Stations-service & infrastructures multi-sites",
    to: "/services/reseaux-distribution",
    image: "/images/Social Media Size/NDC--de-KATI137-sm.jpg",
  },
];


  return (
    <motion.header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? "bg-[#1f1f1f]/75 backdrop-blur-md border-b border-white/10 shadow-sm"
          : "bg-stone-950 border-b border-transparent"
      }`}
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link to="/" className="flex items-center gap-3">
              <AnimatePresence mode="wait">
                {isScrolled ? (
                  <motion.img
                    key="logo-small"
                    src="/images/logo/ID_NDC Energie 2.png"
                    alt="NDC Énergie"
                    className="h-14 w-14 sm:h-24 sm:w-24 rounded-lg object-cover"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                  />
                ) : (
                  <motion.img
                    key="logo-large"
                    src="/images/logo/ID_NDC Energie 1.png"
                    alt="NDC Énergie"
                    className="h-16 sm:h-28 w-auto rounded-lg object-cover"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </AnimatePresence>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              className={`transition-colors font-medium text-sm ${
                isScrolled ? "text-white/85 hover:text-white" : "text-white/85 hover:text-white"
              }`}
            >
              {t("nav.home")}
            </Link>

            <div className="relative group">
              <button
                type="button"
                onClick={() => setIsServicesOpenDesktop(!isServicesOpenDesktop)}
                onMouseEnter={() => setIsServicesOpenDesktop(true)}
                className={`transition-colors font-medium text-sm inline-flex items-center gap-1 ${
                  isScrolled ? "text-white/85 hover:text-white" : "text-white/85 hover:text-white"
                }`}
              >
                {t("nav.services")}
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpenDesktop ? 'rotate-180' : ''}`} />
              </button>
              {/* <div className="fixed left-0 right-0 top-16 opacity-0 invisible pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto transition-all">
                <div className="bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-lg">
                  <div className="max-w-7xl mx-auto px-8 py-4">
                    <div className="flex flex-wrap gap-3">
                      {serviceMenuItems.map((s) => (
                        <Link
                          key={s.to}
                          to={s.to}
                          className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm hover:bg-gray-50 transition-colors flex-1 min-w-[260px]"
                        >
                          <img
                            src={s.image}
                            alt={s.title}
                            className="h-12 w-16 rounded-xl object-cover border border-gray-200"
                          />
                          <span className="font-semibold text-gray-900 leading-tight">{s.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div> */}

              
  {/* ZONE TAMPON INVISIBLE (très important) */}
  <div className="absolute left-0 top-full h-6 w-full"></div>

  {/* MEGA MENU */}
  {/* <div
    className="
      absolute left-1/2 top-full mt-6 -translate-x-1/2
      opacity-0 invisible pointer-events-none
      group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto
      transition-all duration-200
    "
  ></div> */}

              <AnimatePresence>
                {isServicesOpenDesktop && (
                  <motion.div 
                    className="fixed left-0 right-0 top-16"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    onMouseLeave={() => setIsServicesOpenDesktop(false)}
                  >
  
  <div className="bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-2xl">
    <div className="max-w-7xl mx-auto px-8 py-10">

      {/* Header du sous-menu */}
      <div className="mb-8">
        <p className="text-xs font-semibold tracking-widest text-red-600 uppercase mb-2">
          Nos expertises
        </p>
        <h3 className="text-2xl font-extrabold text-gray-900">
          Solutions énergétiques & logistiques
        </h3>
        <p className="text-gray-600 mt-1 max-w-xl">
          Des services conçus pour sécuriser, optimiser et accompagner
          les opérations industrielles.
        </p>
      </div>

      {/* Cartes services */}
      <div className="grid grid-cols-3 gap-6">
        {serviceMenuItems.map((s) => (
          <Link
            key={s.to}
            to={s.to}
            className="group relative overflow-hidden
              border border-gray-200 bg-gray-100
              hover:border-red-500/40 transition-all"
          >
            {/* Image */}
            <div className="relative h-48">
              <img
                src={s.image}
                alt={s.title}
                className="absolute inset-0 w-full h-full object-cover
                  transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t
                from-black/80 via-black/40 to-transparent" />
            </div>

            {/* Contenu */}
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <h4 className="text-white text-xl font-bold leading-tight">
                {s.title}
              </h4>
              <p className="text-white/80 text-sm mt-1 leading-snug">
                {s.subtitle}
              </p>

              <div className="mt-4 inline-flex items-center gap-2 text-sm
                font-semibold text-white opacity-0
                group-hover:opacity-100 transition-opacity">
                Découvrir
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>

            {navItems
              .filter((i) => i.to !== "/")
              .map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className={`transition-colors font-medium text-sm ${
                    isScrolled ? "text-white/85 hover:text-white" : "text-white/85 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

            <Link
              to="/contact"
              className={`transition-colors font-medium text-sm ${
                isScrolled ? "text-white/85 hover:text-white" : "text-white/85 hover:text-white"
              }`}
            >
              {t("nav.contact")}
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              type="button"
              onClick={toggleLanguage}
              className={`rounded-full px-3 py-1 text-xs font-semibold tracking-wide border transition-colors ${
                isScrolled
                  ? "border-white/20 text-white/85 hover:bg-white/10"
                  : "border-white/20 text-white/85 hover:bg-white/10"
              }`}
            >
              {language === "fr" ? "FR" : "EN"}
            </button>
            <Link to="/contact">
              <Button
                className={`rounded-full px-6 py-2 text-sm font-semibold inline-flex items-center gap-2 ${
                  isScrolled
                    ? "bg-white hover:bg-white/90 text-[#1f1f1f]"
                    : "bg-white hover:bg-white/90 text-[#1f1f1f]"
                }`}
              >
                {t("nav.quote")}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 text-white`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className={`lg:hidden py-4 border-t border-white/10`}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
            <nav className="flex flex-col gap-4">
              <Link
                to="/"
                className={`transition-colors font-medium py-2 text-white/90 hover:text-white`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.home")}
              </Link>

              <div>
                <button
                  type="button"
                  className={`w-full flex items-center justify-between transition-colors font-medium py-2 text-white/90 hover:text-white`}
                  onClick={() => setIsServicesOpenMobile((v) => !v)}
                >
                  <span>{t("nav.services")}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpenMobile ? "rotate-180" : ""}`} />
                </button>
                {isServicesOpenMobile && (
                  <div className={`mt-2 ml-3 flex flex-col border-l border-white/20`}>
                    {serviceMenuItems.map((s) => (
                      <Link
                        key={s.to}
                        to={s.to}
                        className={`pl-4 pr-2 py-2 text-sm transition-colors text-white/75 hover:text-white`}
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsServicesOpenMobile(false);
                        }}
                      >
                        {s.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/about"
                className={`transition-colors font-medium py-2 text-white/90 hover:text-white`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.about")}
              </Link>
              <Link
                to="/media"
                className={`transition-colors font-medium py-2 text-white/90 hover:text-white`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.media")}
              </Link>

              <Link
                to="/contact"
                className={`transition-colors font-medium py-2 text-white/90 hover:text-white`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t("nav.contact")}
              </Link>

              <button
                type="button"
                onClick={toggleLanguage}
                className={`text-left transition-colors font-medium py-2 text-white/90 hover:text-white`}
              >
                {language === "fr" ? "Passer en EN" : "Switch to FR"}
              </button>

              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button
                  className={`rounded-full px-6 py-2 text-sm font-semibold inline-flex items-center gap-2 w-full mt-4 bg-white hover:bg-white/90 text-[#1f1f1f]`}
                >
                  {t("nav.quote")}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
