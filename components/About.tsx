import React from 'react';
import SectionContainer from './SectionContainer';
import { ABOUT_CONTENT } from '../constants';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <SectionContainer id="about" title="About Me">
      <div className="grid md:grid-cols-3 gap-8 items-start">
        <motion.div 
          className="md:col-span-3 lg:col-span-2 text-lg text-slate-300 leading-relaxed space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {ABOUT_CONTENT.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          
          <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-slate-800">
            <div>
              <span className="block text-sm text-slate-500 mb-1">Location</span>
              <span className="text-white font-medium">Tirunelveli, Tamil Nadu</span>
            </div>
            <div>
              <span className="block text-sm text-slate-500 mb-1">Education</span>
              <span className="text-white font-medium">B.E. Mechanical Engineering</span>
            </div>
            <div>
              <span className="block text-sm text-slate-500 mb-1">Interests</span>
              <span className="text-white font-medium">ML, Web Dev, R&D</span>
            </div>
            <div>
              <span className="block text-sm text-slate-500 mb-1">Availability</span>
              <span className="text-white font-medium">Remote / On-site</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="md:col-span-3 lg:col-span-1"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
             <h3 className="text-xl font-bold text-white mb-4 font-display">Languages</h3>
             <ul className="space-y-3">
                <li className="flex justify-between items-center">
                  <span className="text-slate-400">English</span>
                  <div className="w-24 h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div className="w-[95%] h-full bg-brand-500"></div>
                  </div>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-slate-400">Tamil</span>
                  <div className="w-24 h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div className="w-[100%] h-full bg-brand-500"></div>
                  </div>
                </li>
             </ul>
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  );
};

export default About;