// src/components/safaris/SafariCard/SafariCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './SafariCard.css';

const SafariCard = ({ safari, animationDelay }) => {
  const price = safari.price_adult
    ? new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: safari.currency || 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(safari.price_adult)
    : 'Rate on request';

  return (
    <article className="safari-card" style={{ animationDelay }}>
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
          <div className="safari-card__overlay">
            <h3 className="safari-card__title">{safari.title}</h3>
            <p className="safari-card__location">{safari.destination}</p>
          </div>
        </div>

        <div className="safari-card__content">
          <div className="safari-card__details">
            <span className="safari-card__duration">{safari.duration}</span>
            <span className="safari-card__price">
              Starting from <strong>{price}</strong>
              {safari.price_note && <span className="text-sm block opacity-80 mt-1">{safari.price_note}</span>}
            </span>
          </div>

          <button
            className="safari-card__button"
            tabIndex="-1" // Button inside link, remove from tab order
          >
            Explore Journey
            <span className="safari-card__button-arrow">→</span>
          </button>
        </div>
      </Link>
    </article>
  );
};

export default SafariCard;