import React from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import About from './pages/About';

export default function App() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between scroll-smooth">
      <AnimatedBackground />
      <CustomCursor />
      <Navbar />

      <main className="z-10 flex-grow space-y-12 md:space-y-16">
        <section id="home" className="pt-24 pb-8">
          <Home />
        </section>

        <section id="experience" className="pt-12 pb-8">
          <About />
        </section>

        <section id="experience" className="pt-12 pb-8">
          <Experience />
        </section>

        <section id="skills" className="pt-12 pb-8">
          <Skills />
        </section>

        <section id="projects" className="pt-12 pb-8">
          <Projects />
        </section>

        <section id="contact" className="pt-12 pb-16">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}