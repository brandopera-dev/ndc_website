// Composant wrapper pour animer les sections au scroll
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { fadeInUp } from "@/utils/animations";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "fadeInUp" | "fadeIn" | "slideInLeft" | "slideInRight" | "scaleIn";
}

const AnimatedSection = ({ 
  children, 
  className = "", 
  delay = 0,
  variant = "fadeInUp"
}: AnimatedSectionProps) => {
  const variants = {
    fadeInUp,
    fadeIn: { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.5 } } },
    slideInLeft: { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } },
    slideInRight: { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } },
    scaleIn: { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } } },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={variants[variant]}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
