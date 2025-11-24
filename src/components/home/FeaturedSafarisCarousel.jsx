// src/components/home/FeaturedSafarisCarousel.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
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
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={1.1}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            breakpoints={{
              640: { slidesPerView: 1.5, spaceBetween: 24 },
              1024: { slidesPerView: 2.5, spaceBetween: 32, centeredSlides: true },
              1440: { slidesPerView: 3.2, spaceBetween: 40, centeredSlides: true },
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