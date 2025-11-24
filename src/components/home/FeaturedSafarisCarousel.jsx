// src/components/home/FeaturedSafarisCarousel.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import FeaturedSafariCard from './FeaturedSafariCard';
import './FeaturedSafarisCarousel.css';

export default function FeaturedSafarisCarousel() {
  const [safaris, setSafaris] = useState([]);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    fetch('/data/safaris.json')
      .then(res => res.json())
      .then(data => setSafaris(data.tours.filter(t => t.featured)))
      .catch(() => setSafaris([]));
  }, []);

  if (safaris.length === 0) return null;

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
            ref={prevRef}
            className="featured-safaris__nav-btn featured-safaris__nav-btn--prev"
            aria-label="Previous slide"
          >
            ←
          </button>
          <button
            ref={nextRef}
            className="featured-safaris__nav-btn featured-safaris__nav-btn--next"
            aria-label="Next slide"
          >
            →
          </button>

          <Swiper
            modules={[Navigation]}
            spaceBetween={32}
            slidesPerView={1.1}
            centeredSlides={true}
            loop={true}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            breakpoints={{
              640: { slidesPerView: 1.4, spaceBetween: 32 },
              1024: { slidesPerView: 2.2, spaceBetween: 48, centeredSlides: false },
              1280: { slidesPerView: 3, spaceBetween: 48, centeredSlides: false },
            }}
            className="featured-safaris-swiper"
          >
            {safaris.map((safari) => (
              <SwiperSlide key={safari.id}>
                <FeaturedSafariCard safari={safari} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}