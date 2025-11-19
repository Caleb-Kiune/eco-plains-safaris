// src/components/safaris/SafariCard/SafariCard.jsx
import React from 'react';
import './SafariCard.css';

const SafariCard = ({ safari, onOpenModal, animationDelay }) => {
  return (
    <article className="safari-card" style={{ animationDelay }}>
      {/* Make entire card clickable */}
      <div
        className="safari-card__link"
        onClick={() => onOpenModal(safari)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onOpenModal(safari)}
        aria-label={`View details for ${safari.title}`}
      >
        <div className="safari-card__image-wrapper">
          <img
            src={safari.image}
            alt={`${safari.title} in ${safari.location}`}
            className="safari-card__image"
            loading="lazy"
          />
          <div className="safari-card__overlay">
            <h3 className="safari-card__title">{safari.title}</h3>
            <p className="safari-card__location">{safari.location}</p>
          </div>
        </div>

        <div className="safari-card__content">
          <div className="safari-card__details">
            <span className="safari-card__duration">{safari.duration}</span>
            <span className="safari-card__price">
              From <strong>${safari.price.toLocaleString()}</strong> pp
            </span>
          </div>

          <button
            className="safari-card__button"
            onClick={(e) => {
              e.stopPropagation(); 
              onOpenModal(safari);
            }}
          >
            View Details
            <span className="safari-card__button-arrow">→</span>
          </button>
        </div>
      </div>
    </article>
  );
};

export default SafariCard;