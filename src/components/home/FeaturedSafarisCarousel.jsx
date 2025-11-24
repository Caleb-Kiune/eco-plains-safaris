// src/components/home/FeaturedSafarisCarousel.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import FeaturedSafariCard from './FeaturedSafariCard'; // relative path inside same folder
// import './FeaturedSafarisCarousel.css';

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
    <section className="py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6">
        <header className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold font-playfair text-[#1a1a1a] mb-4">
            Curated Safari Journeys
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Handpicked experiences for the discerning traveler
          </p>
        </header>

        <div className="relative">
          <button
            ref={prevRef}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-14 h-14 bg-white/90 hover:bg-white rounded-full shadow-xl flex items-center justify-center transition-all"
            aria-label="Previous"
          >
            ←
          </button>
          <button
            ref={nextRef}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-14 h-14 bg-white/90 hover:bg-white rounded-full shadow-xl flex items-center justify-center transition-all"
            aria-label="Next"
          >
            →
          </button>

          <Swiper
            modules={[Navigation]}
            spaceBetween={40}
            slidesPerView={1.1}
            centeredSlides={true}
            loop={true}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            breakpoints={{
              640: { slidesPerView: 1.3 },
              1024: { slidesPerView: 2.2, spaceBetween: 48 },
              1280: { slidesPerView: 3, spaceBetween: 64 },
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