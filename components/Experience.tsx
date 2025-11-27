import React from 'react';
import SectionContainer from './SectionContainer';
import { EDUCATION, INTERNSHIPS, CERTIFICATIONS } from '../constants';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <div className="bg-slate-900/30">
      <SectionContainer id="experience" title="Experience & Education">

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Internships Column */}
          <div>
            <h3 className="text-2xl font-display font-bold text-white mb-8 flex items-center gap-3">
              <div className="p-2 bg-brand-500/10 rounded-lg text-brand-500"><Briefcase size={24} /></div>
              Internships
            </h3>
            <div className="space-y-8 border-l-2 border-slate-800 ml-3 pl-8 relative">
              {INTERNSHIPS.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <span className="absolute -left-[41px] top-1 w-5 h-5 bg-slate-900 border-2 border-brand-500 rounded-full"></span>
                  <h4 className="text-xl font-bold text-white">{job.role}</h4>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-brand-400 font-medium">{job.company}</span>
                    <span className="text-sm text-slate-500">{job.period}</span>
                  </div>
                  <p className="text-sm text-slate-500 mb-3">{job.location}</p>
                  <ul className="list-disc list-outside ml-4 text-slate-400 space-y-1">
                    {job.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <h3 className="text-2xl font-display font-bold text-white mb-8 flex items-center gap-3">
              <div className="p-2 bg-purple-500/10 rounded-lg text-purple-500"><GraduationCap size={24} /></div>
              Education
            </h3>
            <div className="space-y-8 border-l-2 border-slate-800 ml-3 pl-8 relative">
              {EDUCATION.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <span className="absolute -left-[41px] top-1 w-5 h-5 bg-slate-900 border-2 border-purple-500 rounded-full"></span>
                  <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-slate-300 font-medium">{edu.institution}</span>
                  </div>
                  <div className="flex gap-4 text-sm text-slate-500">
                    <span>{edu.period}</span>
                    <span>•</span>
                    <span className="text-purple-400">{edu.details}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

        {/* Certifications (Full Width) */}
        <div className="mt-20">
          <h3 className="text-2xl font-display font-bold text-white mb-8 flex items-center justify-center gap-3">
            <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500"><Award size={24} /></div>
            Certifications
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {CERTIFICATIONS.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-slate-900 p-5 rounded-xl border border-slate-800 hover:border-blue-500/40 transition-colors w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
              >
                <h5 className="font-bold text-white mb-2 line-clamp-2 min-h-[3rem]">{cert.name}</h5>
                <p className="text-sm text-blue-400 mb-1">{cert.issuer}</p>
                <p className="text-xs text-slate-600">{cert.date}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </SectionContainer>
    </div>
  );
};

export default Experience;