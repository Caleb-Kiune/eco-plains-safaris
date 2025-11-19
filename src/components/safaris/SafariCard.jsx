// src/components/SafariCard/SafariCard.jsx
import React from 'react';
import './SafariCard.css';

const SafariCard = ({ title, location, image, duration, price, link }) => {
  return (
    <article className="safari-card">
      <a href={link} className="safari-card__link" aria-label={`View details for ${title} in ${location}`}>
        <div className="safari-card__image-wrapper">
          <img
            src={image}
            alt={`Safari experience in ${location} - ${title}`}
            className="safari-card__image"
            loading="lazy"
          />
          <div className="safari-card__overlay">
            <h3 className="safari-card__title">{title}</h3>
            <p className="safari-card__location">{location}</p>
          </div>
        </div>

        <div className="safari-card__content">
          <div className="safari-card__details">
            <span className="safari-card__duration">{duration}</span>
            <span className="safari-card__price">
              From <strong>${price.toLocaleString()}</strong> pp
            </span>
          </div>

          <button className="safari-card__button">
            View Details
            <span className="safari-card__button-arrow">→</span>
          </button>
        </div>
      </a>
    </article>
  );
};

export default SafariCard;