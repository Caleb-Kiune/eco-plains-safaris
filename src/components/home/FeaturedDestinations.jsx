// src/components/FeaturedDestinations.jsx
import React from 'react';
import './FeaturedDestinations.css';

export default function FeaturedDestinations() {
  const destinations = [
    { name: 'Kenya', image: '/kenya-destination-image.jpg' },
    { name: 'Uganda', image: '/uganda-destination-image.jpg' },
    { name: 'Tanzania', image: '/tanzania-destination-image.jpg' },
    { name: 'Rwanda', image: '/rwanda-destination-image.jpg' },
  ];

  return (
    <section className="destinations-section">
      <div className="destinations-container">
        <h2 className="destinations-headline">Featured Destinations</h2>

        <div className="destinations-grid">
          {destinations.map((dest, index) => (
            <article
              key={dest.name}
              className="destination-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <a href={`#${dest.name.toLowerCase()}`} className="destination-link">
                <div className="card-image-wrapper">
                  <img
                    src={dest.image}
                    alt={`${dest.name} luxury safari destination`}
                    className="card-image"
                  />
                  <div className="card-overlay"></div>
                  <div className="card-content">
                    <h3 className="card-title">{dest.name}</h3>
                    <span className="card-explore">Explore</span>
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}