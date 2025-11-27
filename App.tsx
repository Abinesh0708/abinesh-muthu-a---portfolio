import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300">
      <NavBar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
      </main>
      <Contact />
    </div>
  );
};

export default App;