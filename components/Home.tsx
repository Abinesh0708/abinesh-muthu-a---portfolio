import React from 'react';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Achievements from './Achievements';

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Achievements />
        </>
    );
};

export default Home;
