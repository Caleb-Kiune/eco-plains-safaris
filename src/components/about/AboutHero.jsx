// src/components/about/AboutHero.jsx
import React from 'react';
import './AboutHero.css';

export default function AboutHero() {
  return (
    <section className="about-hero">
      {/* Ken Burns Image */}
      <div className="about-hero__image-wrapper">
        <img
          src="/images/about hero image.jpg"
          alt="Eco Plains Safaris - Crafted by Insiders"
          className="about-hero__image"
        />
      </div>

      {/* Dark Luxe Overlay */}
      <div className="about-hero__overlay" />

      {/* Centered Content */}
      <div className="about-hero__content">
        <div className="about-hero__gold-line" />

        <h1 className="about-hero__headline">
          Crafted by Insiders, for Discerning Travellers
        </h1>

        <p className="about-hero__subheadline">
          Every journey is privately designed by those who have lived and breathed East Africa for decades.
        </p>
      </div>
    </section>
  );
}