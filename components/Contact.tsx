import React from 'react';
import SectionContainer from './SectionContainer';
import { HERO_CONTENT } from '../constants';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer className="bg-slate-950 pt-10 border-t border-slate-900">
      <SectionContainer id="contact" title="Get In Touch" subtitle="I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.">

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mt-8">

          <a href={`mailto:${HERO_CONTENT.email}`} className="flex flex-col items-center group">
            <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center text-slate-400 group-hover:text-brand-400 group-hover:scale-110 transition-all border border-slate-800 group-hover:border-brand-500/50 shadow-lg">
              <Mail size={28} />
            </div>
            <span className="mt-4 text-slate-400 group-hover:text-white transition-colors">{HERO_CONTENT.email}</span>
          </a>

          <a href={`tel:${HERO_CONTENT.phone}`} className="flex flex-col items-center group">
            <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center text-slate-400 group-hover:text-green-400 group-hover:scale-110 transition-all border border-slate-800 group-hover:border-green-500/50 shadow-lg">
              <Phone size={28} />
            </div>
            <span className="mt-4 text-slate-400 group-hover:text-white transition-colors">{HERO_CONTENT.phone}</span>
          </a>

          <div className="flex flex-col items-center group cursor-default">
            <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center text-slate-400 group-hover:text-red-400 transition-all border border-slate-800 group-hover:border-red-500/50 shadow-lg">
              <MapPin size={28} />
            </div>
            <span className="mt-4 text-slate-400 group-hover:text-white transition-colors">{HERO_CONTENT.location}</span>
          </div>
        </div>

        <div className="flex justify-center gap-6 mt-12 mb-12">
          <a href={HERO_CONTENT.linkedinUrl} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-slate-900 text-slate-400 hover:text-white hover:bg-brand-600 transition-all">
            <Linkedin size={24} />
          </a>
          <a href={HERO_CONTENT.githubUrl} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-all">
            <Github size={24} />
          </a>
        </div>

        <div className="text-center border-t border-slate-900 pt-8 pb-4">
          <p className="text-slate-600 text-sm">© {new Date().getFullYear()} {HERO_CONTENT.name}. All rights reserved.</p>
        </div>

      </SectionContainer>
    </footer>
  );
};

export default Contact;