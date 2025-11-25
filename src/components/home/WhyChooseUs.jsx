// src/components/home/WhyChooseUs.jsx
import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import './WhyChooseUs.css';

const reasons = [
  {
    icon: '/icons/bespoke-safari.svg',
    title: 'Bespoke Safari Journeys',
    description: 'Tailored itineraries crafted by experts to match your vision of the perfect African adventure.',
  },
  {
    icon: '/icons/expert-guides.svg',
    title: 'World-Class Guides',
    description: 'Passionate naturalists and storytellers with decades of experience in East Africa\'s wild heart.',
  },
  {
    icon: '/icons/eco-luxury.svg',
    title: 'Eco-Luxury Stays',
    description: 'Intimate, sustainable lodges blending barefoot luxury with conservation impact.',
  },
  {
    icon: '/icons/concierge.svg',
    title: 'Private Concierge',
    description: '24/7 personal support from booking to bush, ensuring every detail is flawless.',
  },
  {
    icon: '/icons/sustainable.svg',
    title: 'Responsible Travel',
    description: 'Carbon-neutral safaris supporting local communities and wildlife protection.',
  },
  {
    icon: '/icons/exclusive-access.svg',
    title: 'Exclusive Access',
    description: 'Private conservancies, off-grid camps, and once-in-a-lifetime wildlife encounters.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why-choose-us" aria-labelledby="why-heading">
      <div className="why-choose-us__container">
        <SectionTitle centered>Why Choose Eco Plains Safaris</SectionTitle>

        <div className="why-choose-us__grid">
          {reasons.map((reason, index) => (
            <motion.article
              key={index}
              className="why-card"
              tabIndex={0}
              aria-labelledby={`why-title-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.4, 0, 0.2, 1]
              }}
            >
              <div className="why-card__icon-wrapper">
                <img
                  src={reason.icon}
                  alt=""
                  className="why-card__icon"
                  width="48"
                  height="48"
                  loading="lazy"
                />
              </div>

              <h3 id={`why-title-${index}`} className="why-card__title">
                {reason.title}
              </h3>

              <p className="why-card__text">{reason.description}</p>

              <div className="why-card__line" aria-hidden="true" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}