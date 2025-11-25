// src/components/home/FeaturedDestinations.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import './FeaturedDestinations.css';

export default function FeaturedDestinations() {
  const [destinations, setDestinations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadDestinations = async () => {
      try {
        const res = await fetch('/data/destinations.json');
        const data = await res.json();
        setDestinations(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error('Failed to load destinations:', err);
        setDestinations([]);
      }
    };
    loadDestinations();
  }, []);

  const handleClick = (country) => {
    if (!country) return;
    navigate(`/safaris?country=${encodeURIComponent(country)}`);
  };

  return (
    <section className="featured-destinations">
      <div className="featured-destinations__container">
        <SectionTitle centered>Iconic Safari Destinations</SectionTitle>

        <div className="featured-destinations__grid">
          {destinations.map((dest, index) => (
            <motion.article
              key={dest.name || index}
              className="destination-card"
              role="button"
              tabIndex={0}
              onClick={() => handleClick(dest.name)}
              onKeyPress={(e) => e.key === 'Enter' && handleClick(dest.name)}
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.4, 0, 0.2, 1]
              }}
            >
              <div className="destination-card__image-wrapper">
                <img
                  src={dest.image || '/fallback-image.jpg'}
                  alt={dest.name || 'Safari Destination'}
                  className="destination-card__image"
                  loading="lazy"
                />

                <div className="destination-card__overlay" />

                <div className="destination-card__content">
                  <h3 className="destination-card__title">{dest.name}</h3>
                  <span className="destination-card__cta">Discover {dest.name}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
