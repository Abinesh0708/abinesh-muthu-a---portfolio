import React from 'react';
import SectionContainer from './SectionContainer';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Projects.css';

const Projects: React.FC = () => {
  return (
    <SectionContainer id="projects" title="Projects" subtitle="Selected works showcasing ML, Development, and Engineering.">
      <div className="w-full overflow-hidden">
        <div className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={`${index}-${project.title}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-brand-500/50 transition-all duration-300 w-[400px] flex-shrink-0 snap-center"
            >
              <div className="h-48 overflow-hidden bg-slate-800 relative">
                <img
                  src={project.image || `https://picsum.photos/seed/${index + 12}/600/400`}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-brand-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags?.map((tag, i) => (
                    <span key={i} className="text-xs font-medium px-2.5 py-1 bg-slate-800 text-brand-300 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Link
                    to={`/project/${project.id}`}
                    className="text-sm font-medium text-white flex items-center gap-1 hover:text-brand-400 transition-colors"
                  >
                    View Details <ArrowUpRight size={16} />
                  </Link>
                  <button className="text-sm font-medium text-slate-400 flex items-center gap-1 hover:text-white transition-colors">
                    <Github size={16} /> Code
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Projects;