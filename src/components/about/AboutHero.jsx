// src/components/about/AboutHero.jsx
import React from 'react';
import './AboutHero.css';

export default function AboutHero() {
  // Function to scroll to the next section (Vision/Mission) smoothly
  const scrollToNext = () => {
    const nextSection = document.querySelector('.about-page > :nth-child(2)');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="about-hero">
      {/* Full-screen video background */}
      <video className="about-hero__video" autoPlay loop muted playsInline>
        <source src="/black-tomato-mob-home.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay for text readability */}
      <div className="about-hero__overlay"></div>

      {/* Centered content */}
      <div className="about-hero__content">
        <h1 className="about-hero__headline">Explore, Conserve, Connect with Nature</h1>
        <p className="about-hero__subheadline">Luxury Eco-Safari Journeys | Conservation-Focused | Bespoke</p>
        <button className="about-hero__cta">Plan Your Eco-Safari</button>
      </div>

      {/* Subtle scroll indicator (chevron) */}
      <button className="about-hero__scroll" onClick={scrollToNext} aria-label="Scroll to next section">
        <svg className="about-hero__chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </section>
  );
}