// src/components/safaris/BottomCTA.jsx
import React from "react";
import LuxuryButton from "../common/LuxuryButton";
import "./BottomCTA.css";

export default function BottomCTA() {
  return (
    <section className="bottom-cta" aria-labelledby="bottom-cta-headline">
      <div
        className="bottom-cta__bg-image"
        aria-hidden="true"
        style={{ backgroundImage: "url('https://res.cloudinary.com/dy082ykuf/image/upload/q_auto,f_auto,w_auto,dpr_auto/v1/eco-plains-safaris/tanzania-destination-image')" }}
      />
      <div className="bottom-cta__overlay" />

      <div className="bottom-cta__content">
        <h2 id="bottom-cta-headline" className="bottom-cta__headline">
          Your African Story Begins Here
        </h2>
        <p className="bottom-cta__subheadline">
          Every extraordinary journey starts with a single conversation.
        </p>

        <LuxuryButton
          href="/contact"
          variant="filled"
          className="bottom-cta__button"
        >
          Begin Your Journey
        </LuxuryButton>

        <div className="bottom-cta__trust-badges">
          <span>100% tailor-made</span>
          <span className="bottom-cta__separator">•</span>
          <span>Personally vetted lodges</span>
          <span className="bottom-cta__separator">•</span>
          <span>24/7 support</span>
        </div>
      </div>
    </section>
  );
}