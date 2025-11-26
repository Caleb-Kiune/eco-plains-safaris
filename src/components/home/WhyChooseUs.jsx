// src/components/home/WhyChooseUs.jsx
import React from 'react';
import LuxuryButton from '../common/LuxuryButton';
import './WhyChooseUs.css';

const reasons = [
  "Bespoke itineraries tailored to your vision",
  "Private conservancies away from the crowds",
  "World-class guides and naturalists",
  "Hand-picked eco-luxury lodges",
  "Seamless 24/7 personal concierge",
  "Commitment to conservation & community"
];

export default function WhyChooseUs() {
  return (
    <section className="why-choose-us" aria-labelledby="why-heading">
      <div
        className="why-choose-us__bg"
        aria-hidden="true"
        style={{ backgroundImage: "url('/images/serengeti balloon dawn.jpg')" }}
      />
      <div className="why-choose-us__overlay" />

      <div className="why-choose-us__content">
        <h2 id="why-heading" className="why-choose-us__title">
          Why Discerning Travellers Choose Us
        </h2>

        <p className="why-choose-us__subtitle">
          We don't just plan safaris; we curate life-changing journeys into the heart of the wild,
          where luxury meets the untamed.
        </p>

        <ul className="why-choose-us__list">
          {reasons.map((reason, index) => (
            <li key={index} className="why-choose-us__item">
              <span className="why-choose-us__bullet">•</span>
              {reason}
            </li>
          ))}
        </ul>

        <LuxuryButton
          href="/contact"
          variant="filled"
          className="why-choose-us__button"
        >
          Begin Your Private Journey
        </LuxuryButton>
      </div>
    </section>
  );
}