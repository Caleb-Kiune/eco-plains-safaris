// src/components/home/FeaturedSafarisCarousel.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
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
            aria-label="Previous safari"
          >
            ←
          </button>
          <button
            ref={nextRef}
            className="featured-safaris__nav-btn featured-safaris__nav-btn--next"
            aria-label="Next safari"
          >
            →
          </button>

          <Swiper
            modules={[Navigation, Pagination, Keyboard, A11y]}
            spaceBetween={16}
            slidesPerView={1}
            centeredSlides={false}
            loop={false}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
              disabledClass: 'featured-safaris__nav-btn--disabled'
            }}
            pagination={{
              clickable: true,
              bulletClass: 'featured-safaris-bullet',
              bulletActiveClass: 'featured-safaris-bullet-active'
            }}
            keyboard={{
              enabled: true,
              onlyInViewport: true
            }}
            a11y={{
              enabled: true,
              prevSlideMessage: 'Previous safari',
              nextSlideMessage: 'Next safari',
              firstSlideMessage: 'This is the first safari',
              lastSlideMessage: 'This is the last safari'
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 24
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 32
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 32
              }
            }}
            className="featured-safaris-swiper"
          >
            {safaris.map((safari, index) => (
              <SwiperSlide key={safari.id}>
                <FeaturedSafariCard safari={safari} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}