// src/pages/AboutPage.jsx
import React from 'react';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection'; // Optional: custom about hero

export default function AboutPage() {
  return (
    <div>
      <HeroSection />       
      <AboutSection />     
      <Footer />
    </div>
  );
}
