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

          <div className="safari-card__text-overlay">
            {/* Top: Title + Destination */}
            <div className="safari-card__text-top">
              <h3 className="safari-card__title">{safari.title}</h3>
              <p className="safari-card__location">{safari.destination}</p>
            </div>

            {/* Bottom: Button left + Info right */}
            <div className="safari-card__text-bottom">
              <button className="safari-card__button" tabIndex="-1">
                Explore
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
    </article>
  );
};

export default SafariCard;