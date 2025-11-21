// src/components/home/HeroSection.jsx
import React from 'react';
import './HeroSection.css';
import Navbar from '../layout/Navbar';

export default function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTrips = () => {
    document.getElementById('trips-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" aria-label="Hero section">
      {/* Full-screen Video Background */}
      <video
        className="hero__video"
        autoPlay
        loop
        muted
        playsInline
        src="/black-tomato-mob-home.mp4"
        type="video/mp4"
        aria-hidden="true"
      />

      {/* Refined Gradient Overlay */}
      <div className="hero__overlay" aria-hidden="true" />

      {/* Luxury Navbar – assumed to be transparent on hero */}
      <Navbar />

      {/* Hero Content */}
      <div className="hero__content">
        <h1 className="hero__title">
          Enter the Heart<br aria-hidden="true" />
          of Wild Africa
        </h1>

        <p className="hero__subtitle">
          Luxury Safari Journeys · Sustainable · Bespoke
        </p>

        <p className="hero__description">
          Experience the plains like never before — immersive, authentic, conscious.
        </p>

        <button
          className="hero__cta"
          onClick={scrollToTrips}
          aria-label="Start planning your safari journey"
        >
          Start Your Journey
        </button>
      </div>

      {/* Minimal Scroll Indicator */}
      <button
        className="hero__scroll-hint"
        onClick={scrollToAbout}
        aria-label="Scroll down to explore more"
      >
        <span className="hero__scroll-text">Explore</span>
        <svg className="hero__chevron" viewBox="0 0 32 32" aria-hidden="true">
          <path d="M8 12 L16 20 L24 12" />
        </svg>
      </button>
    </section>
  );
}