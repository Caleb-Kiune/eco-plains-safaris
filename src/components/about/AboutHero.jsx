// src/components/about/AboutHero.jsx
import React from 'react';
import LuxuryHero from '../common/LuxuryHero';

export default function AboutHero() {
  return (
    <LuxuryHero
      title="Our Story, Your Adventure"
      subtitle="Two decades of passion for Africa's wilderness, one commitment to conservation"
      backgroundVideo="/black-tomato-mob-home.mp4"
      ctaText="Meet The Team"
      ctaLink="#team"
      align="left"
    />
  );
}