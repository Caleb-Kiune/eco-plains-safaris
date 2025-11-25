// src/components/home/FeaturedSafarisCarousel.jsx
import React, { useState, useEffect } from 'react';
import FeaturedSafariCard from './FeaturedSafariCard';
import './FeaturedSafarisCarousel.css';

export default function FeaturedSafarisCarousel() {
  const [safaris, setSafaris] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    fetch('/data/safaris.json')
      .then(res => res.json())
      .then(data => setSafaris(data.tours.filter(t => t.featured)))
      .catch(() => setSafaris([]));
  }, []);

  // Responsive slides per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerView(3);
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (safaris.length === 0) return null;

  const maxIndex = Math.max(0, safaris.length - slidesPerView);
  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < maxIndex;

  const handlePrev = () => {
    if (canGoPrev) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const handleNext = () => {
    if (canGoNext) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handleDotClick = (index) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  // Calculate transform based on current index
  const getTransform = () => {
    if (slidesPerView === 1) {
      // Mobile: 100% width + 1rem gap
      return `translateX(-${currentIndex * 100}%)`;
    } else if (slidesPerView === 2) {
      // Tablet: calc(50% - 0.75rem) width + 1.5rem gap
      // Each slide moves by 50% + half gap (0.75rem)
      return `translateX(calc(-${currentIndex * 50}% - ${currentIndex * 0.75}rem))`;
    } else {
      // Desktop: calc((100% - 4rem) / 3) width + 2rem gap
      // Each slide moves by 33.333% + (2rem * index / 3)
      return `translateX(calc(-${currentIndex * 33.333}% - ${currentIndex * 2}rem))`;
    }
  };

  // Generate dots for pagination
  const totalDots = maxIndex + 1;
  const dots = Array.from({ length: totalDots }, (_, i) => i);

  return (
    <section className="featured-safaris">
      <div className="featured-safaris__container">
        <header className="featured-safaris__header">
          <h2 className="featured-safaris__title">
            Curated Safari Journeys
          </h2>
          <p className="featured-safaris__subtitle">
            Handpicked experiences for the discerning traveler, designed to immerse you in the untamed beauty of Africa.
          </p>
        </header>

        <div className="featured-safaris__carousel-wrapper">
          <button
            className={`featured-safaris__nav-btn featured-safaris__nav-btn--prev ${!canGoPrev ? 'featured-safaris__nav-btn--disabled' : ''}`}
            onClick={handlePrev}
            disabled={!canGoPrev}
            aria-label="Previous safari"
          >
            ←
          </button>
          <button
            className={`featured-safaris__nav-btn featured-safaris__nav-btn--next ${!canGoNext ? 'featured-safaris__nav-btn--disabled' : ''}`}
            onClick={handleNext}
            disabled={!canGoNext}
            aria-label="Next safari"
          >
            →
          </button>

          <div className="featured-safaris__viewport">
            <div
              className="featured-safaris__track"
              style={{ transform: getTransform() }}
            >
              {safaris.map((safari, index) => (
                <div key={safari.id} className="featured-safaris__slide">
                  <FeaturedSafariCard safari={safari} index={index} />
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          {totalDots > 1 && (
            <div className="featured-safaris__pagination">
              {dots.map((dot) => (
                <button
                  key={dot}
                  className={`featured-safaris-bullet ${dot === currentIndex ? 'featured-safaris-bullet-active' : ''}`}
                  onClick={() => handleDotClick(dot)}
                  aria-label={`Go to slide ${dot + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}