// src/components/safaris/SafariDetailsModal.jsx
import React, { useState, useEffect } from 'react';
import './SafariDetailsModal.css';

const SafariDetailsModal = ({ safari, isOpen, onClose }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  const nextImage = () =>
    setActiveImageIndex((i) => (i + 1) % safari.images.length);
  const prevImage = () =>
    setActiveImageIndex((i) => (i - 1 + safari.images.length) % safari.images.length);

  if (!isOpen || !safari) return null;

  return (
    <div
      className={`safari-modal ${isOpen ? 'safari-modal--open' : ''}`}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label={`${safari.title} details`}
    >
      <div className="safari-modal__content" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          className="safari-modal__close"
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>

        <div className="safari-modal__grid">
          {/* LEFT: Image Gallery */}
          <div className="safari-modal__gallery">
            <div className="safari-modal__image-wrapper">
              <img
                src={safari.images[activeImageIndex]}
                alt={`${safari.title} in ${safari.location}`}
                className="safari-modal__image"
              />
              {safari.images.length > 1 && (
                <>
                  <button
                    className="safari-modal__nav safari-modal__nav--prev"
                    onClick={prevImage}
                    aria-label="Previous image"
                  >
                    ‹
                  </button>
                  <button
                    className="safari-modal__nav safari-modal__nav--next"
                    onClick={nextImage}
                    aria-label="Next image"
                  >
                    ›
                  </button>
                  <div className="safari-modal__dots">
                    {safari.images.map((_, i) => (
                      <button
                        key={i}
                        className={`safari-modal__dot ${i === activeImageIndex ? 'active' : ''}`}
                        onClick={() => setActiveImageIndex(i)}
                        aria-label={`View image ${i + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* RIGHT: Info */}
          <div className="safari-modal__info">
            <div className="safari-modal__header">
              <h1 className="safari-modal__title">{safari.title}</h1>
              <p className="safari-modal__location">{safari.location}</p>
            </div>

            <div className="safari-modal__meta">
              <div className="safari-modal__duration">{safari.duration}</div>
              <div className="safari-modal__price">
                From <strong>${safari.price.toLocaleString()}</strong> pp
              </div>
            </div>

            <div className="safari-modal__highlights">
              <h3 className="safari-modal__subtitle">Highlights</h3>
              <ul className="safari-modal__highlight-list">
                {safari.experiences.map((exp, i) => (
                  <li key={i} className="safari-modal__highlight">{exp}</li>
                ))}
              </ul>
            </div>

            <div className="safari-modal__description">
              <h3 className="safari-modal__subtitle">Overview</h3>
              <p>{safari.description}</p>
            </div>

            <div className="safari-modal__actions">
              <a href={safari.link} className="safari-modal__btn safari-modal__btn--primary">
                Book This Safari
              </a>
              <button className="safari-modal__btn safari-modal__btn--secondary">
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafariDetailsModal;
