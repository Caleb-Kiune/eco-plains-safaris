// src/components/home/FeaturedDestinations.jsx
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import './FeaturedDestinations.css';

function DestinationCard({ dest, index }) {
  const navigate = useNavigate();
  const ref = useRef(null);

  // Mobile parallax effect
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.05, 1, 1.05]);

  const handleClick = () => {
    if (!dest.name) return;

    // Navigate to safaris page with country filter
    navigate(`/safaris?country=${encodeURIComponent(dest.name)}`);

    // Smooth scroll to the grid section after a short delay
    // The delay is needed because navigation is asynchronous and the target page needs to mount first
    setTimeout(() => {
      const gridSection = document.getElementById('safaris-grid');
      if (gridSection) {
        gridSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Fallback: scroll to top if grid not found immediately
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <motion.article
      ref={ref}
      className={`destination-card destination-card--${dest.gridArea}`}
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyPress={(e) => e.key === 'Enter' && handleClick()}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.25, 0.1, 0.25, 1]
      }}
    >
      <div className="destination-card__image-wrapper">
        <motion.img
          src={dest.image || '/fallback-image.jpg'}
          alt={`${dest.name} Safari Destination`}
          className="destination-card__image"
          loading="lazy"
          style={{ scale: window.innerWidth <= 768 ? scale : 1 }}
        />

        <div className="destination-card__overlay" />

        <div className="destination-card__content">
          <span className="destination-card__flag">{dest.flag}</span>
          <h3 className="destination-card__title">{dest.name}</h3>
          <span className="destination-card__cta">Discover {dest.name}</span>
        </div>
      </div>
    </motion.article>
  );
}

export default function FeaturedDestinations() {
  const [destinations, setDestinations] = useState([]);

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

  return (
    <section id="destinations-section" className="featured-destinations">
      <div className="featured-destinations__container">
        <SectionTitle centered>Iconic Safari Destinations</SectionTitle>

        <p className="featured-destinations__subtitle">
          Six extraordinary countries. Endless unforgettable moments.
        </p>

        <div className="featured-destinations__grid">
          {destinations.map((dest, index) => (
            <DestinationCard
              key={dest.name || index}
              dest={dest}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
