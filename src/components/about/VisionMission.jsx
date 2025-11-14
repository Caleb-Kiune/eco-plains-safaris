// src/components/about/VisionMission.jsx
import React, { useEffect, useRef } from 'react';
import './VisionMission.css';

export default function VisionMission() {
  const sectionRef = useRef(null);

  // Intersection Observer for fade-in on scroll
  useEffect(() => {
    const currentSection = sectionRef.current;
    if (!currentSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(currentSection);

    return () => observer.unobserve(currentSection);
  }, []);

  return (
    <section
      className="vision-mission"
      ref={sectionRef}
      aria-labelledby="vision-mission-heading"
    >
      <div className="vision-mission__container">
        {/* Section Headline */}
        <h2 id="vision-mission-heading" className="vision-mission__headline">
          Vision & Mission
        </h2>

        {/* Vision: Image Left, Text Right */}
        <div className="vision-mission__row vision-mission__row--vision">
          <div className="vision-mission__image-wrapper">
            <img
              src="/kenya-destination-image.jpg"
              alt="Kenya wilderness landscape"
              className="vision-mission__image"
            />
          </div>
          <div className="vision-mission__content">
            <h3 className="vision-mission__title">Vision</h3>
            <p className="vision-mission__text">
              To redefine luxury travel in Africa through bespoke eco-safari
              experiences that harmonize indulgence, conservation, and cultural
              authenticity — inspiring a new standard of sustainable elegance.
            </p>
          </div>
        </div>

        {/* Mission: Image Right, Text Left (alternating) */}
        <div className="vision-mission__row vision-mission__row--mission">
          <div className="vision-mission__content">
            <h3 className="vision-mission__title">Mission</h3>
            <p className="vision-mission__text">
              Ecoplain Safari curates exceptional, tailor-made journeys that
              immerse discerning travelers in Africa’s untouched wilderness. We
              combine world-class comfort with eco-conscious practices,
              championing wildlife conservation, community empowerment, and a
              lasting legacy of responsible luxury.
            </p>
          </div>
          <div className="vision-mission__image-wrapper">
            <img
              src="/kenya-destination-image.jpg"
              alt="Kenya wilderness landscape"
              className="vision-mission__image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}