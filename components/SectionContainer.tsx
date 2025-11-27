import React from 'react';
import { motion } from 'framer-motion';

interface SectionContainerProps {
  children: React.ReactNode;
  id: string;
  className?: string;
  title?: string;
  subtitle?: string;
}

const SectionContainer: React.FC<SectionContainerProps> = ({ children, id, className = "", title, subtitle }) => {
  return (
    <section id={id} className={`py-20 px-4 sm:px-6 lg:px-8 relative ${className}`}>
      <div className="max-w-7xl mx-auto">
        {(title || subtitle) && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            {title && (
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 relative inline-block">
                {title}
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-brand-500 rounded-full"></span>
              </h2>
            )}
            {subtitle && <p className="text-slate-400 mt-4 max-w-2xl mx-auto">{subtitle}</p>}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;