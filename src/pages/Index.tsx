
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Team from '../components/Team';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ThemeToggle from '../components/ThemeToggle';
import LanguageToggle from '../components/LanguageToggle';

const Index = () => {
  return (
    <div className="barber-website">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Team />
      <FAQ />
      <Contact />
      <Footer />
      <ThemeToggle />
      <LanguageToggle />
    </div>
  );
};

export default Index;
