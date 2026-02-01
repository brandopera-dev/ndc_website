export type Language = "fr" | "en";

export const DEFAULT_LANGUAGE: Language = "fr";

export const translations = {
  fr: {
    // ============================================
    // COMPOSANTS COMMUNS
    // ============================================
    
    // Header / Navigation
    nav: {
      home: "Accueil",
      services: "Services",
      about: "À propos",
      media: "Média",
      contact: "Contact",
      quote: "Demander un devis",
      langToggle: "Passer en EN",
    },
    
    // Hero sections pour les pages
    hero: {
      about: {
        badge: "Qui nous sommes",
        title: "À propos de NDC",
        description: "Un partenaire intégré pour sécuriser les activités d'exploitations des mines et industries. (Fuel Management et infrastructures associées, Transport, Transit)",
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
      media: {
        badge: "MÉDIA",
        title: "Immersion terrain de NDC Énergie",
        description: "Vidéos grande nature, images et actualités : découvrez nos infrastructures, nos opérations et les équipes qui font avancer vos sites.",
        videosBtn: "Voir les vidéos",
        galleryBtn: "Explorer la galerie",
      },
      fuelManagement: {
        breadcrumb: "Fuel management & infrastructures",
        title: "Fuel management & infrastructures",
        description: "Importateur de produits pétroliers, NDC Énergie conçoit, déploie, exploite et assure la Maintenance des systèmes de stockage d'hydrocarbures",
        quoteBtn: "Demander un devis",
        startBtn: "Démarrer une demande",
      },
      transportTransit: {
        breadcrumb: "Transport & transit",
        title: "Transport & transit",
        description: "Transport transfrontalier et transit des matières premières, des materiels et engins miniers ainsi que les produits pétroliers.",
        quoteBtn: "Demander un devis",
        fuelBtn: "Fuel management",
      },
      reseauxDistribution: {
        breadcrumb: "Réseaux de distribution",
        title: "Réseaux de distribution",
        description: "Approvisionnement et gestion automatisée de stations-service avec une plateforme dédiée au suivi des flux de vente et de stocks en temps réel.",
        quoteBtn: "Demander un devis",
        transportBtn: "Transport & transit",
      },
    },

    // Services Menu (Header)
    servicesMenu: {
      label: "Nos expertises",
      title: "Solutions énergétiques & logistiques",
      description: "Des services conçus pour sécuriser, optimiser et accompagner les opérations industrielles.",
      fuelManagement: {
        title: "Fuel Management",
        subtitle: "Stockage & distribution d'hydrocarbures sur site",
      },
      transportTransit: {
        title: "Transport & Transit",
        subtitle: "Logistique industrielle et ressources minières",
      },
      reseauxDistribution: {
        title: "Réseaux de distribution",
        subtitle: "Stations-service & infrastructures multi-sites",
      },
      discover: "Découvrir",
    },
    
    // Footer
    footer: {
      cta: {
        heading: "Parlez-nous de votre besoin et recevez une réponse rapide.",
        button: "Demander un devis",
      },
      brand: {
        description: "NDC Énergie accompagne les mines et industries avec un modèle intégré (hydrocarbures, transport, transit), orienté fiabilité et performance.",
      },
      quickLinks: {
        title: "Accès rapide",
        home: "Accueil",
        about: "À propos",
        media: "Média",
        contact: "Contact",
      },
      services: {
        title: "Services",
        fuelManagement: "Gestion du fuel & infrastructures",
        reseaux: "Réseaux de distribution",
        transport: "Transport & transit",
        viewAll: "Voir tous les services",
      },
      usefulLinks: {
        title: "Liens utiles",
        description: "Accédez rapidement aux sections clés du site.",
        quote: "Demande de devis",
        testimonials: "Avis clients",
        method: "Notre méthode",
      },
      copyright: "Copyright ©2026 NDC Énergie. Tous droits réservés",
      legal: {
        mentions: "Mentions",
        privacy: "Politique de confidentialité",
      },
      signature: {
        madeWith: "Made with ♥ by",
        company: "SUPERBRAND",
        tagline: "we love coffee ☕",
      },
    },

    // ============================================
    // COMPOSANT: HeroModernSection
    // ============================================
    heroModern: {
      title1: "Votre Partenaire",
      title2: "Hydrocarbures & Logistique",
      description: "Solutions complètes de systèmes de gestion et de stockage d'hydrocarbures, de Transport et de Transit pour le secteur minier et industriel.",
      servicesBtn: "Nos services",
      quoteBtn: "Demander un devis",
      floatingCards: {
        fuelManagement: {
          title: "Fuel Management",
          subtitle: "Solution Full",
        },
        transit: {
          title: "Transit & Douanes",
          value: "98%",
          label: "Taux de conformité",
        },
        clients: {
          value: "+50 clients actifs",
          label: "Mines & Industries",
        },
      },
    },

    // ============================================
    // COMPOSANT: ProcessSection
    // ============================================
    process: {
      verticalLabel: "PROCESS",
      kicker: "Notre méthode",
      title: "Des solutions pensées pour les opérations industrielles",
      description: "Découvrez nos axes d'intervention et accédez à chaque service avec des actions dédiées.",
      cards: {
        fuelManagement: {
          title: "INFRASTRUCTURES & FUEL MANAGEMENT",
          description: "NDC Énergie conçoit, construit, exploite et maintient des infrastructures de stockage et de distribution d'hydrocarbures directement sur site, pour garantir disponibilité, traçabilité et conformité.",
          features: ["Contrôle qualité & conformité", "Sécurisation des volumes", "Exploitation continue"],
        },
        transport: {
          title: "TRANSPORT & TRANSIT",
          description: "Transport transfrontalier et transit des matières premières, des materiels et engins miniers ainsi que les produits pétroliers.",
          features: ["Flotte dédiée", "Organisation des flux", "Sécurisation des trajets"],
        },
        reseaux: {
          title: "RESEAUX DE DISTRIBUTION",
          description: "Conception et exploitation de réseaux de stockage et de distribution d'hydrocarbures sur plusieurs points, pour optimiser les flux et réduire les pertes.",
          features: ["Distribution multi-sites", "Procédures strictes", "Disponibilité permanente"],
        },
      },
      brandBadge: "NDC Énergie",
      serviceLabel: "Service",
      axeLabel: "Axe",
      discoverBtn: "Découvrir le service",
      quoteBtn: "Demander un devis",
    },

    // ============================================
    // COMPOSANT: CTASection
    // ============================================
    cta: {
      title1: "Prêt à lancer",
      title2: "votre projet ?",
      description: "Demandez votre devis gratuitement en quelques minutes et profitez de tarifs compétitifs.",
      quoteBtn: "Demander un devis",
      callBtn: "Nous appeler",
    },

    // ============================================
    // COMPOSANT: AboutUseSection
    // ============================================
    aboutUse: {
      badge: "À PROPOS",
      kicker: "Comment ça marche",
      title: "Solutions NDC Énergie",
      highlight: "100% Fiables",
      description: "Partenaire de confiance pour vos opérations minières et industrielles en Afrique. Expertise complète en Fuel Management, Transport et Transit avec une disponibilité 24/7.",
      services: {
        fuelManagement: {
          title: "Stockage & Fuel Management",
          subtitle: "4 niveaux de service",
        },
        transport: {
          title: "Transit & Transport",
          subtitle: "Support complet 24/7",
        },
      },
      features: {
        secure: {
          title: "Sûr & sécurisé",
          description: "Votre marchandise est protégée grâce à une couverture et des procédures adaptées.",
        },
        onTime: {
          title: "Livraison ponctuelle",
          description: "Nous garantissons des délais maîtrisés avec un suivi en temps réel.",
        },
        costEffective: {
          title: "Rentable",
          description: "Des tarifs compétitifs sans compromis sur la qualité de service.",
        },
        expertTeam: {
          title: "Équipe experte",
          description: "Des professionnels expérimentés, dédiés à votre réussite.",
        },
      },
      learnMore: "EN SAVOIR PLUS",
      callUs: "Appelez-nous 24/7",
      phone: "+223 91 88 38 67",
      expert: "Expert Logistique",
      projects: {
        title: "Projets réalisés",
        value: "50+",
        label1: "Projets",
        label2: "Réussis",
      },
      experience: {
        value: "18+ Années",
        label1: "d'Expérience",
        label2: "Terrain",
      },
    },

    // ============================================
    // COMPOSANT: FaqSection
    // ============================================
    faq: {
      badge: "Questions & Réponses",
      title1: "Questions",
      title2: "fréquentes",
      description: "Nous répondons aux questions les plus courantes sur nos services de transport, stockage et distribution.",
      features: [
        "Gestion efficace du transport de matières premières, engins et marchandises",
        "Gestion des risques et protocoles d'urgence en cas de deversement de produits transportes",
        "Suivi en temps réel des expéditions avec mises à jour",
      ],
      viewAll: "Voir toutes les FAQ",
      items: [
        {
          q: "Quels sont les différents types de logistique ?",
          a: "La logistique regroupe la planification, l'exécution et le contrôle du transport et du stockage des marchandises, de l'origine jusqu'au point de consommation.",
        },
        {
          q: "Comment fonctionne le dédouanement pour un transport international ?",
          a: "Le dédouanement inclut la documentation, les droits et taxes, et les contrôles de conformité. Un transitaire/broker vous accompagne pour respecter les règles avant la mise à disposition.",
        },
        {
          q: "Quels sont les défis courants en logistique ?",
          a: "Les défis les plus fréquents : variations de capacité, retards, exigences réglementaires, et manque de visibilité sur plusieurs transporteurs et itinéraires.",
        },
        {
          q: "Quel est l'impact de la technologie sur la logistique ?",
          a: "La technologie améliore le tracking, l'optimisation des itinéraires, la précision des stocks et la communication grâce à la visibilité temps réel et l'automatisation.",
        },
      ],
    },

    // ============================================
    // COMPOSANT: FeaturesSection
    // ============================================
    features: {
      badge: "VALEUR",
      kicker: "Ce que nous pouvons vous apporter",
      title: "NDC plus qu'un simple prestataire",
      description: "Nous offrons des solutions innovantes et une expertise terrain pour réduire les risques opérationnels et augmenter la performance.",
      subtitle: "Choisissez NDC Énergie et optez pour :",
      riskReduction: {
        title: "Réduction des risques",
        items: [
          { title: "Moins d'interruptions", description: "Diminution des arrêts de production liés à des ruptures de fuel ou des retards logistiques." },
          { title: "Moins de complexité", description: "Un seul partenaire pour gérer des enjeux critiques (énergie, transport, transit)." },
        ],
      },
      performanceGain: {
        title: "Gain de performance",
        items: [
          { title: "Plus de visibilité", description: "Meilleure connaissance des consommations, des coûts, des délais." },
          { title: "Plus de performance", description: "Une chaîne d'approvisionnement alignée sur les objectifs d'exploitation du client." },
        ],
      },
      priority: "Priorité: continuité des opérations",
      priorityDescription: "Réduction du risque opérationnel et pilotage de la performance sur les sites.",
    },

    // ============================================
    // COMPOSANT: TestimonialsModernSection
    // ============================================
    testimonials: {
      badge: "AVIS CLIENTS",
      title: "Ce que disent nos clients",
      prev: "Précédent",
      next: "Suivant",
      goTo: "Aller au témoignage",
      items: [
        {
          name: "Amadou Traoré",
          route: "Bamako → Kayes",
          text: "Service excellent pour le transport de nos équipements miniers. NDC a géré toute la logistique avec professionnalisme. Livraison dans les délais, équipe très réactive.",
          service: "Transport Minier",
        },
        {
          name: "Fatoumata Diallo",
          route: "Bamako → Sikasso",
          text: "Excellente gestion du fuel management pour notre site minier. Support 24/7 très réactif. NDC assure la continuité de nos opérations sans interruption.",
          service: "Fuel Management",
        },
        {
          name: "Ibrahim Keita",
          route: "Mali → Burkina Faso",
          text: "Transit et douanes gérés de manière impeccable. Aucun retard, documentation complète. NDC est notre partenaire logistique de confiance en Afrique de l'Ouest.",
          service: "Transit & Douanes",
        },
        {
          name: "Aissata Coulibaly",
          route: "Bamako → Kati",
          text: "Solution complète de stockage d'hydrocarbures très professionnelle. Installation sécurisée, suivi rigoureux. NDC répond parfaitement à nos besoins opérationnels.",
          service: "Stockage Hydrocarbures",
        },
        {
          name: "Moussa Sangaré",
          route: "Mali → Sénégal",
          text: "Transport de marchandises entre pays très efficace. Coordination parfaite, respect des délais. NDC maîtrise parfaitement les routes transafricaines.",
          service: "Transport International",
        },
      ],
    },

    // ============================================
    // COMPOSANT: QuoteCalculatorSection
    // ============================================
    quoteCalculator: {
      title: "Demandez un devis",
      description: "Remplissez le formulaire en quelques étapes. Notre équipe vous recontactera rapidement.",
      steps: {
        service: "Service",
        company: "Société",
        details: "Détails",
        contact: "Contact",
      },
      success: {
        title: "Demande envoyée !",
        description: "Merci pour votre demande. Notre équipe vous recontactera rapidement avec une proposition adaptée.",
        emailBtn: "Envoyer par email",
        newRequest: "Nouvelle demande",
      },
      step1: {
        title: "Quel service vous intéresse ?",
        subtitle: "Sélectionnez le type de service pour votre demande",
        services: {
          fuelManagement: { title: "Infrastructures & Fuel Management", description: "Stockage, gestion et approvisionnement" },
          transport: { title: "Transport & Transit", description: "Acheminement de marchandises" },
          reseaux: { title: "Réseaux de Distribution", description: "Livraison vers stations-service" },
        },
        error: "Veuillez sélectionner un service",
      },
      step2: {
        title: "Votre société",
        subtitle: "Parlez-nous de votre entreprise",
        companyName: { label: "Nom de votre société *", placeholder: "Ex: ABC Industries" },
        sector: { label: "Secteur d'activité *", placeholder: "Ex: Mines, Transport, BTP, Énergie..." },
        required: "Champ requis",
      },
      step3: {
        title: "Détails de votre besoin",
        subtitles: {
          fuel: "Informations sur votre besoin en hydrocarbures",
          transport: "Informations sur votre transport",
          reseaux: "Informations sur votre distribution",
        },
        fuelType: { label: "Type d'hydrocarbures *", placeholder: "Sélectionnez un type", options: ["HFO", "DDO", "JET", "GASOIL", "Autres"] },
        consumption: { label: "Consommation prévisionnelle mensuelle *", placeholder: "Ex: 50 000 L/mois" },
        siteLocation: { label: "Où se trouve votre site d'exploitation ? *", placeholder: "Pays, ville, localité..." },
        productType: { label: "Nom / Type de produit ou marchandise *", placeholder: "Ex: Matériel minier, carburant, conteneurs..." },
        pickupAddress: { label: "Adresse du point d'enlèvement *", placeholder: "Pays, ville, localité..." },
        deliveryAddress: { label: "Adresse du point de livraison *", placeholder: "Pays, ville, localité..." },
      },
      step4: {
        title: "Vos coordonnées",
        subtitle: "Comment pouvons-nous vous contacter ?",
        email: { label: "Adresse email *", placeholder: "votre@email.com" },
        phone: { label: "Numéro de téléphone *", placeholder: "+223 ..." },
        summary: {
          title: "Récapitulatif",
          service: "Service",
          company: "Société",
          sector: "Secteur",
        },
      },
      buttons: {
        prev: "← Précédent",
        next: "Continuer →",
        sending: "Envoi...",
        submit: "Envoyer ma demande",
      },
      errors: {
        general: "Une erreur est survenue. Veuillez réessayer.",
        connection: "Erreur de connexion. Veuillez vérifier votre connexion internet.",
      },
    },

    // ============================================
    // COMPOSANT: ShipBannerFeaturesSection
    // ============================================
    shipBanner: {
      features: [
        { title: "Livraison fiable, sur site", description: "Sécurisation des flux vers sites miniers et zones industrielles." },
        { title: "Couverture multi-sites", description: "Coordination des trajets et gestion des points de chute." },
        { title: "Coûts maîtrisés", description: "Optimisation des itinéraires et transparence des opérations." },
        { title: "Support 24/7", description: "Assistance opérationnelle pour continuité sur le terrain." },
      ],
      imageAlt: "Opérations minières",
    },

    // ============================================
    // COMPOSANT: TrustedPartnerSection
    // ============================================
    trustedPartner: {
      partnersTitle: "Nos Partenaires de Confiance",
      aboutTitle: "À Propos de Notre Service",
      mainTitle: "Votre Partenaire de Confiance en Logistique Globale",
      description: "NDC accompagne les opérations minières et industrielles avec des solutions intégrées de Fuel Management, Transit & Douanes, transport et approvisionnement multi-sites. Priorité : sécurité, conformité et continuité des opérations sur le terrain.",
      excellence: {
        title: "L'Excellence à Chaque Kilomètre",
        description: "Nous nous engageons à fournir des services logistiques efficaces, transparents et axés sur la technologie qui connectent les entreprises à l'échelle mondiale avec rapidité et fiabilité.",
      },
      vision: {
        title: "Façonner l'Avenir de la Logistique",
        description: "Notre vision est de construire un écosystème logistique plus intelligent propulsé par l'innovation, la durabilité et une connectivité mondiale sans faille.",
      },
    },

    // ============================================
    // PAGE: About
    // ============================================
    pages: {
      about: {
        hero: {
          badge: "Qui nous sommes",
          title: "À propos de NDC",
          description: "Un partenaire intégré pour sécuriser les activités d'exploitations des mines et industries. (Fuel Management et infrastructures associées, Transport, Transit)",
          primaryCta: "Découvrir nos services",
          secondaryCta: "Nous contacter",
        },
        whoWeAre: {
          badge: "• QUI SOMMES-NOUS",
          title: "Nous Sommes Spécialisés dans :",
          bulletPoints: [
            "L'importation et la distribution d'hydrocarbures",
            "La conception, la construction, l'exploitation, la maintenance de systèmes de stockage d'hydrocarbures et le Fuel Management",
            "Le transport transfrontalier et le transit",
          ],
          quote: "Nous plaçons la valorisation des ressources humaines au cœur de notre stratégie à travers laquelle nos Femmes et hommes engagés, contribuent à bâtir une vision ambitieuse et durable.",
          values: ["Fiabilité", "Efficacité", "Orientation client", "Durabilité"],
        },
        context: {
          verticalLabel: "CONTEXTE",
          badge: "• UN RÔLE CLÉ",
          title: "Un rôle clé auprès des mines et industrie",
          paragraph1: "L'industrie minière malienne est caractérisée par des activités opérationnelles étroitement liées à la disponibilité d'une source d'énergie stable ainsi qu'à une maîtrise parfaite de la chaîne d'approvisionnement des matières premières, des consommables, des engins de manutention et des pièces de rechanges.",
          paragraph2: "Dans ce contexte dynamique et exigeant, chaque interruption imprévue, chaque retard d'approvisionnement ou chaque blocage administratif dans les formalités de transit peut entraîner des répercussions considérables tant sur le plan financier qu'opérationnel.",
          highlight: "C'est de ces contraintes que NDC Énergie a pris naissance.",
        },
        mission: {
          badge: "• NOTRE MISSION",
          title: "Nous avons pour mission",
          items: [
            { keyword: "GARANTIR", text: "Aux industriels, un maintien de l'approvisionnement en hydrocarbures." },
            { keyword: "OFFRIR", text: "Une palette de solutions logistiques adaptée aux contraintes opérationnelles du client, avec une approche pragmatique orientée performance, dans le respect des règles de Conformité, de Fiabilité et de Sécurité." },
            { keyword: "INTERVENIR", text: "En tant que partenaire technique capable de sécuriser les flux critiques et de réduire les risques de perturbation et d'interruption d'activité." },
          ],
        },
        operationalModel: {
          badge: "• MODELE OPS",
          title: "Notre modèle opérationnel",
          subtitle: "Travailler avec NDC Énergie, ce n'est pas additionner des prestataires, c'est s'appuyer sur un modèle intégré.",
          practiceTitle: "En pratique :",
          practiceItems: [
            "Capacité à adapter nos solutions en fonction de l'évolution des projets",
            "Mise en place de procédures et de SLA clairs",
            "Mise en place de KPI et reporting",
            "Points de contrôle et d'amélioration continue",
          ],
          principlesTitle: "Nos principes opérationnels :",
          principles: [
            { keyword: "DISPONIBILITÉ", text: "Capacité à fournir et à opérer de façon continue, en rapport avec les besoins d'exploitation." },
            { keyword: "FIABILITÉ", text: "Engagement sur la qualité du service, la régularité des livraisons et la robustesse des infrastructures." },
            { keyword: "TRAÇABILITÉ", text: "Suivi des volumes, des mouvements de fuel, des flux de matériaux et des dossiers de transit." },
            { keyword: "SÉCURITÉ", text: "Conception et opération selon des standards HSE stricts, réduction des risques d'incident et de pollution." },
            { keyword: "CONFORMITÉ", text: "Respect des réglementations locales, des normes environnementales et des exigences des donneurs d'ordre." },
            { keyword: "RESPONSABILITÉ UNIQUE", text: "Un seul partenaire responsable de l'ensemble de la chaîne Hydrocarbures–Transport–Transit." },
          ],
        },
        stats: [
          { value: "16", label: "Années d'expérience" },
          { value: "94%", label: "Taux de réussies des opérations" },
          { value: "18 000+", label: "Personnes impactées par nos oeuvres sociales" },
          { value: "50+", label: "Experts dans notre équipe" },
        ],
        gallery: {
          badge: "• GALERIE",
          title: "NDC Énergie en Action",
        },
        timeline: {
          badge: "• JALONS",
          title: "Notre Histoire Depuis la Création",
          milestones: [
            { year: "2008", title: "Fondation", description: "Démarré avec une vision de révolutionner le secteur des hydrocarbures et de la logistique au Mali" },
            { year: "2012", title: "Expansion", description: "Ouverture de nouvelles routes logistiques à travers le continent africain" },
            { year: "2015", title: "Innovation", description: "Lancement de solutions avancées de Fuel Management" },
            { year: "2020", title: "Croissance", description: "Établissement de partenariats stratégiques majeurs" },
            { year: "2022", title: "Leadership", description: "Devenu le leader régional en importation de produits pétroliers" },
          ],
        },
        ctaSection: {
          title: "Laissez notre équipe gérer votre cargaison avec soin",
          description: "Notre équipe expérimentée garantit que votre cargaison est traitée avec le plus grand soin, assurant une livraison sûre et ponctuelle à chaque étape.",
          button: "Demander un devis",
        },
      },

      // ============================================
      // PAGE: Contact
      // ============================================
      contact: {
        hero: {
          badge: "Contact",
          title: "Contactez NDC",
          description: "Notre équipe est disponible pour répondre à vos questions et vous accompagner dans vos projets.",
          primaryCta: "Appeler maintenant",
          secondaryCta: "Envoyer un email",
        },
        infoCards: {
          headquarters: { title: "Notre Siège", value: "Hamdalaye, ACI 2000, Bamako, Mali" },
          phone: { title: "Téléphone", value: "+223 91 88 38 67" },
          email: { title: "Email", value: "info@ndc.africa" },
          hours: { title: "Horaires", value1: "Lun - Ven: 8h00 - 18h00", value2: "Sam: 9h00 - 13h00" },
        },
      },

      // ============================================
      // PAGE: Media
      // ============================================
      media: {
        hero: {
          badge: "MÉDIA",
          title: "Immersion terrain de NDC Énergie",
          description: "Vidéos grande nature, images et actualités : découvrez nos infrastructures, nos opérations et les équipes qui font avancer vos sites.",
          videosBtn: "Voir les vidéos",
          galleryBtn: "Explorer la galerie",
        },
        gallery: {
          badge: "Galerie photos",
          title: "Nos activités en images",
          description: "Découvrez nos infrastructures, nos équipes et nos opérations sur le terrain à travers notre galerie photo.",
          categories: {
            all: "Tout",
            transport: "Transport",
            fuel: "Fuel Management",
            reseaux: "Réseaux",
            bureaux: "Bureaux",
            garage: "Garage & Maintenance",
            events: "Événements",
          },
          photoCount: "photo(s)",
          emptyState: "Aucune image dans cette catégorie",
        },
        news: {
          badge: "Actualités",
          title: "Blogs & news",
          description: "Mises à jour, annonces et communications autour de NDC Énergie.",
          readMore: "En savoir plus",
        },
      },

      // ============================================
      // PAGE: Services (liste)
      // ============================================
      services: {
        hero: {
          badge: "OUR SERVICES",
          title: "Logistics Solutions for Every Need",
          description: "Comprehensive logistics solutions designed to streamline your supply chain and enhance your business operations.",
        },
      },

      // ============================================
      // PAGE: FuelManagement
      // ============================================
      fuelManagement: {
        hero: {
          breadcrumb: "Fuel management & infrastructures",
          title: "Fuel management & infrastructures",
          description: "Importateur de produits pétroliers, NDC Énergie conçoit, déploie, exploite et assure la Maintenance des systèmes de stockage d'hydrocarbures",
          quoteBtn: "Demander un devis",
          startBtn: "Démarrer une demande",
        },
        whatWeSecure: {
          badge: "• Ce que nous sécurisons",
          title: "Un modèle opérationnel intégré, orienté performance",
          description: "Au service des acteurs miniers et industriels, nous offrons une solution complète et sur mesure qui englobe :",
          axesTitle: "Axes de service",
          axes: [
            { title: "Stockage & distribution sur site", description: "Conception, déploiement, exploitation et maintenance des infrastructures." },
            { title: "Traçabilité des flux", description: "Suivi des volumes, mouvements, consommations et écarts." },
            { title: "Approvisionnement", description: "Planification, continuité et réduction des ruptures." },
          ],
          contactBtn: "Contacter un expert",
          reseauxBtn: "Réseaux de distribution",
        },
        process: {
          badge: "• NOTRE PROCESSUS",
          title: "Une approche intégrée en 4 étapes",
          steps: [
            { number: "01", title: "LA CONCEPTION", description: "Dimensionnement des capacités de stockage suivant les besoins de consommations, Élaboration des notes de calculs et l'ensemble des Plans d'exécution." },
            { number: "02", title: "LA CONSTRUCTION", description: "Constructions des infrastructures, Installation des Automates et Équipements d'hydrocarbures, Mise en place du système informatique de Fuel Management, Installation des dispositifs du système Réseau Incendie, Travaux de Tests." },
            { number: "03", title: "L'EXPLOITATION", description: "Détermination de la stratégie et des fréquences de livraisons en hydrocarbures, Mise en place des manuels de procédures d'exploitation, Élaboration des rapports d'exploitation (suivi des consommations, les inventaires et réconciliation), Mise en place des indicateurs de performance." },
            { number: "04", title: "LA MAINTENANCE", description: "Inspections régulières des installations, Planning d'intervention pour maintenance préventive et curative, Mise à disposition de stocks de consommables et de pièces de rechanges." },
          ],
        },
        gallery: {
          badge: "Galerie photos",
          title1: "Nos installations",
          title2: "& opérations terrain",
          description: "Découvrez nos infrastructures de stockage, nos équipements de pointe et nos équipes en action.",
          photoCount: "photos",
          clickToEnlarge: "Cliquez pour agrandir",
        },
        faq: {
          badge: "FAQ",
          title: "Questions fréquentes",
          items: [
            { q: "Comment garantissez-vous la traçabilité des volumes ?", a: "Nous mettons en place des procédures de contrôle (entrées/sorties), des points de comptage et des reportings. La traçabilité est adaptée au niveau de service et aux contraintes site." },
            { q: "Intervenez-vous directement sur site minier ?", a: "Oui. Nos équipes peuvent déployer et opérer des solutions directement sur site pour sécuriser l'approvisionnement et réduire les risques de rupture." },
            { q: "Pouvez-vous proposer un contrat récurrent (SLA/KPI) ?", a: "Oui. Nous définissons des SLA, des KPI et un rythme de reporting selon vos objectifs d'exploitation." },
            { q: "Quels standards sécurité appliquez-vous ?", a: "Nous opérons selon des exigences HSE strictes (procédures, contrôles, formation), pour réduire les risques d'incident et de pollution." },
          ],
        },
      },

      // ============================================
      // PAGE: TransportTransit
      // ============================================
      transportTransit: {
        hero: {
          breadcrumb: "Transport & transit",
          title: "Transport & transit",
          description: "Transport transfrontalier et transit des matières premières, des materiels et engins miniers ainsi que les produits pétroliers.",
          quoteBtn: "Demander un devis",
          fuelBtn: "Fuel management",
        },
        terrain: {
          badge: "• Spécificités terrain",
          title: "Un rôle clé auprès des mines et industries",
          description: "Chaque interruption imprévue, retard d'approvisionnement ou blocage administratif peut impacter fortement la performance d'exploitation. Notre approche vise à réduire ces risques et à rendre les flux plus prévisibles.",
          features: [
            { title: "Flotte dédiée", description: "Capacités adaptées aux rotations et aux contraintes d'accès." },
            { title: "Sécurité des flux", description: "Planification, procédures HSE et points de contrôle." },
          ],
          benefitsTitle: "Ce que vous gagnez",
          benefits: [
            "Organisation des flux et planification des rotations",
            "Sécurisation des trajets et coordination opérationnelle",
            "Opérations adaptées aux contraintes terrain (sites éloignés)",
            "Reporting et amélioration continue",
          ],
          zonesTitle: "Zones d'intervention",
          zonesDescription: "Corridors miniers, zones industrielles, dépôts et plateformes logistiques.",
          contactBtn: "Contacter",
          reseauxBtn: "Réseaux de distribution",
        },
        gallery: {
          badge: "Galerie photos",
          title1: "Notre flotte",
          title2: "& nos opérations",
          description: "Découvrez notre flotte de transport, nos équipes de chauffeurs professionnels et nos opérations sur le terrain.",
        },
        faq: {
          badge: "FAQ",
          title: "Questions fréquentes",
          items: [
            { q: "Pouvez-vous opérer sur des pistes / zones éloignées ?", a: "Oui. Nous adaptons le plan de transport aux contraintes terrain et aux accès site." },
            { q: "Comment sécurisez-vous les convois ?", a: "Par la planification, des procédures HSE, des contrôles, et une coordination opérationnelle continue." },
            { q: "Proposez-vous des contrats long terme ?", a: "Oui. Nos contrats s'adaptent à l'évolution des projets, avec des SLA/KPI et un reporting." },
            { q: "Gérez-vous également le transit ?", a: "Selon le périmètre, nous pouvons intégrer les dossiers de transit pour réduire les délais et les blocages." },
          ],
        },
      },

      // ============================================
      // PAGE: ReseauxDistribution
      // ============================================
      reseauxDistribution: {
        hero: {
          breadcrumb: "Réseaux de distribution",
          title: "Réseaux de distribution",
          description: "Approvisionnement et gestion automatisée de stations-service avec une plateforme dédiée au suivi des flux de vente et de stocks en temps réel.",
          quoteBtn: "Demander un devis",
          transportBtn: "Transport & transit",
        },
        howWeOperate: {
          badge: "• Comment nous opérons",
          title: "Système automatisé, Planification et pilotage des volumes",
          paragraph1: "Dotées de systèmes gestion automatisée, nos stations-services sont suivis et pilotées en temps réel pour garantir la disponibilité des produits ainsi qu'une traçabilité sécurisée des flux de ventes et de stocks.",
          paragraph2: "Leader en importation de produits pétroliers au Mali, NDC Energie accompagne les distributeurs d'hydrocarbures et détenteur de stations-service par une politique d'approvisionnement qui s'appuie sur :",
          modulesTitle: "Modules",
          modules: [
            { title: "La distribution multi-sites", description: "Planification centralisée et coordination des points de vente." },
            { title: "Le pilotage des volumes", description: "Suivi des livraisons, contrôle des volumes et reporting." },
            { title: "Support exploitation", description: "Accompagnement opérationnel pour assurer la continuité de service." },
            { title: "Livraison multi-zones", description: "Gestion des contraintes locales et des zones éloignées." },
          ],
          contactBtn: "Contacter",
          fuelBtn: "Fuel management",
        },
        map: {
          badge: "• Notre réseau",
          title: "Stations NDC Énergie au Mali",
          description: "Un maillage stratégique couvrant les principales zones économiques du Mali pour garantir la disponibilité des produits pétroliers sur l'ensemble du territoire.",
          stations: ["Bamako", "Kayes", "Sikasso", "Ségou", "Mopti", "Koutiala"],
          stationPopup: "Station NDC Énergie",
          legend: {
            station: "Station-service NDC Énergie",
            coverage: "Zone de couverture",
          },
        },
        gallery: {
          badge: "Galerie photos",
          title1: "Nos stations",
          title2: "& événements",
          description: "Découvrez notre réseau de stations-service, nos inaugurations et nos équipes sur le terrain au Mali.",
        },
        faq: {
          badge: "FAQ",
          title: "Questions fréquentes",
          items: [
            { q: "Pouvez-vous livrer plusieurs stations sur une même journée ?", a: "Oui. Nous planifions des tournées multi-sites selon vos volumes et vos contraintes locales." },
            { q: "Proposez-vous un suivi des livraisons ?", a: "Oui. Traçabilité et reporting sont mis en place selon le périmètre de service." },
            { q: "Peut-on mettre en place un contrat récurrent ?", a: "Oui, avec fréquences, volumes et indicateurs de performance (SLA/KPI)." },
            { q: "Intervenez-vous sur des zones éloignées ?", a: "Oui. Nous adaptons le plan de transport et, si nécessaire, nous nous appuyons sur un réseau de partenaires." },
          ],
        },
      },
    },

    // ============================================
    // COMMUN
    // ============================================
    common: {
      learnMore: "En savoir plus",
      discover: "Découvrir",
      contact: "Contacter",
      quote: "Demander un devis",
      callNow: "Appeler maintenant",
      sendEmail: "Envoyer un email",
      viewAll: "Voir tout",
      prev: "Précédent",
      next: "Suivant",
      close: "Fermer",
      loading: "Chargement...",
      error: "Erreur",
      success: "Succès",
      required: "Requis",
      optional: "Optionnel",
    },
  },

  // ============================================
  // ENGLISH TRANSLATIONS
  // ============================================
  en: {
    nav: {
      home: "Home",
      services: "Services",
      about: "About",
      media: "Media",
      contact: "Contact",
      quote: "Request a quote",
      langToggle: "Switch to FR",
    },
    
    servicesMenu: {
      label: "Our expertise",
      title: "Energy & logistics solutions",
      description: "Services designed to secure, optimize and support industrial operations.",
      fuelManagement: {
        title: "Fuel Management",
        subtitle: "On-site hydrocarbon storage & distribution",
      },
      transportTransit: {
        title: "Transport & Transit",
        subtitle: "Industrial logistics and mining resources",
      },
      reseauxDistribution: {
        title: "Distribution Networks",
        subtitle: "Service stations & multi-site infrastructure",
      },
      discover: "Discover",
    },

    footer: {
      cta: {
        heading: "Tell us about your needs and receive a quick response.",
        button: "Request a quote",
      },
      brand: {
        description: "NDC Energy supports mines and industries with an integrated model (hydrocarbons, transport, transit), focused on reliability and performance.",
      },
      quickLinks: {
        title: "Quick access",
        home: "Home",
        about: "About",
        media: "Media",
        contact: "Contact",
      },
      services: {
        title: "Services",
        fuelManagement: "Fuel management & infrastructure",
        reseaux: "Distribution networks",
        transport: "Transport & transit",
        viewAll: "View all services",
      },
      usefulLinks: {
        title: "Useful links",
        description: "Quick access to key sections of the site.",
        quote: "Quote request",
        testimonials: "Customer reviews",
        method: "Our method",
      },
      copyright: "Copyright ©2026 NDC Energy. All rights reserved",
      legal: {
        mentions: "Legal notice",
        privacy: "Privacy policy",
      },
      signature: {
        madeWith: "Made with ♥ by",
        company: "SUPERBRAND",
        tagline: "we love coffee ☕",
      },
    },

    heroModern: {
      title1: "Your Partner",
      title2: "Hydrocarbons & Logistics",
      description: "Complete solutions for hydrocarbon management and storage systems, Transport and Transit for the mining and industrial sector.",
      servicesBtn: "Our services",
      quoteBtn: "Request a quote",
      floatingCards: {
        fuelManagement: {
          title: "Fuel Management",
          subtitle: "Full Solution",
        },
        transit: {
          title: "Transit & Customs",
          value: "98%",
          label: "Compliance rate",
        },
        clients: {
          value: "+50 active clients",
          label: "Mines & Industries",
        },
      },
    },

    process: {
      verticalLabel: "PROCESS",
      kicker: "Our method",
      title: "Solutions designed for industrial operations",
      description: "Discover our areas of intervention and access each service with dedicated actions.",
      cards: {
        fuelManagement: {
          title: "INFRASTRUCTURE & FUEL MANAGEMENT",
          description: "NDC Energy designs, builds, operates and maintains hydrocarbon storage and distribution infrastructure directly on site, to guarantee availability, traceability and compliance.",
          features: ["Quality control & compliance", "Volume security", "Continuous operation"],
        },
        transport: {
          title: "TRANSPORT & TRANSIT",
          description: "Cross-border transport and transit of raw materials, mining equipment and materials as well as petroleum products.",
          features: ["Dedicated fleet", "Flow organization", "Route security"],
        },
        reseaux: {
          title: "DISTRIBUTION NETWORKS",
          description: "Design and operation of hydrocarbon storage and distribution networks across multiple points, to optimize flows and reduce losses.",
          features: ["Multi-site distribution", "Strict procedures", "Permanent availability"],
        },
      },
      brandBadge: "NDC Energy",
      serviceLabel: "Service",
      axeLabel: "Axis",
      discoverBtn: "Discover the service",
      quoteBtn: "Request a quote",
    },

    cta: {
      title1: "Ready to launch",
      title2: "your project?",
      description: "Request your free quote in a few minutes and enjoy competitive rates.",
      quoteBtn: "Request a quote",
      callBtn: "Call us",
    },

    features: {
      badge: "VALUE",
      kicker: "What we can bring you",
      title: "NDC more than just a provider",
      description: "We offer innovative solutions and field expertise to reduce operational risks and increase performance.",
      subtitle: "Choose NDC Energy and opt for:",
      riskReduction: {
        title: "Risk reduction",
        items: [
          { title: "Fewer interruptions", description: "Reduction in production stoppages due to fuel shortages or logistics delays." },
          { title: "Less complexity", description: "A single partner to manage critical issues (energy, transport, transit)." },
        ],
      },
      performanceGain: {
        title: "Performance gain",
        items: [
          { title: "More visibility", description: "Better knowledge of consumption, costs, and deadlines." },
          { title: "More performance", description: "A supply chain aligned with the client's operational objectives." },
        ],
      },
      priority: "Priority: operational continuity",
      priorityDescription: "Reduction of operational risk and performance management on sites.",
    },

    common: {
      learnMore: "Learn more",
      discover: "Discover",
      contact: "Contact",
      quote: "Request a quote",
      callNow: "Call now",
      sendEmail: "Send email",
      viewAll: "View all",
      prev: "Previous",
      next: "Next",
      close: "Close",
      loading: "Loading...",
      error: "Error",
      success: "Success",
      required: "Required",
      optional: "Optional",
    },

    // Hero sections for pages
    hero: {
      about: {
        badge: "Who we are",
        title: "About NDC",
        description: "An integrated partner to secure mining and industrial operations. (Fuel Management and associated infrastructure, Transport, Transit)",
        primaryCta: "Discover our services",
        secondaryCta: "Contact us",
      },
      contact: {
        badge: "Contact",
        title: "Contact NDC",
        description: "Our team is available to answer your questions and support you in your projects.",
        primaryCta: "Call now",
        secondaryCta: "Send an email",
      },
      media: {
        badge: "MEDIA",
        title: "NDC Energy Field Immersion",
        description: "Large-scale videos, images and news: discover our infrastructure, our operations and the teams that drive your sites forward.",
        videosBtn: "Watch videos",
        galleryBtn: "Explore the gallery",
      },
      fuelManagement: {
        breadcrumb: "Fuel management & infrastructure",
        title: "Fuel management & infrastructure",
        description: "As a petroleum product importer, NDC Energy designs, deploys, operates and maintains hydrocarbon storage systems",
        quoteBtn: "Request a quote",
        startBtn: "Start a request",
      },
      transportTransit: {
        breadcrumb: "Transport & transit",
        title: "Transport & transit",
        description: "Cross-border transport and transit of raw materials, mining equipment and materials, as well as petroleum products.",
        quoteBtn: "Request a quote",
        fuelBtn: "Fuel management",
      },
      reseauxDistribution: {
        breadcrumb: "Distribution networks",
        title: "Distribution networks",
        description: "Supply and automated management of service stations with a platform dedicated to monitoring sales flows and stocks in real time.",
        quoteBtn: "Request a quote",
        transportBtn: "Transport & transit",
      },
    },

    // Pages
    pages: {
      about: {
        hero: {
          badge: "Who we are",
          title: "About NDC",
          description: "An integrated partner to secure mining & industrial operations (fuel management, transit, transport).",
          primaryCta: "Explore our services",
          secondaryCta: "Contact us",
        },
      },
      contact: {
        hero: {
          badge: "Get in touch",
          title: "Contact NDC",
          description: "Our team is ready to answer your questions and support your logistics projects.",
          primaryCta: "Call now",
          secondaryCta: "Send email",
        },
      },
    },
  },
} as const;

export type TranslationKey = string;
