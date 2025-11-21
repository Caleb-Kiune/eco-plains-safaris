// src/components/home/WhyChooseUs.jsx
import React from 'react';
import './WhyChooseUs.css';

const reasons = [
  {
    icon: '/icons/bespoke-safari.svg',
    title: 'Bespoke Safari Journeys',
    description: 'Tailored itineraries crafted by experts to match your vision of the perfect African adventure.',
  },
  {
    icon: '/icons/expert-guides.svg',
    title: 'World-Class Guides',
    description: 'Passionate naturalists and storytellers with decades of experience in East Africa’s wild heart.',
  },
  {
    icon: '/icons/eco-luxury.svg',
    title: 'Eco-Luxury Stays',
    description: 'Intimate, sustainable lodges blending barefoot luxury with conservation impact.',
  },
  {
    icon: '/icons/concierge.svg',
    title: 'Private Concierge',
    description: '24/7 personal support from booking to bush, ensuring every detail is flawless.',
  },
  {
    icon: '/icons/sustainable.svg',
    title: 'Responsible Travel',
    description: 'Carbon-neutral safaris supporting local communities and wildlife protection.',
  },
  {
    icon: '/icons/exclusive-access.svg',
    title: 'Exclusive Access',
    description: 'Private conservancies, off-grid camps, and once-in-a-lifetime wildlife encounters.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why" aria-labelledby="why-heading">
      {/* Subtle top divider for visual separation */}
      <div className="why__divider" aria-hidden="true" />

      <div className="why__inner">
        <header className="why__header">
          <h2 id="why-heading" className="why__title">
            Why Choose Eco Plains Safaris
          </h2>
        </header>

        <div className="why__grid">
          {reasons.map((reason, index) => (
            <article
              key={index}
              className="why__card"
              tabIndex={0}
              aria-labelledby={`why-title-${index}`}
            >
              <div className="why__icon-wrapper">
                <img
                  src={reason.icon}
                  alt=""
                  className="why__icon"
                  width="48"
                  height="48"
                  loading="lazy"
                />
              </div>

              <h3 id={`why-title-${index}`} className="why__card-title">
                {reason.title}
              </h3>

              <p className="why__card-text">{reason.description}</p>

              {/* Gold accent line – appears on hover/focus */}
              <div className="why__line" aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}