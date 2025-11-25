// src/components/about/VisionMission.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './VisionMission.css';

export default function VisionMission() {
  return (
    <section className="vision-mission">
      <div className="vision-mission__container">
        <motion.div
          className="vision-mission__column"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <h2 className="vision-mission__title">Our Vision</h2>
          <div className="vision-mission__divider" />
          <p className="vision-mission__text">
            To be the world's most trusted partner for transformative African safari experiences—where luxury meets conservation, and every journey leaves a lasting positive impact on wildlife and communities.
          </p>
        </motion.div>

        <div className="vision-mission__separator" aria-hidden="true" />

        <motion.div
          className="vision-mission__column"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <h2 className="vision-mission__title">Our Mission</h2>
          <div className="vision-mission__divider" />
          <p className="vision-mission__text">
            To curate bespoke, eco-conscious safari journeys that immerse travelers in Africa's wild beauty while championing wildlife protection, sustainable tourism, and the empowerment of local communities.
          </p>
        </motion.div>
      </div>
    </section>
  );
}