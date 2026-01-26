export type Language = "fr" | "en";

export const DEFAULT_LANGUAGE: Language = "fr";

export const translations = {
  fr: {
    nav: {
      home: "Accueil",
      services: "Services",
      about: "À propos",
      media: "Média",
      contact: "Contact",
      quote: "Demander un devis",
    },
    hero: {
      about: {
        badge: "Qui nous sommes",
        title: "À propos de NDC",
        description: "Un partenaire intégré pour sécuriser les opérations minières et industrielles (fuel management, transit, transport).",
        primaryCta: "Découvrir nos services",
        secondaryCta: "Nous contacter",
      },
      contact: {
        badge: "Contact",
        title: "Contactez NDC",
        description: "Notre équipe est disponible pour répondre à vos questions et vous accompagner dans vos projets.",
        primaryCta: "Appeler maintenant",
        secondaryCta: "Envoyer un email",
      },
    },
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      about: "About",
      media: "Media",
      contact: "Contact",
      quote: "Request a quote",
    },
    hero: {
      about: {
        badge: "Who we are",
        title: "About NDC",
        description: "An integrated partner to secure mining & industrial operations (fuel management, transit, transport).",
        primaryCta: "Explore our services",
        secondaryCta: "Contact us",
      },
      contact: {
        badge: "Get in touch",
        title: "Contact NDC",
        description: "Our team is ready to answer your questions and support your logistics projects.",
        primaryCta: "Call now",
        secondaryCta: "Send email",
      },
    },
  },
} as const;

export type TranslationKey = string;
