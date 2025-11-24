// src/components/safaris/SafariDetailsModal.jsx
import React, { useState, useEffect } from 'react';
import './SafariDetailsModal.css';

const SafariDetailsModal = ({ safari, isOpen, onClose }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    return () => document.body.style.overflow = 'unset';
  }, [isOpen]);

  if (!isOpen || !safari) return null;

  const allImages = [safari.primaryImage, ...safari.secondaryImages];
  const price = safari.price_adult
    ? new Intl.NumberFormat('en-US', { style: 'currency', currency: safari.currency || 'USD' }).format(safari.price_adult)
    : 'Rate on request';

  return (
    <div className={`safari-modal ${isOpen ? 'safari-modal--open' : ''}`} onClick={onClose}>
      <div className="safari-modal__content" onClick={e => e.stopPropagation()}>
        <button className="safari-modal__close" onClick={onClose} aria-label="Close">×</button>

        <div className="safari-modal__grid">
          {/* Gallery */}
          <div className="safari-modal__gallery">
            <div className="safari-modal__image-wrapper">
              <img
                src={allImages[activeImageIndex]}
                alt={safari.title}
                className="safari-modal__image"
              />
              {allImages.length > 1 && (
                <>
                  <button className="safari-modal__nav safari-modal__nav--prev" onClick={() => setActiveImageIndex(i => (i - 1 + allImages.length) % allImages.length)}>‹</button>
                  <button className="safari-modal__nav safari-modal__nav--next" onClick={() => setActiveImageIndex(i => (i + 1) % allImages.length)}>›</button>
                  <div className="safari-modal__dots">
                    {allImages.map((_, i) => (
                      <button
                        key={i}
                        className={`safari-modal__dot ${i === activeImageIndex ? 'active' : ''}`}
                        onClick={() => setActiveImageIndex(i)}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Info */}
          <div className="safari-modal__info">
            <div className="safari-modal__header">
              <h1 className="safari-modal__title">{safari.title}</h1>
              <p className="safari-modal__location">{safari.destination}</p>
            </div>

            <div className="safari-modal__meta">
              <div className="safari-modal__duration">{safari.duration}</div>
              <div className="safari-modal__price">
                From <strong>{price}</strong>
                {safari.price_note && <small className="block opacity-80 mt-1">{safari.price_note}</small>}
              </div>
            </div>

            <div className="safari-modal__highlights">
              <h3 className="safari-modal__subtitle">What’s Included</h3>
              <ul className="safari-modal__highlight-list">
                {safari.inclusions.map((inc, i) => (
                  <li key={i} className="safari-modal__highlight">{inc}</li>
                ))}
              </ul>
            </div>

            <div className="safari-modal__actions">
              <a href={`https://wa.me/254769122507?text=Hi,%20I'd%20like%20to%20book:%20${encodeURIComponent(safari.title)}`} target="_blank" rel="noopener noreferrer" className="safari-modal__btn safari-modal__btn--primary">
                Book via WhatsApp
              </a>
              <button onClick={onClose} className="safari-modal__btn safari-modal__btn--secondary">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafariDetailsModal;