// src/components/safaris/PopularDestinations.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import './PopularDestinations.css';

export default function PopularDestinations({ destinations = [] }) {
  if (!destinations || destinations.length === 0) return null;

  return (
    <section className="popular-destinations" aria-labelledby="popular-title">
      <div className="popular-destinations__container">
        <SectionTitle centered>Popular Destinations</SectionTitle>

        <div className="popular-destinations__grid">
          {destinations.slice(0, 6).map((dest, index) => {
            const slug = dest.link?.replace('/safaris/', '') || dest.id;

            return (
              <motion.article
                key={dest.id}
                className="popular-dest-card"
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.4, 0, 0.2, 1]
                }}
              >
                <Link
                  to={`/safaris/${slug}`}
                  className="popular-dest-card__link"
                  aria-label={`Explore ${dest.title}`}
                >
                  <div className="popular-dest-card__image-wrapper">
                    <img
                      src={dest.image}
                      alt={dest.title}
                      className="popular-dest-card__image"
                      loading="lazy"
                    />
                    <div className="popular-dest-card__overlay" />

                    <div className="popular-dest-card__content">
                      <h3 className="popular-dest-card__title">{dest.title}</h3>
                      <span className="popular-dest-card__cta">Discover</span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}