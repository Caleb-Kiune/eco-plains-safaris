// src/pages/SafariDetailsPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './SafariDetailsPage.css';

const SafariDetailsPage = () => {
  const { slug } = useParams();
  const [safari, setSafari] = useState(null);

  useEffect(() => {
    // Simulate fetching data
    fetch('/data/safaris.json')
      .then(res => res.json())
      .then(data => {
        const found = data.tours.find(t => t.slug === slug || t.link?.includes(slug));
        setSafari(found);
      })
      .catch(err => console.error("Failed to load safari details", err));
  }, [slug]);

  if (!safari) return <div className="loading">Loading...</div>;

  // Format price
  const formattedPrice = safari.price_adult
    ? new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: safari.currency || 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(safari.price_adult)
    : 'Rate on request';

  return (
    <div className="safari-details-page">
      {/* Hero Section */}
      <header className="details-hero">
        <img
          src={safari.primaryImage}
          alt={safari.title}
          className="details-hero__image"
        />
        <div className="details-hero__overlay" />
        <div className="details-hero__content">
          <div className="details-hero__location">
            <span>📍</span> {safari.destination}
          </div>
          <h1 className="details-hero__title">{safari.title}</h1>
        </div>
      </header>

      {/* Sticky Booking Bar */}
      <div className="booking-bar">
        <div className="booking-bar__inner">
          <div className="booking-bar__info">
            <div className="booking-info-item">
              <label>Duration</label>
              <span>{safari.duration}</span>
            </div>
            <div className="booking-info-item">
              <label>Starting From</label>
              <span>{formattedPrice}</span>
            </div>
          </div>
          <div className="booking-bar__actions">
            <button className="btn-book-now">Inquire Now</button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="details-content">
        <div className="details-main">
          <h2>The Experience</h2>
          {/* Fallback for missing description: Use a generic inviting text based on destination */}
          <p className="details-description">
            Embark on an unforgettable journey through {safari.destination}.
            This curated experience offers a perfect blend of adventure, luxury, and immersion into the wild.
            Witness breathtaking landscapes, encounter majestic wildlife, and create memories that will last a lifetime.
          </p>

          <div className="details-highlights">
            <h3>Highlights & Inclusions</h3>
            <div className="highlights-grid">
              {safari.inclusions?.map((inc, i) => (
                <div key={i} className="highlight-item">
                  <span className="highlight-icon">✦</span>
                  <span>{inc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="details-sidebar">
          <div className="sidebar-card">
            <h3 className="sidebar-title">At a Glance</h3>
            <ul className="inclusions-list">
              <li><strong>Code:</strong> {safari.code}</li>
              <li><strong>Category:</strong> {safari.category}</li>
              <li><strong>Validity:</strong> {safari.validity}</li>
              {safari.price_note && <li><strong>Note:</strong> {safari.price_note}</li>}
            </ul>
          </div>

          <div className="sidebar-card">
            <h3 className="sidebar-title">Exclusions</h3>
            <ul className="inclusions-list" style={{ listStyle: 'none', padding: 0 }}>
              {safari.exclusions?.map((exc, i) => (
                <li key={i} style={{ paddingLeft: '0', marginBottom: '8px', color: 'var(--color-text-light)' }}>
                  • {exc}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </main>

      {/* Gallery */}
      {safari.secondaryImages && safari.secondaryImages.length > 0 && (
        <section className="details-gallery">
          <h2 className="gallery-title">Visual Journey</h2>
          <div className="gallery-grid">
            {safari.secondaryImages.map((img, i) => (
              <div key={i} className="gallery-item">
                <img src={img} alt={`${safari.title} gallery ${i + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default SafariDetailsPage;