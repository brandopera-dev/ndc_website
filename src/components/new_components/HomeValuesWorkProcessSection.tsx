import React from 'react';
import { ArrowRight, HeartHandshake, Leaf, Lightbulb, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HomeValuesWorkProcessSection = () => {
  const values = [
    {
      title: 'Fiabilité',
      description: "Nous assurons chaque livraison avec des standards élevés, du départ à l'arrivée.",
      icon: ShieldCheck,
    },
    {
      title: 'Innovation',
      description: 'Nous adoptons les meilleures technologies pour une logistique plus fluide et connectée.',
      icon: Lightbulb,
    },
    {
      title: 'Centré client',
      description: 'Vos besoins sont notre priorité — à chaque kilomètre du parcours.',
      icon: HeartHandshake,
    },
    {
      title: 'Durabilité',
      description: "Nous nous engageons dans des pratiques responsables à chaque étape de nos services.",
      icon: Leaf,
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Consultation',
      description: "Nous analysons vos besoins logistiques pour définir le périmètre, les contraintes et les objectifs.",
    },
    {
      number: '02',
      title: 'Planification stratégique',
      description: "Nous concevons un plan optimisé pour garantir l'efficacité et la maîtrise des coûts.",
      featured: true,
    },
    {
      number: '03',
      title: 'Exécution efficace',
      description: "Notre équipe coordonne chaque étape pour assurer une livraison sûre, suivie et ponctuelle.",
    },
  ];

  return (
    <section id="valeurs" className="bg-white">
       {/*<div className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#e11a1a] uppercase">
              Valeurs
              <span className="ml-2 inline-block w-10 h-[2px] bg-[#e11a1a] align-middle"></span>
            </div>
            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Bâtis sur la Confiance
              <br />
              et l'Excellence
            </h2>
            <p className="mt-5 text-sm md:text-base text-gray-500 max-w-xl leading-relaxed">
              Nous développons des relations solides grâce à nos valeurs : intégrité, qualité de service et responsabilité.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-[#e11a1a]/10 flex items-center justify-center text-[#e11a1a]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="mt-4 font-bold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div> */}

      <div id="banniere" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/truck-is-black-man-is-standing-road.jpg"
            alt="Route logistique"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/75 to-[#0a1628]/60" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 py-16 sm:py-20 text-white">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight max-w-3xl">
           Une logistique pensée
            <br />
            pour la croissance
          </h2>
          <p className="mt-5 sm:mt-6 text-white/70 max-w-2xl leading-relaxed text-sm sm:text-base">
            Grâce à des solutions innovantes et une expertise terrain, nous améliorons l'efficacité, réduisons les coûts et assurons une visibilité complète.
          </p>
          <div className="mt-8">
            <a href="#how-we-work">
              <Button className="bg-white text-[#0a1628] hover:bg-white/90 rounded-full px-6 py-5 sm:px-8 sm:py-6 font-semibold inline-flex items-center gap-2">
                En savoir plus
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* <div id="how-we-work" className="bg-[#0a1628] text-white">
        <div className="max-w-7xl mx-auto px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#e11a1a] uppercase">
                Processus
                <span className="ml-2 inline-block w-10 h-[2px] bg-[#e11a1a] align-middle"></span>
              </div>
              <h2 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">
                Comment nous travaillons
              </h2>
              <p className="mt-5 text-sm md:text-base text-white/60 max-w-xl leading-relaxed">
                Notre approche est simple : comprendre vos besoins, planifier avec précision et exécuter avec excellence.
              </p>
              <div className="mt-8">
                <a href="#services">
                  <Button className="bg-[#e11a1a] hover:bg-red-700 text-white rounded-full px-8 py-6 font-semibold inline-flex items-center gap-2">
                    Découvrir nos services
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </a>
                <a href="#process" className="inline-block mt-4">
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full px-8 py-6 font-semibold inline-flex items-center gap-2">
                    Voir notre processus
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </a>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className={`rounded-3xl p-6 border border-white/10 ${
                    step.featured ? 'bg-white text-[#0a1628] border-white/0 shadow-2xl' : 'bg-[#081c36]'
                  }`}
                >
                  <div
                    className={`text-5xl font-extrabold ${step.featured ? 'text-[#0a1628]/20' : 'text-white/15'}`}
                  >
                    {step.number}
                  </div>
                  <h3 className={`mt-2 text-lg font-bold ${step.featured ? 'text-[#0a1628]' : 'text-white'}`}>
                    {step.title}
                  </h3>
                  <p className={`mt-3 text-sm leading-relaxed ${step.featured ? 'text-[#0a1628]/70' : 'text-white/60'}`}>
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default HomeValuesWorkProcessSection;
