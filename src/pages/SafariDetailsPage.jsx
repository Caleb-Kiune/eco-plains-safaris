// src/pages/SafariDetailsPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import LuxuryHero from '../components/common/LuxuryHero';
import SectionTitle from '../components/common/SectionTitle';
import LuxuryButton from '../components/common/LuxuryButton';
import SectionDivider from '../components/common/SectionDivider';
import SafariCard from '../components/safaris/SafariCard';
import './SafariDetailsPage.css';

const SafariDetailsPage = () => {
  const { slug } = useParams();
  const [safari, setSafari] = useState(null);
  const [allSafaris, setAllSafaris] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    fetch('/data/safaris.json')
      .then(res => res.json())
      .then(data => {
        const found = data.tours.find(t => t.slug === slug || t.link?.includes(slug));
        setSafari(found);
        setAllSafaris(data.tours);
        setCurrentImageIndex(0); // Reset carousel on new safari
        window.scrollTo(0, 0);
      })
      .catch(err => console.error('Failed to load safari details', err));
  }, [slug]);

  if (!safari) {
    return (
      <div className="safari-details-loading">
        <div className="safari-details-loading__spinner" />
        <p>Loading your adventure...</p>
      </div>
    );
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

  // Get related safaris
  const relatedSafaris = allSafaris
    .filter(s => s.destination === safari.destination && s.slug !== safari.slug)
    .slice(0, 3);

  // Highlights
  const highlights = safari.inclusions?.slice(0, 3) || ['Luxury Accommodation', 'Private Guides', 'All-Inclusive'];

  return (
    <>
      <Helmet>
        <title>{safari.title} - Eco Plains Safaris</title>
        <meta name="description" content={`Experience ${safari.title} in ${safari.destination}. ${safari.duration} of luxury safari adventure.`} />
        <meta property="og:title" content={`${safari.title} - Eco Plains Safaris`} />
        <meta property="og:image" content={safari.primaryImage} />
      </Helmet>

      <div className="safari-details-page">
        {/* Luxury Hero with Carousel */}
        <div className="relative">
          <LuxuryHero
            title={safari.title}
            subtitle={`${safari.duration} • ${safari.destination}`}
            backgroundImage={images[currentImageIndex]}
            ctaText="Enquire Now"
            ctaLink="#enquire"
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

        {/* Sticky Booking Bar */}
        <div className="safari-details-booking-bar">
          <div className="safari-details-booking-bar__container">
            <div className="safari-details-booking-bar__info">
              <div className="booking-info-item">
                <span className="booking-info-item__label">Duration</span>
                <span className="booking-info-item__value">{safari.duration}</span>
              </div>
              <div className="booking-info-item">
                <span className="booking-info-item__label">From</span>
                <span className="booking-info-item__value">{formattedPrice}</span>
              </div>
            </div>
            <LuxuryButton variant="filled" href="#enquire">
              Enquire Now
            </LuxuryButton>
          </div>
        </div>

        {/* Minimal Experience Section */}
        <section className="safari-experience">
          <div className="safari-experience__container">
            <SectionTitle
              title="The Experience"
              subtitle="A curated journey into the wild"
              centered={true}
            />

            {/* Inline Highlights */}
            <div className="experience-highlights">
              {highlights.map((h, i) => (
                <div key={i} className="experience-highlight">
                  {typeof h === 'string' ? h : h.title}
                </div>
              ))}
            </div>

            {/* Key Details Line */}
            <div className="experience-key-details">
              {safari.duration} <span>•</span> {safari.destination} <span>•</span> {formattedPrice}
            </div>

            {/* Description */}
            <p className="experience-description">
              {safari.description || "Immerse yourself in the untamed beauty of East Africa. This exclusive journey combines breathtaking wildlife encounters with world-class hospitality, ensuring every moment is as comfortable as it is thrilling."}
            </p>

            {/* Inline Lists */}
            <div className="experience-lists">
              <div>
                <span className="experience-list-label">Included:</span>
                {safari.inclusions ? safari.inclusions.slice(0, 5).map(i => typeof i === 'string' ? i : i.title).join(" • ") : "Luxury Accommodation • All Meals • Game Drives • Park Fees • Transfers"}
              </div>
              <div>
                <span className="experience-list-label">Not Included:</span>
                {safari.exclusions ? safari.exclusions.join(" • ") : "International Flights • Visas • Personal Insurance • Gratuities"}
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Related Safaris */}
        {relatedSafaris.length > 0 && (
          <section className="related-safaris">
            <SectionTitle
              title="You May Also Like"
              subtitle="Curated alternatives for your journey"
              centered={true}
            />
            <div className="related-safaris__grid">
              {relatedSafaris.map(s => (
                <SafariCard key={s.id} safari={s} />
              ))}
            </div>
          </section>
        )}

        {/* Final CTA */}
        <section className="safari-final-cta" id="enquire">
          <div className="safari-final-cta__container">
            <h2>Ready to Begin Your Journey?</h2>
            <div className="safari-final-cta__buttons">
              <LuxuryButton variant="filled" href="/contact">
                Send An Enquiry
              </LuxuryButton>
              <LuxuryButton variant="outline" href="/safaris">
                View All Safaris
              </LuxuryButton>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SafariDetailsPage;