import React from "react";
import "./SectionCTA.css";
import { CONTACT_INFO } from '../../utils/contact';
import { Link } from "react-router-dom"; // Assuming Link is from react-router-dom

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

        <div className="section-cta__actions">
          <Link to="/contact" className="section-cta__button">
            Plan Your Safari
          </Link>
          <a href={CONTACT_INFO.phoneLink} className="section-cta__contact-link">{CONTACT_INFO.phoneDisplay}</a>
          <span className="section-cta__separator">•</span>
          <a href="mailto:ecoplainsafaris@gmail.com" className="section-cta__contact-link">ecoplainsafaris@gmail.com</a>
        </div>
      </div>
    </section>
  );
}