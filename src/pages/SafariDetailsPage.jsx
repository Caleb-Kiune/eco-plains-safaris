// src/pages/SafariDetailsPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
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

  useEffect(() => {
    fetch('/data/safaris.json')
      .then(res => res.json())
      .then(data => {
        const found = data.tours.find(t => t.slug === slug || t.link?.includes(slug));
        setSafari(found);
        setAllSafaris(data.tours);

        // Scroll to top on mount
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

  // Format price
  const formattedPrice = safari.price_adult
    ? new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: safari.currency || 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(safari.price_adult)
    : 'Rate on request';

  // Get related safaris (same destination, different safari)
  const relatedSafaris = allSafaris
    .filter(s => s.destination === safari.destination && s.slug !== safari.slug)
    .slice(0, 3);

  // Sample highlights if inclusions exist
  const highlights = safari.inclusions?.slice(0, 4) || [
    { key: 'luxury', title: 'Luxury Accommodations', desc: 'Stay in hand-picked lodges' },
    'Professional wildlife guides',
    'All meals and park fees',
    'Private game drives'
  ];

  return (
    <>
      <Helmet>
        <title>{safari.title} - Eco Plains Safaris</title>
        <meta name="description" content={`Experience ${safari.title} in ${safari.destination}. ${safari.duration} of luxury safari adventure.`} />
        <meta property="og:title" content={`${safari.title} - Eco Plains Safaris`} />
        <meta property="og:image" content={safari.primaryImage} />
      </Helmet>

      <div className="safari-details-page">
        {/* Luxury Hero */}
        <LuxuryHero
          title={safari.title}
          subtitle={`${safari.duration} • ${safari.destination}`}
          backgroundImage={safari.primaryImage}
          ctaText="Enquire Now"
          ctaLink="#enquire"
          align="left"
        />

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

        {/* Overview Section */}
        <section className="safari-details-overview">
          <div className="safari-details-overview__container">
            <SectionTitle centered>The Experience</SectionTitle>

            <p className="safari-details-overview__description">
              Embark on an unforgettable journey through {safari.destination}.
              This curated experience offers a perfect blend of adventure, luxury, and immersion into the wild.
              Witness breathtaking landscapes, encounter majestic wildlife, and create memories that will last a lifetime.
            </p>
          </div>
        </section>

        <SectionDivider />

        {/* Key Highlights (4:5 Magazine Cards) */}
        <section className="safari-details-highlights">
          <div className="safari-details-highlights__container">
            <SectionTitle centered>What Makes This Special</SectionTitle>

            <div className="safari-details-highlights__grid">
              {highlights.map((highlight, index) => {
                const title = typeof highlight === 'string' ? highlight : highlight.title;
                const desc = typeof highlight === 'string' ? 'Experience the best of African wilderness' : highlight.desc;

                return (
                  <motion.article
                    key={index}
                    className="highlight-card"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <div className="highlight-card__icon">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                        <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </div>
                    <h3 className="highlight-card__title">{title}</h3>
                    <p className="highlight-card__desc">{desc}</p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Included / Excluded Two-Column */}
        <section className="safari-details-inclusions">
          <div className="safari-details-inclusions__container">
            <div className="safari-details-inclusions__grid">
              {/* Included */}
              <motion.div
                className="inclusions-column"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="inclusions-column__title">What's Included</h3>
                <div className="inclusions-column__divider" />
                <ul className="inclusions-list">
                  {(safari.inclusions || ['Luxury accommodations', 'All meals', 'Game drives', 'Park fees']).map((item, i) => (
                    <li key={i} className="inclusions-list__item inclusions-list__item--included">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Excluded */}
              <motion.div
                className="inclusions-column"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="inclusions-column__title">Not Included</h3>
                <div className="inclusions-column__divider" />
                <ul className="inclusions-list">
                  {(safari.exclusions || ['International flights', 'Travel insurance', 'Personal expenses', 'Gratuities']).map((item, i) => (
                    <li key={i} className="inclusions-list__item inclusions-list__item--excluded">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Gallery (4:5 Grid) */}
        {safari.secondaryImages && safari.secondaryImages.length > 0 && (
          <section className="safari-details-gallery">
            <div className="safari-details-gallery__container">
              <SectionTitle centered>Visual Journey</SectionTitle>

              <div className="safari-details-gallery__grid">
                {safari.secondaryImages.slice(0, 6).map((img, i) => (
                  <motion.div
                    key={i}
                    className="gallery-item"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                  >
                    <img src={img} alt={`${safari.title} gallery ${i + 1}`} loading="lazy" />
                    <div className="gallery-item__overlay" />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {safari.secondaryImages && safari.secondaryImages.length > 0 && <SectionDivider />}

        {/* Related Safaris */}
        {relatedSafaris.length > 0 && (
          <section className="safari-details-related">
            <div className="safari-details-related__container">
              <SectionTitle centered>You May Also Like</SectionTitle>

              <div className="safari-details-related__grid">
                {relatedSafaris.map((relatedSafari, index) => (
                  <SafariCard
                    key={relatedSafari.slug}
                    safari={relatedSafari}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Enquire CTA Section */}
        <section id="enquire" className="safari-details-enquire">
          <div className="safari-details-enquire__container">
            <motion.div
              className="enquire-content"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="enquire-content__title">Ready to Begin Your Journey?</h2>
              <p className="enquire-content__text">
                Our safari experts are here to craft your perfect {safari.destination} adventure.
              </p>
              <div className="enquire-content__actions">
                <LuxuryButton variant="filled" href="/contact">
                  Send An Enquiry
                </LuxuryButton>
                <LuxuryButton variant="outline" href="/safaris">
                  View All Safaris
                </LuxuryButton>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SafariDetailsPage;