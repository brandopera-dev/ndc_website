import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Ship, Plane, Shield, Clock, TrendingUp, Users, Droplet, Truck } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import { fadeInUp, staggerContainer, staggerItem } from '@/utils/animations';
import { useI18n } from '@/i18n/I18nProvider';

const AboutUseSection = () => {
  const { language } = useI18n();

  const features = language === "fr" ? [
    { icon: Shield, title: "Sûr & sécurisé", description: "Votre marchandise est protégée grâce à une couverture et des procédures adaptées." },
    { icon: Clock, title: "Livraison ponctuelle", description: "Nous garantissons des délais maîtrisés avec un suivi en temps réel." },
    { icon: TrendingUp, title: "Rentable", description: "Des tarifs compétitifs sans compromis sur la qualité de service." },
    { icon: Users, title: "Équipe experte", description: "Des professionnels expérimentés, dédiés à votre réussite." },
  ] : [
    { icon: Shield, title: "Safe & secure", description: "Your goods are protected through adapted coverage and procedures." },
    { icon: Clock, title: "On-time delivery", description: "We guarantee controlled deadlines with real-time tracking." },
    { icon: TrendingUp, title: "Cost-effective", description: "Competitive rates without compromising service quality." },
    { icon: Users, title: "Expert team", description: "Experienced professionals, dedicated to your success." },
  ];

  const texts = {
    verticalLabel: language === "fr" ? "À PROPOS" : "ABOUT",
    kicker: language === "fr" ? "Comment ça marche" : "How it works",
    title1: language === "fr" ? "Solutions NDC Énergie" : "NDC Energy Solutions",
    title2: language === "fr" ? "100% Fiables" : "100% Reliable",
    description: language === "fr" 
      ? "Partenaire de confiance pour vos opérations minières et industrielles en Afrique. Expertise complète en Fuel Management, Transport et Transit avec une disponibilité 24/7."
      : "Trusted partner for your mining and industrial operations in Africa. Complete expertise in Fuel Management, Transport and Transit with 24/7 availability.",
    fuelManagement: {
      title: language === "fr" ? "Stockage & Fuel Management" : "Storage & Fuel Management",
      subtitle: language === "fr" ? "4 niveaux de service" : "4 service levels",
    },
    transport: {
      title: language === "fr" ? "Transit & Transport" : "Transit & Transport",
      subtitle: language === "fr" ? "Support complet 24/7" : "Complete 24/7 support",
    },
    learnMore: language === "fr" ? "EN SAVOIR PLUS" : "LEARN MORE",
    callUs: language === "fr" ? "Appelez-nous 24/7" : "Call us 24/7",
    projects: {
      value: "50+",
      label1: language === "fr" ? "Projets" : "Projects",
      label2: language === "fr" ? "Réussis" : "Completed",
    },
    experience: {
      value: language === "fr" ? "18+ Années" : "18+ Years",
      label1: language === "fr" ? "d'Expérience" : "of Experience",
      label2: language === "fr" ? "Terrain" : "in the Field",
    },
  };

  return (
    <>
      <motion.section 
        id="about" 
        className="py-14 sm:py-20 lg:py-28 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative">
          <div className="hidden lg:block absolute -left-1 top-20">
            <div className="ndc-vertical-label text-[#e11a1a] text-sm">
              {texts.verticalLabel}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={staggerItem}>
              <SectionTitle
                kicker={texts.kicker}
                title={
                  <>
                    {texts.title1}
                    <br />
                    {texts.title2}
                  </>
                }
                description={<>{texts.description}</>}
              />

              <motion.div 
                className="mt-8 grid sm:grid-cols-2 gap-6"
                variants={staggerContainer}
              >
                <motion.div className="flex items-center gap-4" variants={staggerItem}>
                  <div className="w-12 h-12 rounded-full bg-[#1f1f1f]/10 flex items-center justify-center text-[#e11a1a]">
                    <Droplet className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{texts.fuelManagement.title}</p>
                    <p className="text-xs text-gray-500">{texts.fuelManagement.subtitle}</p>
                  </div>
                </motion.div>

                <motion.div className="flex items-center gap-4" variants={staggerItem}>
                  <div className="w-12 h-12 rounded-full bg-[#1f1f1f]/10 flex items-center justify-center text-[#e11a1a]">
                    <Truck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{texts.transport.title}</p>
                    <p className="text-xs text-gray-500">{texts.transport.subtitle}</p>
                  </div>
                </motion.div>
              </motion.div>

              <div className="mt-8 h-px bg-gray-200"></div>

              <motion.div 
                className="mt-8 grid sm:grid-cols-2 gap-4"
                variants={staggerContainer}
              >
                {features.map((f, index) => {
                  const Icon = f.icon;
                  return (
                    <motion.div 
                      key={f.title} 
                      className="rounded-2xl bg-white border border-gray-200 p-5 cursor-pointer"
                      variants={staggerItem}
                      whileHover={{ y: -4, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-11 h-11 flex items-center justify-center text-[#e11a1a]">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 leading-tight">{f.title}</p>
                          <p className="text-xs text-gray-500 leading-relaxed mt-1">{f.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>

              <motion.div 
                className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6"
                variants={fadeInUp}
              >
                <motion.button 
                  className="bg-[#e11a1a] hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold text-sm"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  {texts.learnMore}
                </motion.button>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-700">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">{texts.callUs}</p>
                    <p className="font-extrabold text-gray-900">+223 91 88 38 67</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              variants={staggerContainer}
            >
              <motion.div className="space-y-6" variants={staggerItem}>
                <motion.div 
                  className="overflow-hidden h-[200px] sm:h-[260px] cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <img
                    src="/images/man-portrait-outdoor-factory-with-confidence-logistics-gear-safety-smile-health-male-driver-happy-outside-warehouse-with-semi-truck-supply-chain-job-with-transport.jpg"
                    alt="Expert Logistique"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                <motion.div 
                  className="relative overflow-hidden h-[200px] sm:h-[240px] bg-gray-900 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <img
                    src="/images/images_ndc/FUEL/3F.jpg"
                    alt="Projets réalisés"
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                  />

                  <div className="absolute inset-0 flex items-end p-6">
                    <div className="text-white">
                      <p className="text-sm font-extrabold leading-none">{texts.projects.value}</p>
                      <p className="text-sm font-semibold">{texts.projects.label1}</p>
                      <p className="text-sm font-semibold">{texts.projects.label2}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div className="space-y-6" variants={staggerItem}>
                <motion.div 
                  className="bg-[#e11a1a] text-white p-8 h-[200px] sm:h-[260px] flex items-center justify-center cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <p className="text-2xl font-extrabold leading-snug text-center">
                    {texts.experience.value}
                    <br />
                    {texts.experience.label1}
                    <br />
                    {texts.experience.label2}
                  </p>
                </motion.div>

                <motion.div 
                  className="overflow-hidden h-[200px] sm:h-[240px] cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <img
                    src="/images/images_ndc/TRANSPORT/TR -6.png"
                    alt="Transport NDC"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default AboutUseSection;
