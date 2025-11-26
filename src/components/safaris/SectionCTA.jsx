// src/components/safaris/SectionCTA.jsx
import React from "react";
import LuxuryButton from "../common/LuxuryButton";
import "./SectionCTA.css";

export default function SectionCTA() {
  return (
    <section className="section-cta" aria-labelledby="cta-headline">
      <div className="section-cta__container">
        <h2 id="cta-headline" className="section-cta__headline">
          Not sure which journey is perfect for you?
        </h2>
        <p className="section-cta__subheadline">
          Our safari specialists are here to help you craft an unforgettable experience tailored to your desires.
        </p>

        <LuxuryButton
          href="/contact"
          variant="filled"
          className="section-cta__button"
        >
          Speak to a Safari Specialist
        </LuxuryButton>

        <div className="section-cta__contact-info">
          <a href="tel:+25469122507" className="section-cta__contact-link">+254 691 225 07</a>
          <span className="section-cta__separator">•</span>
          <a href="mailto:ecoplainsafaris@gmail.com" className="section-cta__contact-link">ecoplainsafaris@gmail.com</a>
        </div>
      </div>
    </section>
  );
}