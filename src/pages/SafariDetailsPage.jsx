// src/pages/SafariDetailsPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SEO from '../components/common/SEO';
import LuxuryHero from '../components/common/LuxuryHero';
import LuxuryButton from '../components/common/LuxuryButton';
import SkeletonHero from '../components/common/SkeletonHero';
import useSafaris from '../hooks/useSafaris';
import { getWhatsappLink } from '../utils/contact';
import './SafariDetailsPage.css';

const SafariDetailsPage = () => {
  const { slug } = useParams();
  const { safaris, loading } = useSafaris();
  const [safari, setSafari] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (safaris.length > 0) {
      const found = safaris.find(t => t.slug === slug || t.link?.includes(slug));
      setSafari(found);
      setCurrentImageIndex(0);
      window.scrollTo(0, 0);
    }
  }, [slug, safaris]);


  if (loading || !safari) {
    return <SkeletonHero />;
  }

  // Carousel Logic
  const images = [safari.primaryImage, ...(safari.secondaryImages || [])].filter(Boolean);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Format price
  const formattedPrice = safari.price_adult
    ? new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: safari.currency || 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(safari.price_adult)
    : 'Rate on request';

  // Highlights (limit to 4)
  const highlights = safari.inclusions?.slice(0, 4) || ['Luxury Accommodation', 'Private Guides', 'All-Inclusive', 'Conservation Fees'];

  // WhatsApp Integration: Personalized enquiry message
  // WhatsApp Integration: Personalized enquiry message
  const whatsappUrl = getWhatsappLink(`Hi! I'm interested in the ${safari.title} (${safari.duration}).\n\nCould you please send me more details, availability, and pricing?`);

  return (
    <>
      <SEO>
        <title>{safari.title} - Eco Plains Safaris</title>
        <meta name="description" content={`Experience ${safari.title} in ${safari.destination}. ${safari.duration} of luxury safari adventure.`} />
        <meta property="og:title" content={`${safari.title} - Eco Plains Safaris`} />
        <meta property="og:image" content={safari.primaryImage} />
      </SEO>

      <div className="safari-details-page">
        {/* Mobile Sticky Booking Bar (Hidden on Desktop) */}
        <div className="safari-details-booking-bar">
          <div className="safari-details-booking-bar__container">
            <div className="safari-details-booking-bar__info">
              <span className="booking-info-item__label">Starting From</span>
              <span className="booking-info-item__value">{formattedPrice}</span>
            </div>
            {/* WhatsApp Integration for Mobile */}
            <LuxuryButton
              variant="filled"
              href={whatsappUrl}
              size="small"
              target="_blank"
              rel="noopener noreferrer"
            >
              Enquire
            </LuxuryButton>
          </div>
        </div>

        <div className="safari-split-layout">
          {/* LEFT COLUMN: HERO CAROUSEL */}
          <div className="safari-split-left">
            <LuxuryHero
              title={safari.title}
              subtitle={`${safari.duration} • ${safari.destination}`}
              backgroundImage={images[currentImageIndex]}
              ctaText="" /* No CTA in hero for split layout */
              ctaLink=""
              align="left"
            />

            {/* Carousel Controls */}
            {images.length > 1 && (
              <div className="hero-carousel-controls">
                <button onClick={prevImage} className="hero-carousel-arrow hero-carousel-arrow--prev" aria-label="Previous image">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button onClick={nextImage} className="hero-carousel-arrow hero-carousel-arrow--next" aria-label="Next image">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
                <div className="hero-carousel-dots">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`hero-carousel-dot ${idx === currentImageIndex ? 'hero-carousel-dot--active' : ''}`}
                      aria-label={`Go to image ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT COLUMN: CONTENT */}
          <div className="safari-split-right">
            <div className="safari-content-container">
              {/* Price */}
              <h1 className="safari-price">
                From {formattedPrice} <span style={{ fontSize: '0.5em', fontStyle: 'normal', opacity: 0.6 }}>per person</span>
              </h1>

              {/* Meta */}
              <div className="safari-meta">
                {safari.duration} <span>•</span> {safari.destination}
              </div>

              {/* Highlights */}
              <div className="safari-highlights">
                {highlights.map((h, i) => (
                  <div key={i} className="safari-highlight-item">
                    {typeof h === 'string' ? h : h.title}
                  </div>
                ))}
              </div>

              {/* Description */}
              <p className="safari-description">
                {safari.description || "Immerse yourself in the untamed beauty of East Africa. This exclusive journey combines breathtaking wildlife encounters with world-class hospitality, ensuring every moment is as comfortable as it is thrilling."}
              </p>

              {/* Actions */}
              <div className="safari-actions" id="enquire">
                {/* WhatsApp Integration for Desktop */}
                <LuxuryButton
                  variant="filled"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Enquire Now
                </LuxuryButton>
                <LuxuryButton variant="outline" href="/safaris">
                  View All Safaris
                </LuxuryButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SafariDetailsPage;