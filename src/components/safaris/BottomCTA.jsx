// src/components/safaris/BottomCTA.jsx
import React from "react";
import "./BottomCTA.css";

export default function BottomCTA() {
  return (
    <section className="bottom-cta" aria-labelledby="bottom-cta-headline">
      <div className="bottom-cta__bg-image" aria-hidden="true" />
      <div className="bottom-cta__overlay" />

      <div className="bottom-cta__content">
        <h2 id="bottom-cta-headline" className="bottom-cta__headline">
          Your Adventure Awaits
        </h2>

        <a href="/safaris" className="bottom-cta__button">
          Begin Your Journey
        </a>
      </div>
    </section>
  );
}