import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { useI18n } from '@/i18n/I18nProvider';

const LegalNotice = () => {
  const { language } = useI18n();

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{language === 'fr' ? 'Mentions Légales | NDC Énergie' : 'Legal Notice | NDC Energy'}</title>
      </Helmet>
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-24 sm:py-32">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
          {language === 'fr' ? 'Mentions Légales' : 'Legal Notice'}
        </h1>
        
        <div className="prose prose-red max-w-none text-gray-600 space-y-8">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-wider border-b pb-2">
              {language === 'fr' ? '1. Présentation de l\'entreprise' : '1. Company Presentation'}
            </h2>
            <p>
              {language === 'fr' 
                ? "Le site ndc.africa est édité par NDC Énergie, une société spécialisée dans l'importation d'hydrocarbures et la logistique pétrolière au Mali."
                : "The ndc.africa website is published by NDC Energy, a company specializing in hydrocarbon imports and petroleum logistics in Mali."}
            </p>
            <ul className="list-disc pl-5 mt-2">
              <li><strong>{language === 'fr' ? 'Siège social :' : 'Headquarters:'}</strong> Hamdalaye, ACI 2000, Bamako, Mali</li>
              <li><strong>{language === 'fr' ? 'Téléphone :' : 'Phone:'}</strong> +223 91 88 38 67</li>
              <li><strong>{language === 'fr' ? 'Email :' : 'Email:'}</strong> info@ndc.africa</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-wider border-b pb-2">
              {language === 'fr' ? '2. Hébergement' : '2. Hosting'}
            </h2>
            <p>
              {language === 'fr'
                ? "Ce site est hébergé par Hostinger, dont le siège social est situé à Kaunas, Lituanie."
                : "This website is hosted by Hostinger, headquartered in Kaunas, Lithuania."}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-wider border-b pb-2">
              {language === 'fr' ? '3. Propriété Intellectuelle' : '3. Intellectual Property'}
            </h2>
            <p>
              {language === 'fr'
                ? "L'ensemble des contenus (textes, images, vidéos, logos) présents sur ce site est la propriété exclusive de NDC Énergie, sauf mention contraire. Toute reproduction ou représentation, totale ou partielle, est strictement interdite sans autorisation préalable."
                : "All content (text, images, videos, logos) on this site is the exclusive property of NDC Energy, unless otherwise stated. Any total or partial reproduction or representation is strictly prohibited without prior authorization."}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-wider border-b pb-2">
              {language === 'fr' ? '4. Responsabilité' : '4. Liability'}
            </h2>
            <p>
              {language === 'fr'
                ? "NDC Énergie s'efforce d'assurer l'exactitude des informations diffusées sur ce site. Toutefois, l'entreprise ne saurait être tenue responsable des erreurs ou omissions, ainsi que des résultats qui pourraient être obtenus par l'usage de ces informations."
                : "NDC Energy strives to ensure the accuracy of the information published on this site. However, the company cannot be held responsible for errors or omissions, nor for the results that may be obtained through the use of this information."}
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LegalNotice;
