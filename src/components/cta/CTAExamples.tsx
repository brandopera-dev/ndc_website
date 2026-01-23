import React from 'react';
import { CTAWithImage, CTASimple, CTAWithBackground } from './index';

/**
 * Exemples d'utilisation des composants CTA
 * Ces composants peuvent être ajoutés sur n'importe quelle page
 */

// Exemple 1: CTA avec image à gauche (comme image 1)
export const CTACargoExample = () => (
  <CTAWithImage
    title="Confiez-nous votre cargo en toute sérénité"
    description="Notre équipe expérimentée traite votre marchandise avec le plus grand soin, pour une livraison sûre et ponctuelle à chaque étape."
    buttonText="Demander un devis"
    buttonLink="/contact"
    imageSrc="/images/high-angle-view-industry-factory.jpg"
    imagePosition="left"
  />
);

// Exemple 2: CTA simple centré (comme image 2)
export const CTAStreamlineExample = () => (
  <CTASimple
    title="Optimisez votre logistique dès aujourd'hui"
    description="Découvrez une logistique plus simple et plus fluide, prête à transformer votre quotidien opérationnel."
    buttonText="Demander un devis"
    buttonLink="/contact"
  />
);

// Exemple 3: CTA avec image à gauche et texte à droite (comme image 3)
export const CTAWarehouseExample = () => (
  <CTAWithImage
    title="Découvrez comment fonctionne notre système d'entrepôt"
    description="Nos services accompagnent votre entreprise et simplifient vos opérations logistiques."
    buttonText="Nous contacter"
    buttonLink="/contact"
    imageSrc="/images/construction-worker-man-tablet-by-truck-logistics-with-vehicle-inspection-shipping-cargo-export-transport-industry-site-manager-black-employee-with-app-maintenance-happy.jpg"
    imagePosition="left"
  />
);

// Exemple 4: CTA avec fond d'image et texte à gauche (comme image 4)
export const CTAContactExample = () => (
  <CTAWithBackground
    title="Contactez-nous pour discuter de vos besoins et découvrir comment nos services peuvent soutenir votre activité."
    description=""
    buttonText="Nous contacter"
    buttonLink="/contact"
    backgroundImage="/images/vehicles-coal-mine-view.jpg"
    contentPosition="left"
  />
);

// Exemple 5: CTA avec fond d'image et texte à gauche (comme image 5)
export const CTAStreamlineBackgroundExample = () => (
  <CTAWithBackground
    title="Optimisez votre logistique dès aujourd'hui"
    description="Découvrez une logistique plus simple et plus fluide, prête à transformer votre quotidien opérationnel."
    buttonText="Demander un devis"
    buttonLink="/contact"
    backgroundImage="/images/large-truck-carrying-sand-platinum-mining-site-africa.jpg"
    contentPosition="left"
  />
);

// Exemple d'utilisation sur une page:
/*
import { CTACargoExample, CTAStreamlineExample } from '@/components/cta/CTAExamples';

function MyPage() {
  return (
    <div>
      <Header />
      
      {/* Votre contenu de page *\/}
      <section>...</section>
      
      {/* Ajouter un CTA *\/}
      <CTACargoExample />
      
      {/* Plus de contenu *\/}
      <section>...</section>
      
      {/* Ajouter un autre CTA *\/}
      <CTAStreamlineExample />
      
      <Footer />
    </div>
  );
}
*/

export default {
  CTACargoExample,
  CTAStreamlineExample,
  CTAWarehouseExample,
  CTAContactExample,
  CTAStreamlineBackgroundExample,
};
