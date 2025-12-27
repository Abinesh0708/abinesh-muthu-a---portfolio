import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { HERO_CONTENT } from '../constants';
import homeImg from '../imgs/hero-profile.png';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-slate-950">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 opacity-10 blur-3xl">
        <div className="w-96 h-96 bg-brand-500 rounded-full mix-blend-screen"></div>
      </div>
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 opacity-10 blur-3xl">
        <div className="w-96 h-96 bg-purple-500 rounded-full mix-blend-screen"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-brand-400 font-medium tracking-wide mb-4">Hello, I'm</h2>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
              <span className="text-slate-400">Abinesh Muthu</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-6 font-light">
              {HERO_CONTENT.title}
            </p>
            <p className="text-slate-400 mb-8 max-w-lg leading-relaxed">
              {HERO_CONTENT.tagline}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-8 py-3 bg-brand-600 hover:bg-brand-500 text-white font-medium rounded-full transition-all flex items-center gap-2 shadow-lg shadow-brand-900/20"
              >
                Let's Talk <ArrowRight size={18} />
              </a>
              <a
                href="/resume.pdf"
                download="Abinesh_Muthu_Resume.pdf"
                className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-full transition-all flex items-center gap-2 border border-slate-700"
              >
                Resume <Download size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative block"
          >
            <div className="relative w-full aspect-[3/4] max-w-sm mx-auto">
              {/* Decorative background glow */}
              <div className="absolute inset-0 bg-brand-500/20 rounded-2xl blur-2xl"></div>


              <img
                src={homeImg}
                alt="Abinesh Muthu A"
                className="rounded-2xl object-cover shadow-[0_0_30px_rgba(59,130,246,0.5)] border border-slate-800 relative z-10 w-full h-full"
              />

              <div className="absolute bottom-4 right-4 md:-bottom-6 md:-right-6 z-20 bg-slate-900 p-4 rounded-xl border border-slate-800 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-white">Open to Opportunities</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;