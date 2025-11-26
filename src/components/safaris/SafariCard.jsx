// src/components/safaris/SafariCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './SafariCard.css';

export default function SafariCard({ safari, index }) {
  // Format price helper
  const formatPrice = (price, currency) => {
    if (!price) return null;
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency || 'USD',
      maximumFractionDigits: 0
    }).format(price);
  };

  const price = safari.price_adult || safari.price_couple;
  const formattedPrice = formatPrice(price, safari.currency);
  const priceLabel = safari.price_couple ? 'Per Couple' : 'Per Person';

  return (
    <motion.article
      className="safari-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
    >
      <Link to={`/safaris/${safari.slug}`} className="safari-card__link">
        <div className="safari-card__image-wrapper">
          <img
            src={safari.primaryImage}
            alt={safari.title}
            className="safari-card__image"
            loading="lazy"
          />
          <div className="safari-card__overlay" />

          {/* Badge (if featured or specific tag) */}
          {safari.featured && (
            <span className="safari-card__badge">Signature Journey</span>
          )}
        </div>

        <div className="safari-card__content">
          <div className="safari-card__header">
            <span className="safari-card__destination">{safari.destination}</span>
            <span className="safari-card__duration">{safari.duration}</span>
          </div>

          <h3 className="safari-card__title">{safari.title}</h3>

          {/* Reveal on Hover Content */}
          <div className="safari-card__reveal">
            <div className="safari-card__divider" />

            {formattedPrice && (
              <div className="safari-card__price-block">
                <span className="safari-card__price-label">From</span>
                <span className="safari-card__price">{formattedPrice}</span>
                <span className="safari-card__price-sub">{priceLabel}</span>
              </div>
            )}

            <span className="safari-card__cta">Explore Journey</span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}