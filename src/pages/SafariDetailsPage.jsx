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
  const { safaris, payment, loading } = useSafaris();
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

  const isDayTrip = safari.type === 'day_trip' || safari.durationDays === 1;

  // Carousel Logic
  const images = [safari.primaryImage, ...(safari.secondaryImages || [])].filter(Boolean);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Format price helper
  const formatPrice = (price) => {
    if (!price) return null;
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: safari.currency || 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const displayPrice = safari.price_adult || safari.price_couple || safari.price_child;
  const formattedPrice = formatPrice(displayPrice) || 'Rate on request';
  const priceNote = safari.price_note || 'per person';
  const formattedChildPrice = formatPrice(safari.price_child);
  const formattedDeposit = formatPrice(safari.deposit);

  // Highlights (limit to 4)
  const highlights = safari.inclusions?.slice(0, 4) || ['Luxury Accommodation', 'Private Guides', 'All-Inclusive', 'Conservation Fees'];

  // WhatsApp message — richer for day trips
  const whatsappMessage = isDayTrip
    ? `Hi! I'd like to book the ${safari.title}${safari.date ? ` on ${safari.date}` : ''}.\n\nPrice: ${formattedPrice} ${priceNote}${safari.deposit ? `\nDeposit: ${formattedDeposit}` : ''}\n\nPlease confirm availability and share payment details.`
    : `Hi! I'm interested in the ${safari.title} (${safari.duration}).\n\nCould you please send me more details, availability, and pricing?`;

  const whatsappUrl = getWhatsappLink(whatsappMessage);

  const ctaText = isDayTrip ? 'Reserve Your Spot' : 'Enquire Now';

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
              {isDayTrip ? 'Book Now' : 'Enquire'}
            </LuxuryButton>
          </div>
        </div>

        <div className="safari-split-layout">
          {/* LEFT COLUMN: HERO CAROUSEL */}
          <div className="safari-split-left">
            <LuxuryHero
              title={safari.title}
              subtitle={isDayTrip && safari.date
                ? `${safari.date} • ${safari.destination}`
                : `${safari.duration} • ${safari.destination}`}
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
                From {formattedPrice} <span style={{ fontSize: '0.5em', fontStyle: 'normal', opacity: 0.6 }}>{priceNote}</span>
              </h1>

              {/* Child pricing for day trips */}
              {isDayTrip && formattedChildPrice && (
                <p className="safari-child-price">
                  Child: {formattedChildPrice}
                </p>
              )}

              {/* Deposit callout */}
              {isDayTrip && safari.deposit && (
                <div className="safari-deposit-callout">
                  <span className="safari-deposit-callout__label">Deposit Required</span>
                  <span className="safari-deposit-callout__amount">{formattedDeposit}</span>
                </div>
              )}

              {/* Meta */}
              <div className="safari-meta">
                {isDayTrip && safari.date ? (
                  <>
                    <span className="safari-meta__date">{safari.date}</span>
                    <span>•</span>
                    {safari.destination}
                  </>
                ) : (
                  <>
                    {safari.duration} <span>•</span> {safari.destination}
                  </>
                )}
              </div>

              {/* Meeting Point */}
              {isDayTrip && safari.meetingPoint && (
                <div className="safari-meeting-point">
                  <span className="safari-meeting-point__label">Meeting Point:</span>
                  <span className="safari-meeting-point__value">{safari.meetingPoint}</span>
                </div>
              )}

              {/* Highlights */}
              <div className="safari-highlights">
                {highlights.map((h, i) => (
                  <div key={i} className="safari-highlight-item">
                    {typeof h === 'string' ? h : h.title}
                  </div>
                ))}
              </div>

              {/* Activities (Day trips) */}
              {isDayTrip && safari.activities && safari.activities.length > 0 && (
                <div className="safari-activities">
                  <h3 className="safari-section-title">Activities</h3>
                  <ul className="safari-activities__list">
                    {safari.activities.map((activity, i) => (
                      <li key={i} className="safari-activities__item">{activity}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Description */}
              <p className="safari-description">
                {safari.description || "Immerse yourself in the untamed beauty of East Africa. This exclusive journey combines breathtaking wildlife encounters with world-class hospitality, ensuring every moment is as comfortable as it is thrilling."}
              </p>

              {/* M-Pesa Payment Info (Day trips with deposits) */}
              {isDayTrip && safari.deposit && payment && (
                <div className="safari-payment-info">
                  <h3 className="safari-section-title">Payment Details</h3>
                  <div className="safari-payment-info__grid">
                    <div className="safari-payment-info__item">
                      <span className="safari-payment-info__label">Paybill</span>
                      <span className="safari-payment-info__value">{payment.paybill}</span>
                    </div>
                    <div className="safari-payment-info__item">
                      <span className="safari-payment-info__label">Account</span>
                      <span className="safari-payment-info__value">{payment.account}</span>
                    </div>
                  </div>
                  <p className="safari-payment-info__note">{payment.instructions}</p>
                </div>
              )}

              {/* Actions */}
              <div className="safari-actions" id="enquire">
                {/* WhatsApp Integration for Desktop */}
                <LuxuryButton
                  variant="filled"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {ctaText}
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