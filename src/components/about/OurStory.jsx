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
              In 2003, our founder stood watch at a Kenyan waterhole as a herd of elephants emerged from the golden savannah at dusk. That moment—raw, humbling, transcendent—sparked a mission to share Africa's wild magic with the world, responsibly and sustainably.
            </p>

            <p className="our-story__paragraph">
              Over two decades, Eco Plains Safaris has grown from a dream into East Africa's premier luxury safari operator. We've guided thousands of travelers through Kenya's Masai Mara, Tanzania's Serengeti, Rwanda's misty mountains, and beyond—always championing conservation, always honoring local communities.
            </p>

            <p className="our-story__paragraph">
              Today, our legacy is measured not in miles traveled, but in wildlife protected, communities empowered, and hearts forever changed by the African wilderness.
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
              alt="Minimalist line art of elephants crossing the savannah, symbolizing our journey"
              className="our-story__image"
              loading="lazy"
            />
            <div className="our-story__image-overlay" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}