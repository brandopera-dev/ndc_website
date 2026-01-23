# Guide d'utilisation des composants CTA

Les composants Call-to-Action (CTA) sont des sections réutilisables qui peuvent être ajoutées sur n'importe quelle page du site. Ils sont **détachés des bords** de la page grâce aux marges intégrées.

## 📦 Composants disponibles

### 1. CTAWithImage
CTA avec une image et du contenu côte à côte.

**Props:**
- `title` (string) - Titre principal
- `description` (string) - Description
- `buttonText` (string) - Texte du bouton
- `buttonLink` (string) - Lien du bouton
- `imageSrc` (string) - URL de l'image
- `imagePosition` ('left' | 'right') - Position de l'image (défaut: 'left')
- `variant` ('default' | 'dark') - Variante de couleur (défaut: 'default')

### 2. CTASimple
CTA simple centré sans image.

**Props:**
- `title` (string) - Titre principal
- `description` (string) - Description
- `buttonText` (string) - Texte du bouton
- `buttonLink` (string) - Lien du bouton
- `backgroundImage` (string, optionnel) - Image de fond

### 3. CTAWithBackground
CTA avec image de fond pleine largeur.

**Props:**
- `title` (string) - Titre principal
- `description` (string) - Description
- `buttonText` (string) - Texte du bouton
- `buttonLink` (string) - Lien du bouton
- `backgroundImage` (string) - Image de fond
- `contentPosition` ('left' | 'right' | 'center') - Position du contenu (défaut: 'left')

## 🎨 Exemples d'utilisation

### Exemple 1: CTA avec image (Image 1)
```tsx
import { CTAWithImage } from '@/components/cta';

<CTAWithImage
  title="Let Our Team Handle your Cargo with Care"
  description="Our experienced team ensures your cargo is handled with the utmost care."
  buttonText="Get a Quote"
  buttonLink="/contact"
  imageSrc="/images/high-angle-view-industry-factory.jpg"
  imagePosition="left"
/>
```

### Exemple 2: CTA simple (Image 2)
```tsx
import { CTASimple } from '@/components/cta';

<CTASimple
  title="Streamline Your Logistics Today!"
  description="Discover a world of effortless and seamless logistics."
  buttonText="Get a Quote"
  buttonLink="/contact"
/>
```

### Exemple 3: CTA avec fond d'image (Image 5)
```tsx
import { CTAWithBackground } from '@/components/cta';

<CTAWithBackground
  title="Streamline Your Logistics Today!"
  description="Discover a world of effortless and seamless logistics."
  buttonText="Get a Quote"
  buttonLink="/contact"
  backgroundImage="/images/large-truck-carrying-sand-platinum-mining-site-africa.jpg"
  contentPosition="left"
/>
```

## 📍 Où ajouter les CTA ?

Les CTA peuvent être ajoutés **n'importe où** sur vos pages :

### Sur la page Home (Index.tsx ou Home2.tsx)
```tsx
import { CTAStreamlineExample } from '@/components/cta/CTAExamples';

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <FeaturesSection />
      
      {/* Ajouter un CTA ici */}
      <CTAStreamlineExample />
      
      <ServicesSection />
      <Footer />
    </div>
  );
};
```

### Sur la page About
```tsx
import { CTACargoExample } from '@/components/cta/CTAExamples';

const About = () => {
  return (
    <div>
      <Header />
      <AboutHero />
      <TeamSection />
      
      {/* Ajouter un CTA ici */}
      <CTACargoExample />
      
      <TimelineSection />
      <Footer />
    </div>
  );
};
```

### Sur la page Services
```tsx
import { CTAWarehouseExample } from '@/components/cta/CTAExamples';

const Services = () => {
  return (
    <div>
      <Header />
      <ServicesHero />
      <ServicesGrid />
      
      {/* Ajouter un CTA ici */}
      <CTAWarehouseExample />
      
      <ProcessSection />
      <Footer />
    </div>
  );
};
```

## 🎯 Exemples pré-configurés

Utilisez les exemples pré-configurés depuis `CTAExamples.tsx` :

```tsx
import { 
  CTACargoExample,
  CTAStreamlineExample,
  CTAWarehouseExample,
  CTAContactExample,
  CTAStreamlineBackgroundExample 
} from '@/components/cta/CTAExamples';

// Puis utilisez-les directement dans votre JSX
<CTACargoExample />
```

## ✨ Caractéristiques

- ✅ **Détachés des bords** : Marges automatiques (px-8 py-16)
- ✅ **Responsive** : S'adaptent à tous les écrans
- ✅ **Réutilisables** : Utilisables sur toutes les pages
- ✅ **Personnalisables** : Props flexibles pour chaque besoin
- ✅ **Design moderne** : Coins arrondis (rounded-3xl), ombres, effets hover

## 🎨 Personnalisation

Pour créer votre propre CTA personnalisé :

```tsx
import { CTAWithImage } from '@/components/cta';

<CTAWithImage
  title="Votre titre personnalisé"
  description="Votre description"
  buttonText="Votre bouton"
  buttonLink="/votre-lien"
  imageSrc="/votre-image.jpg"
  imagePosition="right"
/>
```

## 📝 Notes importantes

1. Les CTA sont **automatiquement espacés** des bords grâce aux classes `px-8 py-16`
2. Le conteneur max-width est défini à `max-w-7xl` pour rester cohérent avec le reste du site
3. Les boutons utilisent le style arrondi (`rounded-full`) pour correspondre au design
4. Tous les CTA utilisent le fond bleu foncé `#0a1628` par défaut
