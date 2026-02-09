import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { useI18n } from '@/i18n/I18nProvider';

const PrivacyPolicy = () => {
  const { language } = useI18n();

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{language === 'fr' ? 'Politique de Confidentialité | NDC Énergie' : 'Privacy Policy | NDC Energy'}</title>
      </Helmet>
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-24 sm:py-32">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
          {language === 'fr' ? 'Politique de Confidentialité' : 'Privacy Policy'}
        </h1>
        
        <div className="prose prose-red max-w-none text-gray-600 space-y-8">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-wider border-b pb-2">
              {language === 'fr' ? '1. Collecte des données' : '1. Data Collection'}
            </h2>
            <p>
              {language === 'fr'
                ? "Nous collectons des informations lorsque vous remplissez notre formulaire de contact ou de demande de devis. Les informations collectées incluent votre nom, adresse e-mail, numéro de téléphone et détails de votre projet."
                : "We collect information when you fill out our contact or quote request form. Collected information includes your name, email address, phone number, and project details."}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-wider border-b pb-2">
              {language === 'fr' ? '2. Utilisation des informations' : '2. Use of Information'}
            </h2>
            <p>
              {language === 'fr'
                ? "Toutes les informations que nous recueillons auprès de vous peuvent être utilisées pour vous contacter, traiter vos demandes et améliorer notre service client."
                : "Any information we collect from you may be used to contact you, process your requests, and improve our customer service."}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-wider border-b pb-2">
              {language === 'fr' ? '3. Protection des données' : '3. Data Protection'}
            </h2>
            <p>
              {language === 'fr'
                ? "Nous mettons en œuvre une variété de mesures de sécurité pour préserver la sécurité de vos informations personnelles. Seuls les employés qui ont besoin d'effectuer un travail spécifique (par exemple, la facturation ou le service client) ont accès aux informations personnelles identifiables."
                : "We implement a variety of security measures to maintain the safety of your personal information. Only employees who need to perform a specific job (e.g., billing or customer service) are granted access to personally identifiable information."}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-wider border-b pb-2">
              {language === 'fr' ? '4. Cookies' : '4. Cookies'}
            </h2>
            <p>
              {language === 'fr'
                ? "Notre site utilise des cookies pour améliorer l'accès et identifier les visiteurs réguliers. Cependant, cette utilisation des cookies n'est en aucune façon liée à des informations personnelles identifiables sur notre site."
                : "Our site uses cookies to improve access and identify repeat visitors. However, this use of cookies is in no way linked to any personally identifiable information on our site."}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-wider border-b pb-2">
              {language === 'fr' ? '5. Vos droits' : '5. Your Rights'}
            </h2>
            <p>
              {language === 'fr'
                ? "Conformément à la réglementation, vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant. Pour exercer ce droit, veuillez nous contacter à info@ndc.africa."
                : "In accordance with regulations, you have the right to access, rectify, and delete data concerning you. To exercise this right, please contact us at info@ndc.africa."}
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
