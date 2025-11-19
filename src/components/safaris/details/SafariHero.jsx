// src/components/safaris/details/SafariHero.jsx
import React from 'react';
import './SafariHero.css';

export default function SafariHero({ safari }) {
  // Defensive checks — never break the layout
  if (!safari || !safari.images?.[0]) {
    return null;
  }

  const backgroundImage = safari.images[0];
  const title = safari.title || 'Luxury Safari Experience';
  const location = safari.location || '';
  const price = safari.price ? safari.price.toLocaleString() : 'Custom';

  return (
    <section
      className="safari-hero"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.65), rgba(0,0,0,0.15)), url(${backgroundImage})`
      }}
      aria-label={`${title} hero section`}
    >
      <div className="safari-hero__container">
        <div className="safari-hero__content">
          <h1 className="safari-hero__title">{title}</h1>
          {location && (
            <p className="safari-hero__location">{location}</p>
          )}
          <p className="safari-hero__price">
            Starting from <strong>${price}</strong> per person
          </p>

          <div className="safari-hero__actions">
            <a href={safari.link || '#'} className="safari-hero__btn safari-hero__btn--primary">
              Book This Safari
            </a>
            <button className="safari-hero__btn safari-hero__btn--secondary">
              Enquire Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}