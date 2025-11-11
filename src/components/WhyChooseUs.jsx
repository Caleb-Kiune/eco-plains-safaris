// src/components/WhyChooseUs.jsx
import React from 'react';
import './WhyChooseUs.css';

const reasons = [
  {
    icon: '/icons/bespoke-safari.svg',
    title: 'Bespoke Safari Journeys',
    description:
      'Tailored itineraries crafted by experts to match your vision of the perfect African adventure.',
  },
  {
    icon: '/icons/expert-guides.svg',
    title: 'World-Class Guides',
    description:
      'Passionate naturalists and storytellers with decades of experience in East Africa’s wild heart.',
  },
  {
    icon: '/icons/eco-luxury.svg',
    title: 'Eco-Luxury Stays',
    description:
      'Intimate, sustainable lodges blending barefoot luxury with conservation impact.',
  },
  {
    icon: '/icons/concierge.svg',
    title: 'Private Concierge',
    description:
      '24/7 personal support from booking to bush, ensuring every detail is flawless.',
  },
  {
    icon: '/icons/sustainable.svg',
    title: 'Responsible Travel',
    description:
      'Carbon-neutral safaris supporting local communities and wildlife protection.',
  },
  {
    icon: '/icons/exclusive-access.svg',
    title: 'Exclusive Access',
    description:
      'Private conservancies, off-grid camps, and once-in-a-lifetime wildlife encounters.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why-section" aria-labelledby="why-headline">
      <div className="why-container">
        <header className="why-header">
          <h2 id="why-headline" className="why-headline">
            Why Choose Us
          </h2>
        </header>

        <div className="why-grid">
          {reasons.map((reason, index) => (
            /* eslint-disable-next-line jsx-a11y/no-redundant-roles */
            <article
              key={index}
              className="why-card"
              // role="article" removed – <article> already has the role
              aria-labelledby={`reason-title-${index}`}
            >
              <div className="why-icon-wrapper">
                <img
                  src={reason.icon}
                  alt=""
                  className="why-icon"
                  loading="lazy"
                  width="48"
                  height="48"
                />
              </div>

              <h3 id={`reason-title-${index}`} className="why-card-title">
                {reason.title}
              </h3>

              <p className="why-card-text">{reason.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}