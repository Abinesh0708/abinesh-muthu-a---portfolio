import React from 'react';
import SectionContainer from './SectionContainer';
import { SKILLS } from '../constants';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  return (
    <SectionContainer id="skills" title="Technical Skills" subtitle="A comprehensive toolkit for modern engineering and development.">
      <div className="grid md:grid-cols-3 gap-8">
        
        {/* Programming */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-brand-500/30 transition-colors"
        >
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="w-2 h-8 bg-brand-500 rounded-full"></span>
            Programming
          </h3>
          <div className="space-y-4">
            {SKILLS.programming.map((skill, idx) => (
              <div key={idx} className="flex items-center gap-4 group">
                <div className="p-2 bg-slate-800 rounded-lg text-brand-400 group-hover:text-white group-hover:bg-brand-500 transition-colors">
                  <skill.icon size={20} />
                </div>
                <span className="text-slate-300 font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Frameworks & Tools */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-brand-500/30 transition-colors"
        >
           <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="w-2 h-8 bg-purple-500 rounded-full"></span>
            Frameworks & Tools
          </h3>
          <div className="space-y-4">
            {SKILLS.frameworks.map((skill, idx) => (
              <div key={idx} className="flex items-center gap-4 group">
                <div className="p-2 bg-slate-800 rounded-lg text-purple-400 group-hover:text-white group-hover:bg-purple-500 transition-colors">
                  <skill.icon size={20} />
                </div>
                <span className="text-slate-300 font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Core Competencies */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
           className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-brand-500/30 transition-colors"
        >
           <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="w-2 h-8 bg-blue-500 rounded-full"></span>
            Core Competencies
          </h3>
          <div className="flex flex-wrap gap-2">
            {SKILLS.core.map((skill, idx) => (
              <span key={idx} className="px-3 py-1.5 bg-slate-800 text-slate-300 rounded-full text-sm font-medium border border-slate-700">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </SectionContainer>
  );
};

export default Skills;