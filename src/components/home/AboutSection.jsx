// src/components/home/AboutSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import LuxuryButton from '../common/LuxuryButton';
import './AboutSection.css';

export default function AboutSection() {
  return (
    <section id="about-section" className="about-section" aria-labelledby="about-heading">
      <div className="about-section__container">
        <motion.div
          className="about-section__content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <h2 id="about-heading" className="about-section__title">
            Where Wilderness Meets Wonder
          </h2>

          <p className="about-section__subtitle">
            Crafting unforgettable safari journeys across Africa's wild plains
          </p>

          <p className="about-section__text">
            At Eco Plains Safaris, we curate exceptional, tailor-made journeys that immerse discerning travelers
            in Africa's untouched wilderness. We combine world-class comfort with eco-conscious practices,
            championing wildlife conservation, community empowerment, and a lasting legacy of responsible luxury.
          </p>

          <LuxuryButton variant="outline" href="/about">
            Discover Our Story
          </LuxuryButton>

          {/* Partner Badge */}
          <div className="about-section__partner">
            <span className="about-section__partner-label">Proud Official Member of</span>
            <a
              href="https://www.safaribookings.com"
              target="_blank"
              rel="noopener noreferrer"
              className="about-section__partner-link"
            >
              <img
                src="/images/logos/safaribookings-logo-retina.png"
                alt="SafariBookings Official Member"
                className="about-section__partner-logo"
                loading="lazy"
                width="280"
                height="auto"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}