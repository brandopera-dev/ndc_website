import React, { useState } from 'react';

const QuoteCalculatorSection = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const getInitialForm = () => ({
    service: '',
    pickup: '',
    delivery: '',
    date: '',
    volume: '',
    volumeUnit: 'L',
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    notes: '',
  });

  const [form, setForm] = useState(getInitialForm);

  const totalSteps = 2;

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
      if (!form.service) nextErrors.service = 'Champ requis';
      if (!form.pickup.trim()) nextErrors.pickup = 'Champ requis';
      if (!form.delivery.trim()) nextErrors.delivery = 'Champ requis';
      if (!form.date.trim()) nextErrors.date = 'Champ requis';
    }

    if (step === 2) {
      if (!form.firstName.trim()) nextErrors.firstName = 'Champ requis';
      if (!form.lastName.trim()) nextErrors.lastName = 'Champ requis';
      if (!form.email.trim()) nextErrors.email = 'Champ requis';
      if (!form.phone.trim()) nextErrors.phone = 'Champ requis';
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

  const buildMailto = () => {
    const subject = encodeURIComponent('Demande de devis – NDC Énergie');
    const body = encodeURIComponent(
      [
        `Nom: ${form.firstName} ${form.lastName}`,
        `Société: ${form.company || '-'}`,
        `Email: ${form.email}`,
        `Téléphone: ${form.phone}`,
        `Service: ${form.service}`,
        `Chargement: ${form.pickup}`,
        `Livraison: ${form.delivery}`,
        `Date souhaitée: ${form.date}`,
        `Volume estimé: ${form.volume || '-'} ${form.volume ? form.volumeUnit : ''}`,
        `Notes: ${form.notes || '-'}`,
      ].join('\n')
    );
    return `mailto:contact@ndc-logistics.com?subject=${subject}&body=${body}`;
  };

  const submit = async () => {
    const ok = validateStep(1) && validateStep(2);
    if (!ok) return;

    setIsSubmitting(true);
    try {
      await new Promise((r) => setTimeout(r, 800));
      setSubmitted(true);
      setCurrentStep(2);
    } finally {
      setIsSubmitting(false);
    }
  };

  const steps = [
    { id: 1, title: 'Demande' },
    { id: 2, title: 'Coordonnées' },
  ];

  return (
    <section id="devis" className="py-14 lg:py-16 ndc-section-red ndc-plaquette-bg-white scroll-animate">
      <div className="max-w-5xl mx-auto px-8 relative">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Demandez un devis
            <br />
            logistique (Mines & Carburant)
          </h2>
          <p className="mt-3 ndc-section-muted max-w-3xl mx-auto text-sm md:text-base">
            Un parcours simple pour qualifier votre besoin. Réponse rapide avec une proposition adaptée à votre contexte opérationnel.
          </p>
        </div>

        {/* Step Indicators */}
        <div className="flex items-center justify-center gap-2 md:gap-4 mb-8">
          {steps.map((s, idx) => {
            const isActive = s.id === currentStep;
            const isDone = s.id < currentStep;
            return (
              <React.Fragment key={s.id}>
                <div className={`flex items-center gap-2 rounded-full px-4 py-2.5 border ${isActive ? 'bg-white border-white' : isDone ? 'bg-white/15 border-white/30' : 'bg-white/10 border-white/20'}`}>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center font-semibold text-xs ${isActive ? 'bg-[#e11a1a] text-white' : isDone ? 'bg-white text-[#e11a1a]' : 'bg-white/20 text-white'}`}>
                    {s.id}
                  </div>
                  <span className={`font-semibold text-sm ${isActive ? 'text-[#e11a1a]' : 'text-white/80'} hidden sm:inline`}>{s.title}</span>
                </div>
                {idx < steps.length - 1 && (
                  <div className="hidden md:flex items-center gap-1">
                    {[...Array(8)].map((_, i) => (
                      <div key={i} className="w-1.5 h-0.5 bg-white/25 rounded-full"></div>
                    ))}
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Quote Form Card */}
        <div className="rounded-3xl shadow-2xl p-5 lg:p-6 ndc-card-white">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
            <h3 className="text-lg font-bold text-gray-900">
              Demande de devis
            </h3>
            
            {/* Mini Step Indicators */}
            <div className="flex items-center gap-1">
              {steps.map((s, idx) => (
                <React.Fragment key={s.id}>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center font-semibold text-xs border ${
                      s.id === currentStep
                        ? 'bg-[#e11a1a] text-white border-[#e11a1a]'
                        : s.id < currentStep
                          ? 'bg-white text-[#e11a1a] border-[#e11a1a]/30'
                          : 'bg-gray-100 text-gray-400 border-gray-200'
                    }`}
                  >
                    {s.id}
                  </div>
                  {idx < steps.length - 1 && <div className="w-6 h-0.5 bg-gray-200" />}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* {!submitted && (
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4 mb-5">
              <p className="text-sm text-gray-700">
                Champs requis : <span className="font-semibold">Service</span>, <span className="font-semibold">Chargement</span>, <span className="font-semibold">Livraison</span>, <span className="font-semibold">Date</span>, <span className="font-semibold">Nom</span>, <span className="font-semibold">Email</span>, <span className="font-semibold">Téléphone</span>.
              </p>
            </div>
          )} */}

          {submitted ? (
            <div className="text-center py-10">
              <div className="mx-auto w-12 h-12 rounded-2xl bg-[#e11a1a]/10 text-[#e11a1a] flex items-center justify-center font-extrabold">
                OK
              </div>
              <h4 className="mt-5 text-2xl font-bold text-gray-900">Demande envoyée</h4>
              <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
                Merci. Notre équipe vous recontacte rapidement avec une proposition adaptée. Vous pouvez aussi envoyer le récapitulatif par email.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <a href={buildMailto()} className="inline-flex justify-center rounded-xl px-6 py-3 font-semibold ndc-btn-red">
                  Envoyer par email
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setCurrentStep(1);
                    setErrors({});
                    setForm(getInitialForm());
                  }}
                  className="rounded-xl px-6 py-3 font-semibold border border-gray-200 bg-white hover:bg-gray-50"
                >
                  Nouvelle demande
                </button>
              </div>
            </div>
          ) : (
            <>
              {currentStep === 1 && (
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
                  <div className="flex flex-col gap-1.5 md:col-span-2">
                    <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                      Service *
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) => update('service', e.target.value)}
                      className={`w-full bg-gray-50 border rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-[#e11a1a]/15 focus:border-[#e11a1a]/30 focus:outline-none transition-all text-sm ${
                        errors.service ? 'border-[#e11a1a]' : 'border-gray-200'
                      }`}
                    >
                      <option value="">Sélectionnez un service</option>
                      <option value="Fuel management & infrastructures">Fuel management & infrastructures</option>
                      <option value="Réseaux de distribution">Réseaux de distribution</option>
                      <option value="Transport & transit">Transport & transit</option>
                    </select>
                    {errors.service && <span className="text-xs text-[#e11a1a]">{errors.service}</span>}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                      Chargement *
                    </label>
                    <input
                      type="text"
                      value={form.pickup}
                      onChange={(e) => update('pickup', e.target.value)}
                      placeholder="Ville / mine"
                      className={`w-full bg-gray-50 border rounded-lg px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-[#e11a1a]/15 focus:border-[#e11a1a]/30 focus:outline-none transition-all text-sm ${
                        errors.pickup ? 'border-[#e11a1a]' : 'border-gray-200'
                      }`}
                    />
                    {errors.pickup && <span className="text-xs text-[#e11a1a]">{errors.pickup}</span>}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                      Livraison *
                    </label>
                    <input
                      type="text"
                      value={form.delivery}
                      onChange={(e) => update('delivery', e.target.value)}
                      placeholder="Station / dépôt"
                      className={`w-full bg-gray-50 border rounded-lg px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-[#e11a1a]/15 focus:border-[#e11a1a]/30 focus:outline-none transition-all text-sm ${
                        errors.delivery ? 'border-[#e11a1a]' : 'border-gray-200'
                      }`}
                    />
                    {errors.delivery && <span className="text-xs text-[#e11a1a]">{errors.delivery}</span>}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                      Date *
                    </label>
                    <input
                      type="date"
                      value={form.date}
                      onChange={(e) => update('date', e.target.value)}
                      className={`w-full bg-gray-50 border rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-[#e11a1a]/15 focus:border-[#e11a1a]/30 focus:outline-none transition-all text-sm ${
                        errors.date ? 'border-[#e11a1a]' : 'border-gray-200'
                      }`}
                    />
                    {errors.date && <span className="text-xs text-[#e11a1a]">{errors.date}</span>}
                  </div>

                  <div className="flex flex-col gap-1.5 md:col-span-5">
                    <div className="grid grid-cols-3 gap-2">
                      <input
                        type="text"
                        value={form.volume}
                        onChange={(e) => update('volume', e.target.value)}
                        placeholder="Volume estimé (optionnel)"
                        className="col-span-2 w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-[#e11a1a]/15 focus:border-[#e11a1a]/30 focus:outline-none transition-all text-sm"
                      />
                      <select
                        value={form.volumeUnit}
                        onChange={(e) => update('volumeUnit', e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-3 text-gray-900 focus:ring-2 focus:ring-[#e11a1a]/15 focus:border-[#e11a1a]/30 focus:outline-none transition-all text-sm"
                      >
                        <option value="L">L</option>
                        <option value="m³">m³</option>
                        <option value="T">T</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-semibold text-gray-900">Prénom *</label>
                    <input
                      type="text"
                      value={form.firstName}
                      onChange={(e) => update('firstName', e.target.value)}
                      placeholder="Votre prénom"
                      className={`w-full bg-white border rounded-xl px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-[#e11a1a]/15 focus:border-[#e11a1a]/40 focus:outline-none transition-all text-sm ${
                        errors.firstName ? 'border-[#e11a1a]' : 'border-gray-200'
                      }`}
                    />
                    {errors.firstName && <span className="text-xs text-[#e11a1a]">{errors.firstName}</span>}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-semibold text-gray-900">Nom *</label>
                    <input
                      type="text"
                      value={form.lastName}
                      onChange={(e) => update('lastName', e.target.value)}
                      placeholder="Votre nom"
                      className={`w-full bg-white border rounded-xl px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-[#e11a1a]/15 focus:border-[#e11a1a]/40 focus:outline-none transition-all text-sm ${
                        errors.lastName ? 'border-[#e11a1a]' : 'border-gray-200'
                      }`}
                    />
                    {errors.lastName && <span className="text-xs text-[#e11a1a]">{errors.lastName}</span>}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-semibold text-gray-900">Email *</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                      placeholder="votre@email.com"
                      className={`w-full bg-white border rounded-xl px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-[#e11a1a]/15 focus:border-[#e11a1a]/40 focus:outline-none transition-all text-sm ${
                        errors.email ? 'border-[#e11a1a]' : 'border-gray-200'
                      }`}
                    />
                    {errors.email && <span className="text-xs text-[#e11a1a]">{errors.email}</span>}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-semibold text-gray-900">Téléphone *</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      placeholder="+225 ..."
                      className={`w-full bg-white border rounded-xl px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-[#e11a1a]/15 focus:border-[#e11a1a]/40 focus:outline-none transition-all text-sm ${
                        errors.phone ? 'border-[#e11a1a]' : 'border-gray-200'
                      }`}
                    />
                    {errors.phone && <span className="text-xs text-[#e11a1a]">{errors.phone}</span>}
                  </div>

                  <div className="flex flex-col gap-1.5 md:col-span-2">
                    <label className="text-sm font-semibold text-gray-900">Société</label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => update('company', e.target.value)}
                      placeholder="Nom de votre entreprise"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-[#e11a1a]/15 focus:border-[#e11a1a]/40 focus:outline-none transition-all text-sm"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5 md:col-span-2">
                    <label className="text-sm font-semibold text-gray-900">Message</label>
                    <textarea
                      value={form.notes}
                      onChange={(e) => update('notes', e.target.value)}
                      placeholder="Contexte / contraintes / informations utiles..."
                      className="w-full min-h-[100px] bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-[#e11a1a]/15 focus:border-[#e11a1a]/40 focus:outline-none transition-all text-sm"
                    />
                  </div>
                </div>
              )}

              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={goPrev}
                  disabled={currentStep === 1}
                  className={`rounded-xl px-6 py-3 font-semibold border ${
                    currentStep === 1 ? 'opacity-50 cursor-not-allowed border-gray-200 bg-gray-50 text-gray-400' : 'border-gray-200 bg-white hover:bg-gray-50'
                  }`}
                >
                  Précédent
                </button>

                {currentStep < totalSteps ? (
                  <button type="button" onClick={goNext} className="rounded-xl px-6 py-3 font-semibold ndc-btn-red">
                    Continuer
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={submit}
                    disabled={isSubmitting}
                    className={`rounded-xl px-6 py-3 font-semibold ${isSubmitting ? 'opacity-70' : ''} ndc-btn-red`}
                  >
                    {isSubmitting ? 'Envoi...' : 'Envoyer'}
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
