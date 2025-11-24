// src/components/home/FeaturedSafariCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedSafariCard.css';

export default function FeaturedSafariCard({ safari }) {
  const formattedPrice = safari.price_adult
    ? new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: safari.currency || 'USD',
        minimumFractionDigits: 0,
      }).format(safari.price_adult)
    : 'Rate on request';

  return (
    <Link
      to={`/safaris/${safari.slug}`}
      className="featured-card"
      aria-label={`Explore ${safari.title}`}
    >
      <div className="featured-card__image-wrapper">
        <img
          src={safari.primaryImage}
          alt={safari.title}
          className="featured-card__image"
          loading="lazy"
        />
        <div className="featured-card__overlay" />
        <div className="featured-card__badge">{safari.category}</div>
      </div>

      <div className="featured-card__content">
        <h3 className="featured-card__title">{safari.title}</h3>
        <p className="featured-card__meta">
          {safari.destination} • {safari.duration}
        </p>
        <div className="featured-card__price">
          <span className="featured-card__from">From</span>{' '}
          <span className="featured-card__amount">{formattedPrice}</span>
          {safari.price_note && (
            <span className="featured-card__note">{safari.price_note}</span>
          )}
        </div>
        <span className="featured-card__cta">Explore Journey →</span>
      </div>
    </Link>
  );
}