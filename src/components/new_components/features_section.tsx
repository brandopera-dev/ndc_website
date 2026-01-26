import { TrendingDown, TrendingUp } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';

const FeaturesSection = () => {
  const benefits = [
    {
      icon: TrendingDown,
      title: "Moins d’interruptions",
      description: "Diminution des arrêts de production liés à des ruptures de fuel ou des retards logistiques.",
      tone: "minus",
    },
    {
      icon: TrendingDown,
      title: "Moins de complexité",
      description: "Un seul partenaire pour gérer des enjeux critiques (énergie, transport, transit).",
      tone: "minus",
    },
    // {
    //   icon: TrendingDown,
    //   title: "Moins de délais cachés",
    //   description: "Dossiers de transit maîtrisés, flux de matériaux plus prévisibles.",
    //   tone: "minus",
    // },
    {
      icon: TrendingUp,
      title: "Plus de visibilité",
      description: "Meilleure connaissance des consommations, des coûts, des délais.",
      tone: "plus",
    },
    // {
    //   icon: TrendingUp,
    //   title: "Plus de conformité",
    //   description: "Moins de risque réputationnel et réglementaire.",
    //   tone: "plus",
    // },
    {
      icon: TrendingUp,
      title: "Plus de performance",
      description: "Une chaîne d’approvisionnement alignée sur les objectifs d’exploitation du client.",
      tone: "plus",
    },
  ];
  
  const minusBenefits = benefits.filter((b) => b.tone === "minus");
  const plusBenefits = benefits.filter((b) => b.tone === "plus");

  return (
      <section className="py-14 sm:py-20 ndc-section-red  overflow-hidden scroll-animate">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="hidden lg:block absolute -left-1 top-24">
            <div className="ndc-vertical-label text-white/80 text-sm">VALEUR</div>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 scroll-animate">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-black/20 hover:scale-105 transition-transform cursor-pointer">
                <img
                  src="/images/NDC--de-KATI178-sm.jpg"
                  alt="Valeur NDC Énergie"
                  className="w-full h-[340px] sm:h-[420px] lg:h-[520px] object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(248,142,0,0.25),transparent_55%)]" />

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur px-5 py-4">
                    <p className="text-white text-sm font-semibold">Priorité: continuité des opérations</p>
                    <p className="text-white/70 text-sm mt-1 leading-relaxed">
                      Réduction du risque opérationnel et pilotage de la performance sur les sites.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 scroll-animate">
              <SectionTitle
                kicker="Ce que nous pouvons vous apporter"
                variant="dark"
                title={<>NDC plus qu'un simple prestataire</>}
                description={
                  <>
                    Elles recherchent des moyens de réduire leur risque opérationnel et d’augmenter leur performance.
                    <br />
                    Choisissez NDC Énergie et optez pour :
                  </>
                }
              />

              <div className="mt-10 grid md:grid-cols-2 gap-6 scroll-animate">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <p className="text-xs font-semibold tracking-widest uppercase text-white/80">Réduction des risques</p>
                  <div className="mt-5 space-y-5">
                    {minusBenefits.map((b) => (
                      <div key={b.title} className="flex items-start gap-4">
                        <b.icon className="w-5 h-5 mt-0.5 flex-none text-[var(--ndc-red)]" />
                        <div>
                          <p className="font-bold text-white leading-tight">{b.title}</p>
                          <p className="mt-1 text-sm text-white/70 leading-relaxed">{b.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <p className="text-xs font-semibold tracking-widest uppercase text-white/80">Gain de performance</p>
                  <div className="mt-5 space-y-5">
                    {plusBenefits.map((b) => (
                      <div key={b.title} className="flex items-start gap-4">
                        <b.icon className="w-5 h-5 mt-0.5 flex-none text-[var(--ndc-orange)]" />
                        <div>
                          <p className="font-bold text-white leading-tight">{b.title}</p>
                          <p className="mt-1 text-sm text-white/70 leading-relaxed">{b.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      );
};

export default FeaturesSection;