// src/components/HeroSection.jsx
import React from 'react';
import './HeroSection.css';
import Navbar from '../layout/Navbar';

export default function HeroSection() {
  // Smooth scroll handlers
  const scrollToAbout = () => {
    const section = document.getElementById('about-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTrips = () => {
    const section = document.getElementById('trips-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section">
      {/* Full-screen Video Background */}
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
        src="/black-tomato-mob-home.mp4"
        type="video/mp4"
      />

      {/* Dark Overlay */}
      <div className="hero-overlay" />

      {/* Luxury Navbar */}
      <Navbar />

      {/* Hero Content */}
      <div className="hero-content">
        <h1 className="hero-headline">Enter the Heart of Wild Africa</h1>
        <p className="hero-subheadline">Luxury Safari Journeys | Sustainable | Bespoke</p>
        <p className="hero-description">
          Experience the plains like never before — immersive, authentic, conscious.
        </p>
        <button className="hero-cta" onClick={scrollToTrips}>
          Start Your Safari
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator" onClick={scrollToAbout}>
        <span>Explore</span>
        <div className="chevron"></div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="bottom-fade"></div>
    </section>
  );
}
