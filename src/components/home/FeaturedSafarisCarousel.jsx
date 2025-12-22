import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoHeight from 'embla-carousel-auto-height';
import useSafaris from '../../hooks/useSafaris';
import SafariCard from '../common/SafariCard';
import SectionTitle from '../common/SectionTitle';
import './FeaturedSafarisCarousel.css';

export default function FeaturedSafarisCarousel() {
  const [safaris, setSafaris] = useState([]);

  // Embla configuration with AutoHeight
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: true, // Smooth free scrolling
    loop: true,     // Infinite loop for luxury feel
    duration: 60,   // Smooth feel
  }, [AutoHeight()]);

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(true);

  // Fetch Data
  const { safaris: allSafaris } = useSafaris();

  useEffect(() => {
    setSafaris(allSafaris.filter(t => t.featured));
  }, [allSafaris]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  if (safaris.length === 0) return null;

  return (
    <section className="featured-safaris">
      <div className="featured-safaris__container">
        <SectionTitle centered>Curated Safari Journeys</SectionTitle>

        <p className="featured-safaris__subtitle">
          Handpicked experiences for the discerning traveler
        </p>

        <div className="featured-safaris__carousel-wrapper">
          {/* Embla Viewport */}
          <div className="featured-safaris__viewport" ref={emblaRef}>
            <div className="featured-safaris__track">
              {safaris.map((safari, index) => (
                <div key={safari.id} className="featured-safaris__slide">
                  <SafariCard
                    safari={safari}
                    index={index}
                    variant="carousel"
                    priority={true}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Navigation Overlay (Visible on Hover) */}
          <div className="featured-safaris__nav-overlay">
            <button
              className="featured-safaris__nav-btn featured-safaris__nav-btn--overlay featured-safaris__nav-btn--prev"
              onClick={scrollPrev}
              disabled={!prevBtnEnabled}
              aria-label="Previous safari"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              className="featured-safaris__nav-btn featured-safaris__nav-btn--overlay featured-safaris__nav-btn--next"
              onClick={scrollNext}
              disabled={!nextBtnEnabled}
              aria-label="Next safari"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation Controls - Below Carousel */}
        <div className="featured-safaris__controls">
          <button
            className="featured-safaris__nav-btn featured-safaris__nav-btn--prev"
            onClick={scrollPrev}
            disabled={!prevBtnEnabled}
            aria-label="Previous safari"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            className="featured-safaris__nav-btn featured-safaris__nav-btn--next"
            onClick={scrollNext}
            disabled={!nextBtnEnabled}
            aria-label="Next safari"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}