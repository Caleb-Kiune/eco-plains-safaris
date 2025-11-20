// src/components/sections/SectionCTA.jsx
import React from "react";
import "./SectionCTA.css";

export default function SectionCTA() {
  return (
    <section className="section-cta" aria-labelledby="cta-headline">
      {/* Text Side */}
      <div className="section-cta__text">
        <h2 id="cta-headline" className="section-cta__headline">
          Where Luxury Meets the Wild
        </h2>
        <p className="section-cta__subheadline">
          Handcrafted journeys across Africa’s most exclusive reserves — 
          intimate wildlife encounters, unrivalled comfort, timeless elegance.
        </p>
        <a href="/safaris" className="section-cta__button">
          Plan Your Safari
        </a>
      </div>

      {/* Image Side */}
      <div className="section-cta__image-wrapper">
        <img
          src="/images/tanzania-destination-image.jpg"
          alt="Golden light over the Serengeti — a lone acacia tree and distant wildebeest migration"
          className="section-cta__image"
          loading="lazy"
        />
      </div>
    </section>
  );
}