import React from 'react';
import SectionContainer from './SectionContainer';
import { ACHIEVEMENTS, PATENTS, PUBLICATIONS } from '../constants';
import { motion } from 'framer-motion';
import { Trophy, FileText, BookOpen } from 'lucide-react';

const Achievements: React.FC = () => {
  return (
    <SectionContainer id="achievements" className="bg-slate-950">
      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* Achievements */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-slate-900 border border-slate-800 rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Trophy className="text-yellow-500" size={28} />
            <h3 className="text-2xl font-bold text-white font-display">Honors</h3>
          </div>
          <ul className="space-y-6">
            {ACHIEVEMENTS.map((item, i) => (
              <li key={i} className="border-b border-slate-800 pb-4 last:border-0 last:pb-0">
                <p className="font-medium text-white text-lg">{item.title}</p>
                <p className="text-slate-500 text-sm mt-1">{item.date}</p>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Patents */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-slate-900 border border-slate-800 rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <FileText className="text-green-500" size={28} />
            <h3 className="text-2xl font-bold text-white font-display">Patents</h3>
          </div>
          <ul className="space-y-6">
            {PATENTS.map((item, i) => (
              <li key={i} className="border-b border-slate-800 pb-4 last:border-0 last:pb-0">
                <p className="font-medium text-white text-lg">{item.title}</p>
                <div className="flex justify-between items-center mt-1">
                   <p className="text-slate-400 text-sm font-mono">{item.id}</p>
                   <span className="text-xs bg-slate-800 px-2 py-1 rounded text-slate-400">{item.year}</span>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Publications */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-slate-900 border border-slate-800 rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="text-brand-500" size={28} />
            <h3 className="text-2xl font-bold text-white font-display">Publications</h3>
          </div>
          <ul className="space-y-6">
            {PUBLICATIONS.map((item, i) => (
              <li key={i} className="border-b border-slate-800 pb-4 last:border-0 last:pb-0">
                <p className="font-medium text-white text-lg italic">"{item.title}"</p>
                <p className="text-brand-400 text-sm mt-2">{item.journal}</p>
                <p className="text-slate-500 text-sm">{item.date}</p>
              </li>
            ))}
          </ul>
        </motion.div>

      </div>
    </SectionContainer>
  );
};

export default Achievements;