// src/components/safaris/SafariGrid/SafariGrid.jsx
import React from 'react';
import SafariCard from './SafariCard';
import './SafariGrid.css';

const SafariGrid = ({ safaris }) => {
  return (
    <section className="safari-grid">
      <div className="safari-grid__inner">
        {safaris.map((safari, index) => (
          <SafariCard
            key={safari.id || index}
            safari={safari}
            animationDelay={`${index * 0.15}s`}
          />
        ))}
      </div>
    </section>
  );
};

export default SafariGrid;