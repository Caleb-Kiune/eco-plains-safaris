// src/components/home/FeaturedSafarisCarousel.jsx
import React, { useState, useEffect, useRef, useCallback } from 'react';
import SafariCard from '../safaris/SafariCard'; // USE THE SAME CARD!
import SectionTitle from '../common/SectionTitle';
import './FeaturedSafarisCarousel.css';

export default function FeaturedSafarisCarousel() {
  const [safaris, setSafaris] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [isDragging, setIsDragging] = useState(false);

  const trackRef = useRef(null);
  const startX = useRef(0);
  const currentTranslate = useRef(0);
  const prevTranslate = useRef(0);
  const animationID = useRef(0);
  const startTime = useRef(0);

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

  const maxIndex = Math.max(0, safaris.length - slidesPerView);

  const getSlideTransform = useCallback((index) => {
    if (slidesPerView === 1) {
      return -index * 100;
    } else if (slidesPerView === 2) {
      return -index * 50 - index * 0.75;
    } else {
      return -index * 33.333 - index * 0.667;
    }
  }, [slidesPerView]);

  const setSliderPosition = useCallback(() => {
    if (trackRef.current) {
      const percentTranslate = getSlideTransform(currentIndex);
      if (slidesPerView === 1) {
        trackRef.current.style.transform = `translateX(${percentTranslate}%)`;
      } else if (slidesPerView === 2) {
        trackRef.current.style.transform = `translateX(calc(${percentTranslate}% - ${currentIndex * 0.75}rem))`;
      } else {
        trackRef.current.style.transform = `translateX(calc(${percentTranslate}% - ${currentIndex * 2}rem))`;
      }
    }
  }, [currentIndex, slidesPerView, getSlideTransform]);

  useEffect(() => {
    setSliderPosition();
  }, [setSliderPosition]);

  if (safaris.length === 0) return null;

  const slideTo = (index) => {
    const clampedIndex = Math.max(0, Math.min(index, maxIndex));
    setCurrentIndex(clampedIndex);
  };

  const getPositionX = (event) => {
    return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
  };

  const touchStart = (index) => {
    return (event) => {
      setIsDragging(true);
      startX.current = getPositionX(event);
      startTime.current = Date.now();
      animationID.current = requestAnimationFrame(() => animation());

      if (trackRef.current) {
        trackRef.current.classList.add('dragging');
      }
    };
  };

  const touchMove = (event) => {
    if (isDragging) {
      const currentPosition = getPositionX(event);
      const diff = currentPosition - startX.current;
      currentTranslate.current = prevTranslate.current + diff;

      if (event.cancelable) {
        event.preventDefault();
      }
    }
  };

  const touchEnd = () => {
    if (!isDragging) return;

    setIsDragging(false);
    cancelAnimationFrame(animationID.current);

    if (trackRef.current) {
      trackRef.current.classList.remove('dragging');
    }

    const movedBy = currentTranslate.current - prevTranslate.current;
    const moveTime = Date.now() - startTime.current;
    const velocity = Math.abs(movedBy / moveTime);

    if (Math.abs(movedBy) > 50 || velocity > 0.5) {
      if (movedBy < 0 && currentIndex < maxIndex) {
        slideTo(currentIndex + 1);
      } else if (movedBy > 0 && currentIndex > 0) {
        slideTo(currentIndex - 1);
      } else {
        slideTo(currentIndex);
      }
    } else {
      slideTo(currentIndex);
    }

    currentTranslate.current = 0;
    prevTranslate.current = 0;
  };

  const animation = () => {
    if (trackRef.current && isDragging) {
      const percentTranslate = getSlideTransform(currentIndex);
      const dragOffset = (currentTranslate.current - prevTranslate.current) / window.innerWidth * 100;

      if (slidesPerView === 1) {
        trackRef.current.style.transform = `translateX(${percentTranslate + dragOffset}%)`;
      } else {
        trackRef.current.style.transform = `translateX(calc(${percentTranslate + dragOffset}% - ${currentIndex * 2}rem))`;
      }

      animationID.current = requestAnimationFrame(animation);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      slideTo(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      slideTo(currentIndex + 1);
    }
  };

  const handleDotClick = (index) => {
    slideTo(index);
  };

  const totalDots = maxIndex + 1;
  const dots = Array.from({ length: totalDots }, (_, i) => i);

  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < maxIndex;

  return (
    <section className="featured-safaris">
      <div className="featured-safaris__container">
        <SectionTitle centered>Curated Safari Journeys</SectionTitle>

        <p className="featured-safaris__subtitle">
          Handpicked experiences for the discerning traveler
        </p>

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
              ref={trackRef}
              className="featured-safaris__track"
              onTouchStart={touchStart(currentIndex)}
              onTouchMove={touchMove}
              onTouchEnd={touchEnd}
              onMouseDown={touchStart(currentIndex)}
              onMouseMove={touchMove}
              onMouseUp={touchEnd}
              onMouseLeave={touchEnd}
            >
              {safaris.map((safari, index) => (
                <div key={safari.id} className="featured-safaris__slide">
                  <SafariCard safari={safari} index={index} />
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