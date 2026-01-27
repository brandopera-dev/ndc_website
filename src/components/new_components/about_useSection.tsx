import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Ship, Plane, Shield, Clock, TrendingUp, Users, Droplet, Truck } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import { fadeInUp, staggerContainer, staggerItem } from '@/utils/animations';

const AboutUseSection = () => {
  const features = [
    { icon: Shield, title: "Sûr & sécurisé", description: "Votre marchandise est protégée grâce à une couverture et des procédures adaptées." },
    { icon: Clock, title: "Livraison ponctuelle", description: "Nous garantissons des délais maîtrisés avec un suivi en temps réel." },
    { icon: TrendingUp, title: "Rentable", description: "Des tarifs compétitifs sans compromis sur la qualité de service." },
    { icon: Users, title: "Équipe experte", description: "Des professionnels expérimentés, dédiés à votre réussite." },
  ];

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
              À PROPOS
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={staggerItem}>
              <SectionTitle
                kicker="Comment ça marche"
                title={
                  <>
                    Solutions NDC Énergie
                    <br />
                    100% Fiables
                  </>
                }
                description={
                  <>
                    Partenaire de confiance pour vos opérations minières et industrielles en Afrique.
                    Expertise complète en Fuel Management, Transport et Transit avec une disponibilité 24/7.
                  </>
                }
              />

              <motion.div 
                className="mt-8 grid sm:grid-cols-2 gap-6"
                variants={staggerContainer}
              >
                <motion.div className="flex items-center gap-4" variants={staggerItem}>
                  <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-[#e11a1a]">
                    <Droplet className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Stockage & Fuel Management</p>
                    <p className="text-xs text-gray-500">4 niveaux de service</p>
                  </div>
                </motion.div>

                <motion.div className="flex items-center gap-4" variants={staggerItem}>
                  <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-[#e11a1a]">
                    <Truck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Transit & Transport</p>
                    <p className="text-xs text-gray-500">Support complet 24/7</p>
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
                        <div className="w-11 h-11 rounded-2xl bg-[#e11a1a]/10 flex items-center justify-center text-[#e11a1a]">
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

              <p className="mt-6 text-sm md:text-base text-gray-500 leading-relaxed max-w-xl">
                De la conception de cuves au transport de matières premières, nous assurons la continuité
                de vos opérations avec expertise et conformité aux normes internationales.
              </p>

              <motion.div 
                className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6"
                variants={fadeInUp}
              >
                <motion.button 
                  className="ndc-btn-gradient px-8 py-4 rounded-xl font-semibold text-sm"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  EN SAVOIR PLUS
                </motion.button>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-700">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Appelez-nous 24/7</p>
                    <p className="font-extrabold text-gray-900">+236-3256.21456</p>
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
                  className="rounded-sm overflow-hidden h-[200px] sm:h-[260px] cursor-pointer"
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
                  className="relative rounded-sm overflow-hidden h-[200px] sm:h-[240px] bg-gray-900 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <img
                    src="/images/high-angle-view-industry-factory.jpg"
                    alt="Projets réalisés"
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                  />

                  <div className="absolute inset-0 flex items-end p-6">
                    <div className="text-white">
                      <p className="text-sm font-extrabold leading-none">50+</p>
                      <p className="text-sm font-semibold">Projets</p>
                      <p className="text-sm font-semibold">Réussis</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div className="space-y-6" variants={staggerItem}>
                <motion.div 
                  className="rounded-sm bg-[#e11a1a] text-white p-8 h-[200px] sm:h-[260px] flex items-center justify-center cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <p className="text-2xl font-extrabold leading-snug text-center">
                    15+ Années
                    <br />
                    d'Expérience
                    <br />
                    Terrain
                  </p>
                </motion.div>

                <motion.div 
                  className="rounded-sm overflow-hidden h-[200px] sm:h-[240px] cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <img
                    src="/images/large-truck-carrying-sand-platinum-mining-site-africa.jpg"
                    alt="Transport Minier"
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