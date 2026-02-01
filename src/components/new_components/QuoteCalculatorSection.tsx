import React, { useState } from 'react';
import { useI18n } from '@/i18n/I18nProvider';

type ServiceType = '' | 'fuel-management' | 'transport-transit' | 'reseaux-distribution';

const QuoteCalculatorSection = () => {
  const { language } = useI18n();
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // All translatable texts
  const texts = language === 'fr' ? {
    title: "Demandez un devis",
    subtitle: "Remplissez le formulaire en quelques étapes. Notre équipe vous recontactera rapidement.",
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
        'fuel-management': { title: "Infrastructures & Fuel Management", description: "Stockage, gestion et approvisionnement" },
        'transport-transit': { title: "Transport & Transit", description: "Acheminement de marchandises" },
        'reseaux-distribution': { title: "Réseaux de Distribution", description: "Livraison vers stations-service" },
      },
      error: "Veuillez sélectionner un service",
    },
    step2: {
      title: "Votre société",
      subtitle: "Parlez-nous de votre entreprise",
      companyName: { label: "Nom de votre société *", placeholder: "Ex: ABC Industries" },
      sector: { label: "Secteur d'activité *", placeholder: "Ex: Mines, Transport, BTP, Énergie..." },
    },
    step3: {
      title: "Détails de votre besoin",
      subtitles: {
        fuel: "Informations sur votre besoin en hydrocarbures",
        transport: "Informations sur votre transport",
        reseaux: "Informations sur votre distribution",
      },
      fuelType: { label: "Type d'hydrocarbures *", placeholder: "Sélectionnez un type" },
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
      required: "Champ requis",
      general: "Une erreur est survenue. Veuillez réessayer.",
      connection: "Erreur de connexion. Veuillez vérifier votre connexion internet.",
    },
    fuelTypes: ['HFO', 'DDO', 'JET', 'GASOIL', 'Autres'],
  } : {
    title: "Request a Quote",
    subtitle: "Fill out the form in a few steps. Our team will get back to you quickly.",
    steps: {
      service: "Service",
      company: "Company",
      details: "Details",
      contact: "Contact",
    },
    success: {
      title: "Request sent!",
      description: "Thank you for your request. Our team will contact you soon with a tailored proposal.",
      emailBtn: "Send by email",
      newRequest: "New request",
    },
    step1: {
      title: "Which service interests you?",
      subtitle: "Select the type of service for your request",
      services: {
        'fuel-management': { title: "Infrastructure & Fuel Management", description: "Storage, management and supply" },
        'transport-transit': { title: "Transport & Transit", description: "Goods transportation" },
        'reseaux-distribution': { title: "Distribution Networks", description: "Delivery to service stations" },
      },
      error: "Please select a service",
    },
    step2: {
      title: "Your company",
      subtitle: "Tell us about your business",
      companyName: { label: "Company name *", placeholder: "E.g.: ABC Industries" },
      sector: { label: "Industry sector *", placeholder: "E.g.: Mining, Transport, Construction, Energy..." },
    },
    step3: {
      title: "Details of your needs",
      subtitles: {
        fuel: "Information about your hydrocarbon needs",
        transport: "Information about your transport",
        reseaux: "Information about your distribution",
      },
      fuelType: { label: "Type of hydrocarbons *", placeholder: "Select a type" },
      consumption: { label: "Estimated monthly consumption *", placeholder: "E.g.: 50,000 L/month" },
      siteLocation: { label: "Where is your operating site? *", placeholder: "Country, city, locality..." },
      productType: { label: "Product/goods name or type *", placeholder: "E.g.: Mining equipment, fuel, containers..." },
      pickupAddress: { label: "Pickup address *", placeholder: "Country, city, locality..." },
      deliveryAddress: { label: "Delivery address *", placeholder: "Country, city, locality..." },
    },
    step4: {
      title: "Your contact details",
      subtitle: "How can we reach you?",
      email: { label: "Email address *", placeholder: "your@email.com" },
      phone: { label: "Phone number *", placeholder: "+223 ..." },
      summary: {
        title: "Summary",
        service: "Service",
        company: "Company",
        sector: "Sector",
      },
    },
    buttons: {
      prev: "← Previous",
      next: "Continue →",
      sending: "Sending...",
      submit: "Submit my request",
    },
    errors: {
      required: "Required field",
      general: "An error occurred. Please try again.",
      connection: "Connection error. Please check your internet connection.",
    },
    fuelTypes: ['HFO', 'DDO', 'JET', 'GASOIL', 'Other'],
  };

  const getInitialForm = () => ({
    service: '' as ServiceType,
    company: '',
    sector: '',
    email: '',
    phone: '',
    fuelType: '',
    monthlyConsumption: '',
    siteLocation: '',
    productType: '',
    pickupAddress: '',
    deliveryAddress: '',
  });

  const [form, setForm] = useState(getInitialForm);

  const totalSteps = 4;

  const steps = [
    { id: 1, title: texts.steps.service },
    { id: 2, title: texts.steps.company },
    { id: 3, title: texts.steps.details },
    { id: 4, title: texts.steps.contact },
  ];

  const update = (key: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => {
      if (!prev[key as string]) return prev;
      const next = { ...prev };
      delete next[key as string];
      return next;
    });
  };

  const validateStep = (step: number) => {
    const nextErrors: Record<string, string> = {};

    if (step === 1) {
      if (!form.service) nextErrors.service = texts.step1.error;
    }

    if (step === 2) {
      if (!form.company.trim()) nextErrors.company = texts.errors.required;
      if (!form.sector.trim()) nextErrors.sector = texts.errors.required;
    }

    if (step === 3) {
      if (form.service === 'fuel-management') {
        if (!form.fuelType) nextErrors.fuelType = texts.errors.required;
        if (!form.monthlyConsumption.trim()) nextErrors.monthlyConsumption = texts.errors.required;
        if (!form.siteLocation.trim()) nextErrors.siteLocation = texts.errors.required;
      }

      if (form.service === 'transport-transit') {
        if (!form.productType.trim()) nextErrors.productType = texts.errors.required;
        if (!form.pickupAddress.trim()) nextErrors.pickupAddress = texts.errors.required;
        if (!form.deliveryAddress.trim()) nextErrors.deliveryAddress = texts.errors.required;
      }

      if (form.service === 'reseaux-distribution') {
        if (!form.fuelType) nextErrors.fuelType = texts.errors.required;
        if (!form.monthlyConsumption.trim()) nextErrors.monthlyConsumption = texts.errors.required;
        if (!form.deliveryAddress.trim()) nextErrors.deliveryAddress = texts.errors.required;
      }
    }

    if (step === 4) {
      if (!form.email.trim()) nextErrors.email = texts.errors.required;
      if (!form.phone.trim()) nextErrors.phone = texts.errors.required;
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const goNext = () => {
    if (!validateStep(currentStep)) return;
    setCurrentStep((s) => Math.min(totalSteps, s + 1));
  };

  const goPrev = () => {
    setErrors({});
    setCurrentStep((s) => Math.max(1, s - 1));
  };

  const getServiceLabel = (service: ServiceType) => {
    if (!service) return '';
    return texts.step1.services[service]?.title || '';
  };

  const buildMailto = () => {
    const serviceLabel = getServiceLabel(form.service);
    const subject = encodeURIComponent(`Demande de devis ${serviceLabel} – NDC Énergie`);
    
    let bodyLines = [
      `=== DEMANDE DE DEVIS ===`,
      `Service: ${serviceLabel}`,
      ``,
      `=== INFORMATIONS SOCIÉTÉ ===`,
      `Société: ${form.company}`,
      `Secteur d'activité: ${form.sector}`,
      ``,
    ];

    if (form.service === 'fuel-management') {
      bodyLines = bodyLines.concat([
        `=== DÉTAILS DE LA DEMANDE ===`,
        `Type d'hydrocarbures: ${form.fuelType}`,
        `Consommation prévisionnelle mensuelle: ${form.monthlyConsumption}`,
        `Site d'exploitation: ${form.siteLocation}`,
        ``,
      ]);
    }

    if (form.service === 'transport-transit') {
      bodyLines = bodyLines.concat([
        `=== DÉTAILS DE LA DEMANDE ===`,
        `Produit/Marchandise: ${form.productType}`,
        `Point d'enlèvement: ${form.pickupAddress}`,
        `Point de livraison: ${form.deliveryAddress}`,
        ``,
      ]);
    }

    if (form.service === 'reseaux-distribution') {
      bodyLines = bodyLines.concat([
        `=== DÉTAILS DE LA DEMANDE ===`,
        `Type d'hydrocarbures: ${form.fuelType}`,
        `Consommation prévisionnelle mensuelle: ${form.monthlyConsumption}`,
        `Point de livraison: ${form.deliveryAddress}`,
        ``,
      ]);
    }

    bodyLines = bodyLines.concat([
      `=== COORDONNÉES ===`,
      `Email: ${form.email}`,
      `Téléphone: ${form.phone}`,
    ]);

    const body = encodeURIComponent(bodyLines.join('\n'));
    return `mailto:dossouyovojoseph04@gmail.com?subject=${subject}&body=${body}`;
  };

  const [submitError, setSubmitError] = useState<string | null>(null);

  const submit = async () => {
    if (!validateStep(4)) return;
    setIsSubmitting(true);
    setSubmitError(null);

    const serviceLabel = getServiceLabel(form.service);
    const formData = {
      _subject: `Demande de devis ${serviceLabel} – NDC Énergie`,
      service: serviceLabel,
      societe: form.company,
      secteur: form.sector,
      email: form.email,
      telephone: form.phone,
      ...(form.service === 'fuel-management' && {
        type_hydrocarbures: form.fuelType,
        consommation_mensuelle: form.monthlyConsumption,
        site_exploitation: form.siteLocation,
      }),
      ...(form.service === 'transport-transit' && {
        produit_marchandise: form.productType,
        point_enlevement: form.pickupAddress,
        point_livraison: form.deliveryAddress,
      }),
      ...(form.service === 'reseaux-distribution' && {
        type_hydrocarbures: form.fuelType,
        consommation_mensuelle: form.monthlyConsumption,
        point_livraison: form.deliveryAddress,
      }),
    };

    try {
      const response = await fetch('https://formspree.io/f/xzdgrogw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setSubmitError(texts.errors.general);
      }
    } catch {
      setSubmitError(texts.errors.connection);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = (fieldName: string) =>
    `w-full bg-gray-50 border rounded-xl px-4 py-3.5 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-[#e11a1a]/15 focus:border-[#e11a1a]/30 focus:outline-none transition-all text-sm ${
      errors[fieldName] ? 'border-[#e11a1a]' : 'border-gray-200'
    }`;

  const labelClass = 'text-sm font-semibold text-gray-900';

  return (
    <section id="devis" className="py-14 sm:py-16 lg:py-20 ndc-section-red scroll-animate">
      <div className="max-w-3xl mx-auto px-6 sm:px-8 relative">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            {texts.title}
          </h2>
          <p className="mt-3 text-white/80 max-w-2xl mx-auto text-sm md:text-base">
            {texts.subtitle}
          </p>
        </div>

        {/* Step Indicators */}
        {!submitted && (
          <div className="flex items-center justify-center gap-2 mb-8">
            {steps.map((s, idx) => {
              const isActive = s.id === currentStep;
              const isDone = s.id < currentStep;
              return (
                <React.Fragment key={s.id}>
                  <div className="flex flex-col items-center gap-1.5">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-all ${
                        isActive
                          ? 'bg-white border-white text-[#e11a1a]'
                          : isDone
                            ? 'bg-white/20 border-white/40 text-white'
                            : 'bg-white/10 border-white/20 text-white/60'
                      }`}
                    >
                      {isDone ? (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        s.id
                      )}
                    </div>
                    <span className={`text-xs font-medium hidden sm:block ${isActive ? 'text-white' : 'text-white/60'}`}>
                      {s.title}
                    </span>
                  </div>
                  {idx < steps.length - 1 && (
                    <div className={`w-8 sm:w-12 h-0.5 mb-5 sm:mb-0 ${isDone ? 'bg-white/40' : 'bg-white/20'}`} />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        )}

        {/* Quote Form Card */}
        <div className="rounded-3xl shadow-2xl p-6 sm:p-8 bg-white">
          {submitted ? (
            <div className="text-center py-8">
              <div className="mx-auto w-16 h-16 rounded-full bg-[#e11a1a]/10 text-[#e11a1a] flex items-center justify-center">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="mt-5 text-2xl font-bold text-gray-900">{texts.success.title}</h4>
              <p className="mt-3 text-gray-600 max-w-md mx-auto">
                {texts.success.description}
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  type="button"
                  onClick={() => {
                    const mailtoLink = buildMailto();
                    window.open(mailtoLink, '_blank');
                  }}
                  className="inline-flex justify-center rounded-xl px-6 py-3 font-semibold bg-[#e11a1a] text-white hover:bg-red-700 transition-colors"
                >
                  {texts.success.emailBtn}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setCurrentStep(1);
                    setErrors({});
                    setForm(getInitialForm());
                  }}
                  className="rounded-xl px-6 py-3 font-semibold border border-gray-100 bg-white text-gray-900 hover:bg-gray-50 transition-colors"
                >
                  {texts.success.newRequest}
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Step 1: Service Selection */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900">{texts.step1.title}</h3>
                    <p className="text-gray-500 text-sm mt-2">{texts.step1.subtitle}</p>
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    {(['fuel-management', 'transport-transit', 'reseaux-distribution'] as ServiceType[]).map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => update('service', s)}
                        className={`p-5 rounded-2xl border-2 text-left transition-all flex items-center gap-4 ${
                          form.service === s
                            ? 'border-[#e11a1a] bg-[#e11a1a]/5'
                            : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          form.service === s ? 'bg-[#e11a1a] text-white' : 'bg-gray-100 text-gray-600'
                        }`}>
                          {s === 'fuel-management' && (
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                            </svg>
                          )}
                          {s === 'transport-transit' && (
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                            </svg>
                          )}
                          {s === 'reseaux-distribution' && (
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          )}
                        </div>
                        <div className="flex-1">
                          <div className={`font-semibold ${form.service === s ? 'text-[#e11a1a]' : 'text-gray-900'}`}>
                            {texts.step1.services[s].title}
                          </div>
                          <div className="text-sm text-gray-500 mt-0.5">
                            {texts.step1.services[s].description}
                          </div>
                        </div>
                        {form.service === s && (
                          <div className="w-6 h-6 rounded-full bg-[#e11a1a] text-white flex items-center justify-center">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                  {errors.service && <p className="text-sm text-[#e11a1a] text-center">{errors.service}</p>}
                </div>
              )}

              {/* Step 2: Company Information */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900">{texts.step2.title}</h3>
                    <p className="text-gray-500 text-sm mt-2">{texts.step2.subtitle}</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex flex-col gap-1.5">
                      <label className={labelClass}>{texts.step2.companyName.label}</label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={(e) => update('company', e.target.value)}
                        placeholder={texts.step2.companyName.placeholder}
                        className={inputClass('company')}
                      />
                      {errors.company && <span className="text-xs text-[#e11a1a]">{errors.company}</span>}
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className={labelClass}>{texts.step2.sector.label}</label>
                      <input
                        type="text"
                        value={form.sector}
                        onChange={(e) => update('sector', e.target.value)}
                        placeholder={texts.step2.sector.placeholder}
                        className={inputClass('sector')}
                      />
                      {errors.sector && <span className="text-xs text-[#e11a1a]">{errors.sector}</span>}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Service-specific details */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900">{texts.step3.title}</h3>
                    <p className="text-gray-500 text-sm mt-2">
                      {form.service === 'fuel-management' && texts.step3.subtitles.fuel}
                      {form.service === 'transport-transit' && texts.step3.subtitles.transport}
                      {form.service === 'reseaux-distribution' && texts.step3.subtitles.reseaux}
                    </p>
                  </div>

                  {/* Fuel Management */}
                  {form.service === 'fuel-management' && (
                    <div className="space-y-4">
                      <div className="flex flex-col gap-1.5">
                        <label className={labelClass}>{texts.step3.fuelType.label}</label>
                        <select
                          value={form.fuelType}
                          onChange={(e) => update('fuelType', e.target.value)}
                          className={inputClass('fuelType')}
                        >
                          <option value="">{texts.step3.fuelType.placeholder}</option>
                          {texts.fuelTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                        {errors.fuelType && <span className="text-xs text-[#e11a1a]">{errors.fuelType}</span>}
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className={labelClass}>{texts.step3.consumption.label}</label>
                        <input
                          type="text"
                          value={form.monthlyConsumption}
                          onChange={(e) => update('monthlyConsumption', e.target.value)}
                          placeholder={texts.step3.consumption.placeholder}
                          className={inputClass('monthlyConsumption')}
                        />
                        {errors.monthlyConsumption && <span className="text-xs text-[#e11a1a]">{errors.monthlyConsumption}</span>}
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className={labelClass}>{texts.step3.siteLocation.label}</label>
                        <input
                          type="text"
                          value={form.siteLocation}
                          onChange={(e) => update('siteLocation', e.target.value)}
                          placeholder={texts.step3.siteLocation.placeholder}
                          className={inputClass('siteLocation')}
                        />
                        {errors.siteLocation && <span className="text-xs text-[#e11a1a]">{errors.siteLocation}</span>}
                      </div>
                    </div>
                  )}

                  {/* Transport & Transit */}
                  {form.service === 'transport-transit' && (
                    <div className="space-y-4">
                      <div className="flex flex-col gap-1.5">
                        <label className={labelClass}>{texts.step3.productType.label}</label>
                        <input
                          type="text"
                          value={form.productType}
                          onChange={(e) => update('productType', e.target.value)}
                          placeholder={texts.step3.productType.placeholder}
                          className={inputClass('productType')}
                        />
                        {errors.productType && <span className="text-xs text-[#e11a1a]">{errors.productType}</span>}
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className={labelClass}>{texts.step3.pickupAddress.label}</label>
                        <input
                          type="text"
                          value={form.pickupAddress}
                          onChange={(e) => update('pickupAddress', e.target.value)}
                          placeholder={texts.step3.pickupAddress.placeholder}
                          className={inputClass('pickupAddress')}
                        />
                        {errors.pickupAddress && <span className="text-xs text-[#e11a1a]">{errors.pickupAddress}</span>}
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className={labelClass}>{texts.step3.deliveryAddress.label}</label>
                        <input
                          type="text"
                          value={form.deliveryAddress}
                          onChange={(e) => update('deliveryAddress', e.target.value)}
                          placeholder={texts.step3.deliveryAddress.placeholder}
                          className={inputClass('deliveryAddress')}
                        />
                        {errors.deliveryAddress && <span className="text-xs text-[#e11a1a]">{errors.deliveryAddress}</span>}
                      </div>
                    </div>
                  )}

                  {/* Réseaux de Distribution */}
                  {form.service === 'reseaux-distribution' && (
                    <div className="space-y-4">
                      <div className="flex flex-col gap-1.5">
                        <label className={labelClass}>{texts.step3.fuelType.label}</label>
                        <select
                          value={form.fuelType}
                          onChange={(e) => update('fuelType', e.target.value)}
                          className={inputClass('fuelType')}
                        >
                          <option value="">{texts.step3.fuelType.placeholder}</option>
                          {texts.fuelTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                        {errors.fuelType && <span className="text-xs text-[#e11a1a]">{errors.fuelType}</span>}
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className={labelClass}>{texts.step3.consumption.label}</label>
                        <input
                          type="text"
                          value={form.monthlyConsumption}
                          onChange={(e) => update('monthlyConsumption', e.target.value)}
                          placeholder={texts.step3.consumption.placeholder}
                          className={inputClass('monthlyConsumption')}
                        />
                        {errors.monthlyConsumption && <span className="text-xs text-[#e11a1a]">{errors.monthlyConsumption}</span>}
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className={labelClass}>{texts.step3.deliveryAddress.label}</label>
                        <input
                          type="text"
                          value={form.deliveryAddress}
                          onChange={(e) => update('deliveryAddress', e.target.value)}
                          placeholder={texts.step3.deliveryAddress.placeholder}
                          className={inputClass('deliveryAddress')}
                        />
                        {errors.deliveryAddress && <span className="text-xs text-[#e11a1a]">{errors.deliveryAddress}</span>}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Step 4: Contact Information */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900">{texts.step4.title}</h3>
                    <p className="text-gray-500 text-sm mt-2">{texts.step4.subtitle}</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex flex-col gap-1.5">
                      <label className={labelClass}>{texts.step4.email.label}</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => update('email', e.target.value)}
                        placeholder={texts.step4.email.placeholder}
                        className={inputClass('email')}
                      />
                      {errors.email && <span className="text-xs text-[#e11a1a]">{errors.email}</span>}
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className={labelClass}>{texts.step4.phone.label}</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => update('phone', e.target.value)}
                        placeholder={texts.step4.phone.placeholder}
                        className={inputClass('phone')}
                      />
                      {errors.phone && <span className="text-xs text-[#e11a1a]">{errors.phone}</span>}
                    </div>
                  </div>

                  {/* Récapitulatif */}
                  <div className="rounded-xl bg-gray-50 border border-gray-200 p-4 mt-6">
                    <h4 className="font-semibold text-gray-900 mb-3">{texts.step4.summary.title}</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">{texts.step4.summary.service}</span>
                        <span className="font-medium text-gray-900">{getServiceLabel(form.service)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">{texts.step4.summary.company}</span>
                        <span className="font-medium text-gray-900">{form.company}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">{texts.step4.summary.sector}</span>
                        <span className="font-medium text-gray-900">{form.sector}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {submitError && (
                <div className="mt-4 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
                  {submitError}
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="mt-8 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={goPrev}
                  disabled={currentStep === 1}
                  className={`rounded-xl px-5 py-3 font-semibold border transition-colors ${
                    currentStep === 1
                      ? 'opacity-0 pointer-events-none'
                      : 'border-gray-200 bg-white hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  {texts.buttons.prev}
                </button>

                {currentStep < totalSteps ? (
                  <button
                    type="button"
                    onClick={goNext}
                    className="rounded-xl px-6 py-3 font-semibold bg-[#e11a1a] text-white hover:bg-red-700 transition-colors"
                  >
                    {texts.buttons.next}
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={submit}
                    disabled={isSubmitting}
                    className={`rounded-xl px-6 py-3 font-semibold bg-[#e11a1a] text-white hover:bg-red-700 transition-colors ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? texts.buttons.sending : texts.buttons.submit}
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default QuoteCalculatorSection;
