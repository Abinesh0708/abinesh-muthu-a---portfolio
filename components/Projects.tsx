import React from 'react';
import SectionContainer from './SectionContainer';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';


const Projects: React.FC = () => {
  const navigate = useNavigate();

  return (
    <SectionContainer id="projects" title="Portfolio">
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={`${index}-${project.title}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => navigate(`/project/${project.id}`)}
              className="group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-brand-500/50 transition-all duration-300 flex flex-col cursor-pointer"
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

                <div className="flex gap-4 relative z-20">
                  <span
                    className="text-sm font-medium text-white flex items-center gap-1 hover:text-brand-400 transition-colors"
                  >
                    View Details <ArrowUpRight size={16} />
                  </span>
                  {project.sourceCode && (
                    <a
                      href={project.sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-sm font-medium text-slate-400 flex items-center gap-1 hover:text-white transition-colors"
                    >
                      <Github size={16} /> Code
                    </a>
                  )}
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