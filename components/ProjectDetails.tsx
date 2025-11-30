import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import SectionContainer from './SectionContainer';
import { ArrowLeft, Github, ExternalLink, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
                    </Link >
                </div >
            </div >
        );
    }

return (
    <div className="pt-24 pb-16 min-h-screen">
        <SectionContainer id="project-details" title={project.title} subtitle="Project Details">
            <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-brand-400 mb-8 transition-colors">
                <ArrowLeft size={20} /> Back to Projects
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden"
            >
                {project.image && (
                    <div className="w-full h-64 md:h-96 overflow-hidden bg-slate-800 relative">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-50"></div>
                    </div>
                )}

                <div className="p-8">
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags?.map((tag, i) => (
                            <span key={i} className="text-sm font-medium px-3 py-1.5 bg-slate-800 text-brand-300 rounded-full border border-slate-700">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                        {project.title}
                    </h1>

                    <div className="prose prose-invert max-w-none text-slate-300 mb-8">
                        <p className="text-lg leading-relaxed mb-8">{project.description}</p>

                        {project.sections?.map((section, index) => (
                            <div key={index} className="mb-8">
                                <h2 className="text-2xl font-bold text-white mb-4">{section.title}</h2>
                                {Array.isArray(section.content) ? (
                                    <ul className="space-y-2">
                                        {section.content.map((item, i) => (
                                            <li key={i} className="text-slate-300 leading-relaxed">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-slate-300 leading-relaxed whitespace-pre-line">
                                        {section.content}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="flex gap-4 pt-6 border-t border-slate-800 mb-12">
                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-brand-600 hover:bg-brand-500 text-white font-medium rounded-lg transition-colors flex items-center gap-2"
                            >
                                View Live <ExternalLink size={18} />
                            </a>
                        )}
                        <button className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg transition-colors flex items-center gap-2">
                            <Github size={18} /> View Code
                        </button>
                    </div>

                    {project.gallery && (
                        <div className="space-y-8">
                            <h2 className="text-2xl font-bold text-white mb-6">Project Gallery</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {project.gallery.map((img, index) => (
                                    <div
                                        key={index}
                                        className="rounded-xl overflow-hidden border border-slate-800 bg-slate-900/50 cursor-pointer"
                                        onClick={() => setSelectedImage(img)}
                                    >
                                        <img
                                            src={img}
                                            alt={`${project.title} screenshot ${index + 1}`}
                                            className="w-full h-auto hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </motion.div>
        </SectionContainer>

        <AnimatePresence>
            {selectedImage && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setSelectedImage(null)}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
                >
                    <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
                    >
                        <X size={32} />
                    </button>
                    <motion.img
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        src={selectedImage}
                        alt="Project screenshot"
                        className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    </div>
);
};

export default ProjectDetails;
