// src/components/SafariGrid/SafariGrid.jsx
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
            title={safari.title}
            location={safari.location}
            image={safari.image}
            duration={safari.duration}
            price={safari.price}
            link={safari.link}
            style={{ animationDelay: `${index * 0.15}s` }}
          />
        ))}
      </div>
    </section>
  );
};

export default SafariGrid;