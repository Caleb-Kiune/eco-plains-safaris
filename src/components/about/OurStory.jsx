// src/components/about/OurStory.jsx
import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import './OurStory.css';

export default function OurStory() {
  return (
    <section className="our-story">
      <div className="our-story__container">
        <SectionTitle>The Journey That Started It All</SectionTitle>

        <div className="our-story__content">
          <motion.div
            className="our-story__text-block"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <p className="our-story__paragraph">
              As the Director of Eco Plains Safaris, Lydia Muthoni is responsible for overseeing all operational aspects that define the exceptional service we provide. She meticulously manages relationships with our field teams, partners, and local communities, ensuring the seamless execution of complex, bespoke safaris.
            </p>
            <p className="our-story__paragraph">
              A staunch advocate for guest satisfaction, Lydia Muthoni drives the company's strategic planning, focusing on innovative, safety-first procedures and continuous improvement in our tour offerings. Her expertise guarantees that your adventure is not only unforgettable but also flawlessly managed from start to finish.
            </p>
          </motion.div>

          <motion.div
            className="our-story__image-wrapper"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          >
            <img
              src="/images/about/our-story-placeholder.png"
              alt="Lydia Muthoni Kahuthu - Director, Operations & Strategy"
              className="our-story__image"
              loading="lazy"
            />
            <div className="our-story__overlay" />
            <div className="our-story__image-content">
              <h3 className="our-story__name">Lydia Muthoni Kahuthu</h3>
              <p className="our-story__role">Director, Operations & Strategy</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}