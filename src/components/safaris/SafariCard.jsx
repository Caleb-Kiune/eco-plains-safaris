// src/components/safaris/SafariCard/SafariCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './SafariCard.css';

const SafariCard = ({ safari, index = 0 }) => {
  const price = safari.price_adult
    ? new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: safari.currency || 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(safari.price_adult)
    : 'Rate on request';

  return (
    <motion.article
      className="safari-card"
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
        to={`/safaris/${safari.slug}`}
        className="safari-card__link"
        aria-label={`View details for ${safari.title}`}
      >
        <div className="safari-card__image-wrapper">
          <img
            src={safari.primaryImage}
            alt={safari.title}
            className="safari-card__image"
            loading="lazy"
          />

          <div className="safari-card__text-overlay">
            {/* Top: Title + Destination */}
            <div className="safari-card__text-top">
              <h3 className="safari-card__title">{safari.title}</h3>
              <p className="safari-card__location">{safari.destination}</p>
            </div>

            {/* Bottom: Button left + Info right */}
            <div className="safari-card__text-bottom">
              <button className="safari-card__button" tabIndex="-1">
                Discover This Safari
              </button>

              <div className="safari-card__info-right">
                <p className="safari-card__duration">{safari.duration}</p>
                <div className="safari-card__price-wrapper">
                  <span className="safari-card__price-label">Starting from</span>
                  <span className="safari-card__price">{price}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export default SafariCard;