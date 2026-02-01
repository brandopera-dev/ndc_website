import React from 'react';
import { ArrowRight, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useI18n } from '@/i18n/I18nProvider';

const CTAFooterSection = () => {
  const { t } = useI18n();

  return (
    <section className="bg-[#e11a1a] text-white">
      {/* CTA Banner */}
      <div className="border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold max-w-xl">
                {t("footer.cta.heading")}
              </h2>
              
              {/* Illustration */}
              <div className="hidden lg:block">
                <div className="w-32 h-32 relative">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="45" fill="rgba(255,255,255,0.1)" />
                    <path d="M30 50 L50 30 L70 50 L50 70 Z" fill="rgba(255,255,255,0.2)" />
                  </svg>
                </div>
              </div>
            </div>

            <Link
              to="/#devis"
              className="bg-white text-[#e11a1a] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all flex items-center justify-center gap-2 shadow-lg w-full sm:w-auto"
            >
              {t("footer.cta.button")}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-white text-gray-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img 
                  src="/images/logo/ID_NDC Energie 1.png" 
                  alt="NDC Énergie" 
                  className="h-24 sm:h-28 w-auto object-contain"
                /> 
              </div> 
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                {t("footer.brand.description")}
              </p>
              
              {/* Social Icons */}
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-[#e11a1a] hover:text-white rounded-lg flex items-center justify-center transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-[#e11a1a] hover:text-white rounded-lg flex items-center justify-center transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-[#e11a1a] hover:text-white rounded-lg flex items-center justify-center transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-[#e11a1a] hover:text-white rounded-lg flex items-center justify-center transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-lg mb-6">{t("footer.quickLinks.title")}</h3>
              <ul className="space-y-3">
                <li><Link to="/" className="text-gray-600 hover:text-[#e11a1a] transition-colors">{t("footer.quickLinks.home")}</Link></li>
                <li><Link to="/about" className="text-gray-600 hover:text-[#e11a1a] transition-colors">{t("footer.quickLinks.about")}</Link></li>
                <li><Link to="/media" className="text-gray-600 hover:text-[#e11a1a] transition-colors">{t("footer.quickLinks.media")}</Link></li>
                <li><Link to="/contact" className="text-gray-600 hover:text-[#e11a1a] transition-colors">{t("footer.quickLinks.contact")}</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-bold text-lg mb-6">{t("footer.services.title")}</h3>
              <ul className="space-y-3">
                <li><Link to="/services/fuel-management" className="text-gray-600 hover:text-[#e11a1a] transition-colors">{t("footer.services.fuelManagement")}</Link></li>
                <li><Link to="/services/reseaux-distribution" className="text-gray-600 hover:text-[#e11a1a] transition-colors">{t("footer.services.reseaux")}</Link></li>
                <li><Link to="/services/transport-transit" className="text-gray-600 hover:text-[#e11a1a] transition-colors">{t("footer.services.transport")}</Link></li>
                <li><Link to="/#services" className="text-gray-600 hover:text-[#e11a1a] transition-colors">{t("footer.services.viewAll")}</Link></li>
              </ul>
            </div>

            {/* Useful Links */}
            <div>
              <h3 className="font-bold text-lg mb-6">{t("footer.usefulLinks.title")}</h3>
              <p className="text-gray-600 text-sm mb-4">
                {t("footer.usefulLinks.description")}
              </p>
              
              <div className="flex flex-col gap-3">
                <Link to="/#devis" className="px-4 py-3 bg-gray-100 rounded-lg text-sm text-gray-700 hover:text-[#e11a1a] transition-colors">
                  {t("footer.usefulLinks.quote")}
                </Link>
                <Link to="/#avis" className="px-4 py-3 bg-gray-100 rounded-lg text-sm text-gray-700 hover:text-[#e11a1a] transition-colors">
                  {t("footer.usefulLinks.testimonials")}
                </Link>
                <Link to="/#services" className="px-4 py-3 bg-gray-100 rounded-lg text-sm text-gray-700 hover:text-[#e11a1a] transition-colors">
                  {t("footer.usefulLinks.method")}
                </Link>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
            <p>{t("footer.copyright")}</p>
            <div className="flex gap-6">
              <Link to="/contact" className="hover:text-[#e11a1a] transition-colors">{t("footer.legal.mentions")}</Link>
              <Link to="/contact" className="hover:text-[#e11a1a] transition-colors">{t("footer.legal.privacy")}</Link>
            </div>
          </div>

          {/* Signature */}
          <div className="pt-4 text-center text-xs text-gray-400">
            <p>
              {t("footer.signature.madeWith")} <span className="text-[#e11a1a]">♥</span> by{' '}
              <a 
                href="https://supebrand.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-semibold text-gray-500 hover:text-[#e11a1a] transition-colors"
              >
                {t("footer.signature.company")}
              </a>
              <span className="mx-2">•</span>
              <span className="italic">{t("footer.signature.tagline")}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAFooterSection;
