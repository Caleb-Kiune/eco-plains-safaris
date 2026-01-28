// src/components/home/HeroSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './HeroSection.css';
import Navbar from '../layout/Navbar';

export default function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTrips = () => {
    document.getElementById('destinations-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Framer Motion animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <section className="hero" aria-label="Hero section">
      {/* Video Background */}
      <video
        className="hero__video"
        autoPlay
        loop
        muted
        playsInline
        src="/images/home/black-tomato-mob-home.mp4"
        type="video/mp4"
        aria-hidden="true"
      />

      {/* Overlay */}
      <div className="hero__overlay" aria-hidden="true" />

      {/* Navbar */}
      <Navbar />

      {/* Hero Content with Staggered Animation */}
      <motion.div
        className="hero__content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="hero__title" variants={itemVariants}>
          Journey
          <br aria-hidden="true" />
          Into the Wild
        </motion.h1>

        <motion.button
          className="hero__cta"
          onClick={scrollToTrips}
          aria-label="Begin your luxury safari journey"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          Begin Your Journey
        </motion.button>
      </motion.div>

      {/* Scroll Indicator */}
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
