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
        const found = data.tours.find(t => t.slug === slug || t.link.includes(slug));
        setSafari(found);
      })
      .catch(err => console.error("Failed to load safari details", err));
  }, [slug]);

  if (!safari) return <div className="loading">Loading...</div>;

  return (
    <div className="safari-details-page">
      {/* Hero Section */}
      <header className="details-hero">
        <img
          src={safari.primaryImage || safari.images?.[0]}
          alt={safari.title}
          className="details-hero__image"
        />
        <div className="details-hero__overlay" />
        <div className="details-hero__content">
          <h1 className="details-hero__title">{safari.title}</h1>
          <div className="details-hero__location">
            <span>📍</span> {safari.destination}
          </div>
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
              <label>Price</label>
              <span>${safari.price_adult?.toLocaleString()}</span>
            </div>
          </div>
          <div className="booking-bar__actions">
            <button className="btn-book-now">Book Now</button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="details-content">
        <div className="details-main">
          <h2>Overview</h2>
          <p className="details-description">{safari.description}</p>

          <div className="details-highlights">
            <h3>Highlights</h3>
            <div className="highlights-grid">
              {safari.experiences?.map((exp, i) => (
                <div key={i} className="highlight-item">
                  <span className="highlight-icon">✦</span>
                  <span>{exp}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="details-sidebar">
          <div className="sidebar-card">
            <h3 className="sidebar-title">What's Included</h3>
            <ul className="inclusions-list">
              {safari.inclusions?.map((inc, i) => (
                <li key={i}>{inc}</li>
              ))}
            </ul>
          </div>
        </aside>
      </main>

      {/* Gallery */}
      {safari.images && safari.images.length > 0 && (
        <section className="details-gallery">
          <div className="gallery-grid">
            {safari.images.slice(0, 3).map((img, i) => (
              <div key={i} className="gallery-item">
                <img src={img} alt={`Gallery ${i + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default SafariDetailsPage;