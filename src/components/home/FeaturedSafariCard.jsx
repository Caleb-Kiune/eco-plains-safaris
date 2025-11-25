// src/components/home/FeaturedSafariCard.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './FeaturedSafariCard.css';

export default function FeaturedSafariCard({ safari, index = 0 }) {
  const [isActive, setIsActive] = useState(false);

  const formattedPrice = safari.price_adult
    ? new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: safari.currency || 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(safari.price_adult)
    : 'Rate on request';

  const handleCardClick = (e) => {
    // Check if the device is touch-enabled
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (isTouchDevice) {
      // Prevent navigation on card tap for mobile
      e.preventDefault();
      // Toggle active state
      setIsActive(!isActive);
    }
    // On desktop: Link works normally (no preventDefault)
  };

  return (
    <Link
      to={`/safaris/${safari.slug}`}
      className={`featured-card ${isActive ? 'active' : ''}`}
      aria-label={`Explore ${safari.title}`}
      onClick={handleCardClick}
    >
      <div className="featured-card__image-wrapper">
        <img
          src={safari.primaryImage}
          alt={safari.title}
          className="featured-card__image"
          loading={index < 3 ? "eager" : "lazy"}
        />
        <div className="featured-card__overlay" />
      </div>

      <div className="featured-card__content">
        <h3 className="featured-card__title">{safari.title}</h3>
        <p className="featured-card__meta">
          {safari.destination} • {safari.duration}
        </p>
        <div className="featured-card__price">
          From {formattedPrice}
        </div>
        <span
          className="featured-card__cta"
          onClick={(e) => {
            // On mobile, let the button navigate (don't prevent default)
            // On desktop, this is redundant but harmless (Link handles it)
          }}
        >
          Discover Journey
        </span>
      </div>
    </Link>
  );
}