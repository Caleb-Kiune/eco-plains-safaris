// src/components/safaris/FeaturedSafaris.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedSafaris.css';

export default function FeaturedSafaris({ safaris }) {
  // Filter only featured ones
  const featured = safaris.filter(s => s.featured === true);

  if (featured.length === 0) return null;

  return (
    <section className="featured-safaris" aria-labelledby="featured-title">
      <div className="featured-safaris__header">
        <h2 id="featured-title" className="featured-safaris__title">
          Featured Safaris
        </h2>
        <p className="featured-safaris__subtitle">
          Our handpicked top-rated safari experiences
        </p>
      </div>

      <div className="featured-safaris__grid">
        {featured.map((safari) => {
          const slug = safari.link.replace('/safaris/', '');

          return (
            <article key={safari.id} className="featured-card">
              <Link to={`/safaris/${slug}`} className="featured-card__link">
                <div className="featured-card__image-wrapper">
                  <img
                    src={safari.image || safari.images[0]}
                    alt={`${safari.title} in ${safari.location}`}
                    className="featured-card__image"
                    loading="lazy"
                  />
                  <div className="featured-card__overlay" />
                </div>

                <div className="featured-card__content">
                  <h3 className="featured-card__title">{safari.title}</h3>
                  <p className="featured-card__location">{safari.location}</p>

                  <div className="featured-card__meta">
                    <span>{safari.duration}</span>
                    <span className="featured-card__price">
                      From <strong>${safari.price.toLocaleString()}</strong> pp
                    </span>
                  </div>

                  <ul className="featured-card__highlights">
                    {safari.experiences.slice(0, 4).map((exp, i) => (
                      <li key={i}>{exp}</li>
                    ))}
                  </ul>

                  <button className="featured-card__cta">
                    View Details →
                  </button>
                </div>
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}