import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from 'framer-motion';

interface FaqSectionProps {
  variant?: 'dark' | 'light';
}

const FaqSection = ({ variant = 'dark' }: FaqSectionProps) => {
  const isDark = variant === 'dark';
  
  const features = [
    "Quel sera le dimensionnement de mes capacités de stockage suivant ma consommation journalière en hydrocarbures ?",
    "Solutions spécialisées pour marchandises fragiles et périssables",
    "Suivi en temps réel des expéditions avec mises à jour",
    "Gestion des risques et protocoles d’urgence en cas de déversement du produit transporté ",
  ];

  return (
    <section id="faq" className={`py-14 sm:py-20 lg:py-28 ${isDark ? 'section-dark' : 'bg-white'} scroll-animate`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div 
          className="max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Kicker */}
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#e11a1a] uppercase">
            Questions & Réponses
            <span className="text-[#e11a1a]">⇄</span>
          </div>

            {/* Title */}
            <h2 className={`mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Questions
              <br />
              fréquentes
            </h2>

            {/* Description */}
            <p className={`mt-5 text-sm sm:text-base max-w-md leading-relaxed ${isDark ? 'text-white/70' : 'text-gray-600'}`}>
              Nous répondons aux questions les plus courantes sur nos services de système de stockage d'hydrocarbures, de transport et de transit.
            </p>

          {/* Features List */}
          <div className={`mt-8 space-y-4 ${isDark ? 'text-white/80' : 'text-gray-700'}`}>
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <span className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                  isDark ? 'bg-white/10' : 'bg-[#1f1f1f]/10'
                }`}>
                  <Check className="w-3.5 h-3.5 text-[#e11a1a]" />
                </span>
                <p className="text-sm">{feature}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div 
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <Link to="/contact">
              <Button className="bg-[#e11a1a] hover:bg-red-700 text-white rounded-full px-8 py-6 font-semibold inline-flex items-center gap-2">
                Voir toutes les FAQ
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
