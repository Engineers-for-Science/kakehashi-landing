import React from 'react';
import AboutUs from '../components/AboutUs';
import Features from '../components/Features';
import Hero from '../components/Hero';
import Navbar2 from '../components/Navbar2';
import Steps from '../components/Steps';
import Skills from '../components/Skills';

const Main = () => {
  return (
    <div>
      <Navbar2 />
      <Hero />
      <Steps />
      <Features />
      <Skills />
      <AboutUs />
    </div>
  );
};

export default Main;
