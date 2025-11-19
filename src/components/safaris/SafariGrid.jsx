// src/components/safaris/SafariGrid/SafariGrid.jsx
import React, { useState } from 'react';
import SafariCard from './SafariCard';
import SafariDetailsModal from './SafariDetailsModal';
import './SafariGrid.css';

const SafariGrid = ({ safaris }) => {
  const [selectedSafari, setSelectedSafari] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (safari) => {
    setSelectedSafari(safari);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSafari(null);
  };

  return (
    <>
      <section className="safari-grid">
        <div className="safari-grid__inner">
          {safaris.map((safari, index) => (
            <SafariCard
              key={safari.id || index}
              safari={safari}              
              onOpenModal={openModal}    
              animationDelay={`${index * 0.15}s`}
            />
          ))}
        </div>
      </section>

      {/* Luxury Modal */}
      <SafariDetailsModal
        safari={selectedSafari}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
};

export default SafariGrid;