// src/components/FeaturedSafarisCarousel käyttö.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './FeaturedSafarisCarousel.css';

async function getFeaturedSafaris() {
  try {
    const res = await fetch('/data/safaris.json');
    if (!res.ok) throw new Error('Failed');
    const data = await res.json();
    return data.filter(safari => safari.featured);
  } catch (err) {
    console.error(err);
    return [];
  }
}

export default function FeaturedSafarisCarousel() {
  const [safaris, setSafaris] = useState([]);
  const [loading, setLoading] = useState(true);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    getFeaturedSafaris().then(data => {
      setSafaris(data);
      setLoading(false);
    });
  }, []);

  if (loading || safaris.length === 0) return null;

  return (
    <section className="featured-safaris" aria-label="Featured Safari Experiences">
      <div className="featured-safaris__container">
        <header className="featured-safaris__header">
          <h2 className="featured-safaris__title">Curated Safari Journeys</h2>
          <p className="featured-safaris__subtitle">
            Handpicked experiences for the discerning traveler
          </p>
        </header>

        <div className="featured-safaris__carousel-wrapper">
          {/* Left Arrow */}
          <button
            ref={prevRef}
            className="featured-safaris__nav featured-safaris__nav--prev"
            aria-label="Previous safari"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            ref={nextRef}
            className="featured-safaris__nav featured-safaris__nav--next"
            aria-label="Next safari"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <Swiper
            modules={[Navigation]}
            spaceBetween={48}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            breakpoints={{
              640: { slidesPerView: 1.3, centeredSlides: true },
              768: { slidesPerView: 2, centeredSlides: false },
              1024: { slidesPerView: 3, centeredSlides: false },
              1440: { slidesPerView: 3, spaceBetween: 64 },
            }}
            className="featured-safaris__swiper"
          >
            {safaris.map((safari) => (
              <SwiperSlide key={safari.id}>
                <a href={safari.link} className="featured-card" aria-label={`Explore ${safari.title}`}>
                  <div className="featured-card__image-wrapper">
                    <img
                      src={safari.image}
                      alt={safari.title}
                      className="featured-card__image"
                      loading="lazy"
                    />
                    <div className="featured-card__overlay" />
                  </div>
                  <div className="featured-card__content">
                    <h3 className="featured-card__title">{safari.title}</h3>
                    <span className="featured-card__underline" />
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}