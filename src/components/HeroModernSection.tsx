import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Clock, Award } from 'lucide-react';
import { heroVariants, fadeInUp, scaleIn } from '@/utils/animations';
import { useI18n } from '@/i18n/I18nProvider';

export const HeroModernSection = () => {
  const { t } = useI18n();

  const stats = [
    { icon: <Shield className="w-6 h-6" />, value: '15+', label: 'Ans d\'expérience' },
    { icon: <Clock className="w-6 h-6" />, value: '24/7', label: 'Support opérationnel' },
    { icon: <Award className="w-6 h-6" />, value: '100%', label: 'Conformité garantie' }
  ];

  return (
    <section id="home" className="relative min-h-[80vh] sm:min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
      >
        <img
          src="/images/images_ndc/FUEL/1F.webp"
          alt="Industries et mines"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50"></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 pt-28 sm:pt-36 lg:pt-40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="text-white"
            variants={heroVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-5 sm:mb-6"
              variants={fadeInUp}
            >
              {t("heroModern.title1")} 
              <br />
              <span className="text-[#e11a1a]">{t("heroModern.title2")}</span>
            </motion.h1>

            <motion.p 
              className="text-base sm:text-xl text-gray-300 leading-relaxed mb-7 sm:mb-8 max-w-xl"
              variants={fadeInUp}
            >
              {t("heroModern.description")}
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-12"
              variants={fadeInUp}
            >
              <motion.a
                href="#services"
                className="group bg-[#e11a1a] hover:bg-red-700 text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all inline-flex items-center justify-center gap-2 shadow-2xl shadow-red-500/30"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(225, 26, 26, 0.5)" }}
                whileTap={{ scale: 0.98 }}
              >
                {t("heroModern.servicesBtn")}
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="#devis"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg transition-all inline-flex items-center justify-center"
                whileHover={{ scale: 1.05, borderColor: "rgba(255, 255, 255, 0.5)" }}
                whileTap={{ scale: 0.98 }}
              >
                {t("heroModern.quoteBtn")}
              </motion.a>
            </motion.div>
          </motion.div>

          <div className="hidden lg:block">
            <div className="relative">
              {/* Floating Card 1 */}
              <motion.div 
                className="absolute -top-8 right-0 bg-white rounded-2xl p-6 shadow-2xl max-w-[280px] cursor-pointer"
                initial={{ opacity: 0, y: 30, x: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: [0, -10, 0],
                  x: 0,
                }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ 
                  opacity: { delay: 0.3, duration: 0.6 },
                  x: { delay: 0.3, duration: 0.6 },
                  y: { 
                    delay: 0.9,
                    duration: 6, 
                    repeat: Infinity, 
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }
                }}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-full bg-[#1f1f1f]/10 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-[#e11a1a]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{t("heroModern.floatingCards.fuelManagement.title")}</p>
                    <p className="font-bold text-gray-900">{t("heroModern.floatingCards.fuelManagement.subtitle")}</p>
                  </div>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full w-[85%] bg-[#e11a1a] rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "85%" }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                  />
                </div>
              </motion.div>

              {/* Floating Card 2 */}
              <motion.div 
                className="absolute top-40 -right-12 bg-[#e11a1a] text-white rounded-2xl p-6 shadow-2xl max-w-[240px] cursor-pointer"
                initial={{ opacity: 0, y: 30, x: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: [0, -10, 0],
                  x: 0,
                }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ 
                  opacity: { delay: 0.5, duration: 0.6 },
                  x: { delay: 0.5, duration: 0.6 },
                  y: { 
                    delay: 1.1,
                    duration: 6, 
                    repeat: Infinity, 
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }
                }}
              >
                <p className="text-sm text-white/80 mb-2">{t("heroModern.floatingCards.transit.title")}</p>
                <p className="text-3xl font-extrabold mb-1">{t("heroModern.floatingCards.transit.value")}</p>
                <p className="text-sm text-white/90">{t("heroModern.floatingCards.transit.label")}</p>
              </motion.div>

              {/* Floating Card 3 */}
              <motion.div 
                className="absolute bottom-0 right-20 bg-white rounded-2xl p-6 shadow-2xl max-w-[260px] cursor-pointer"
                initial={{ opacity: 0, y: 30, x: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: [0, -10, 0],
                  x: 0,
                }}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ 
                  opacity: { delay: 0.7, duration: 0.6 },
                  x: { delay: 0.7, duration: 0.6 },
                  y: { 
                    delay: 1.3,
                    duration: 6, 
                    repeat: Infinity, 
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
                    <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white"></div>
                    <div className="w-8 h-8 rounded-full bg-gray-500 border-2 border-white"></div>
                  </div>
                  <p className="text-sm text-gray-600">{t("heroModern.floatingCards.clients.value")}</p>
                </div>
                <p className="text-xs text-gray-500">{t("heroModern.floatingCards.clients.label")}</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroModernSection;
