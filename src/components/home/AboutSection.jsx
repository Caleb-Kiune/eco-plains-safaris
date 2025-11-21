// src/components/home/AboutSection.jsx
import React from 'react';
import './AboutSection.css';

export default function AboutSection() {
  return (
    <section id="about-section" className="about" aria-labelledby="about-heading">
      <div className="about__inner">
        {/* Subtle accent divider – inspired by Singita & Roar Africa */}
        <div className="about__divider" aria-hidden="true" />

        <div className="about__content">
          <h2 id="about-heading" className="about__title">
            Welcome to Eco Plains Safaris
          </h2>

          <p className="about__subtitle">
            Crafting unforgettable safari journeys across Africa’s wild plains
          </p>

          <p className="about__text">
            At Eco Plains Safaris, we curate exceptional, tailor-made journeys that immerse discerning travelers
            in Africa’s untouched wilderness. We combine world-class comfort with eco-conscious practices,
            championing wildlife conservation, community empowerment, and a lasting legacy of responsible luxury.
          </p>

          <a
            href="/about"
            className="about__cta"
            aria-label="Learn more about Eco Plains Safaris"
          >
            Learn More About Us
          </a>
        </div>

        {/* Duplicate divider at bottom for symmetry on large screens */}
        <div className="about__divider about__divider--bottom" aria-hidden="true" />
      </div>
    </section>
  );
}