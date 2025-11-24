// src/components/safaris/SafariDetailsModal.jsx
import React, { useState } from 'react';
import './SafariDetailsModal.css';

const SafariDetailsModal = ({ safari, onClose }) => {
  const [activeImage, setActiveImage] = useState(0);
  const images = safari.images || [safari.image];

  if (!safari) return null;

  const nextImage = (e) => {
    e.stopPropagation();
    setActiveImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setActiveImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          ×
        </button>

        {/* Gallery Section */}
        <div className="modal-gallery">
          <img
            src={images[activeImage]}
            alt={`${safari.title} view ${activeImage + 1}`}
            className="modal-main-image"
          />

          {images.length > 1 && (
            <>
              <button className="gallery-arrow prev" onClick={prevImage}>‹</button>
              <button className="gallery-arrow next" onClick={nextImage}>›</button>

              <div className="gallery-nav">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    className={`gallery-dot ${idx === activeImage ? 'active' : ''}`}
                    onClick={() => setActiveImage(idx)}
                    aria-label={`Go to image ${idx + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Info Section */}
        <div className="modal-info">
          <div className="modal-header">
            <h2 className="modal-title">{safari.title}</h2>
            <p className="modal-location">{safari.location}</p>
          </div>

          <div className="modal-details-grid">
            <div className="detail-item">
              <label>Duration</label>
              <span>{safari.duration}</span>
            </div>
            <div className="detail-item price">
              <label>Starting From</label>
              <span>${safari.price?.toLocaleString()}</span>
            </div>
          </div>

          <div className="modal-description">
            <p>{safari.description}</p>
          </div>

          <div className="modal-inclusions">
            <h4>Experience Highlights</h4>
            <ul className="inclusions-list">
              {safari.experiences?.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="modal-actions">
            <button className="btn-book">Request Booking</button>
            <button className="btn-download">Download Itinerary</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafariDetailsModal;