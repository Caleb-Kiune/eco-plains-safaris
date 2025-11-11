// src/components/TripsCarousel.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './TripsCarousel.css';

// 16 Luxury Safari Packages
const trips = [
  {
    title: 'Masai Mara Migration Camp',
    imageUrl: '/safari1-package.jpg',
    shortDescription: 'Track the Great Migration in luxury mobile camps.',
    price: 'From $6,800',
    link: '#',
  },
  {
    title: 'Amboseli Elephant Safari',
    imageUrl: '/safari1-package.jpg',
    shortDescription: 'Kilimanjaro backdrop, private game drives.',
    price: 'From $4,900',
    link: '#',
  },
  {
    title: 'Tsavo Red Elephant Trail',
    imageUrl: '/safari2-package.jpg',
    shortDescription: 'Volcanic landscapes, exclusive lodges.',
    price: 'From $5,400',
    link: '#',
  },
  {
    title: 'Laikipia Wilderness Escape',
    imageUrl: '/safari2-package.jpg',
    shortDescription: 'Private conservancy, rhino tracking.',
    price: 'From $7,200',
    link: '#',
  },
  {
    title: 'Diani Beach & Safari',
    imageUrl: '/beach-package.jpg',
    shortDescription: 'Safari by day, Indian Ocean luxury by night.',
    price: 'From $4,300',
    link: '#',
  },
  {
    title: 'Watamu Marine Adventure',
    imageUrl: '/beach-package.jpg',
    shortDescription: 'Snorkel reefs, then track lions.',
    price: 'From $4,100',
    link: '#',
  },
  {
    title: 'Lamu Island Heritage',
    imageUrl: '/coast1-packege.jpg',
    shortDescription: 'Swahili culture, dhow sails, private villas.',
    price: 'From $3,900',
    link: '#',
  },
  {
    title: 'Malindi Coastal Retreat',
    imageUrl: '/coast1-packege.jpg',
    shortDescription: 'Arabuko forest walks, barefoot luxury.',
    price: 'From $3,700',
    link: '#',
  },
  {
    title: 'Masai Mara Balloon Safari',
    imageUrl: '/hot-air-ballon-package.jpg',
    shortDescription: 'Sunrise flight, champagne bush breakfast.',
    price: 'From $6,500',
    link: '#',
  },
  {
    title: 'Serengeti Sky Safari',
    imageUrl: '/hot-air-ballon-package.jpg',
    shortDescription: 'Aerial migration views, private camp.',
    price: 'From $8,100',
    link: '#',
  },
  {
    title: 'Amboseli Balloon & Kilimanjaro',
    imageUrl: '/hot-air-baloon-package.jpg',
    shortDescription: 'Snow-capped peak from 1,000 feet.',
    price: 'From $6,300',
    link: '#',
  },
  {
    title: 'Laikipia Balloon & Ranch',
    imageUrl: '/hot-air-baloon-package.jpg',
    shortDescription: 'Conservancy flight, exclusive ranch stay.',
    price: 'From $7,000',
    link: '#',
  },
  {
    title: 'Mt. Kenya Luxury Ascent',
    imageUrl: '/mountain-package.jpg',
    shortDescription: 'Guided climb, high-altitude lodges.',
    price: 'From $4,800',
    link: '#',
  },
  {
    title: 'Aberdare Cloud Forest',
    imageUrl: '/mountain-package.jpg',
    shortDescription: 'Waterfalls, giant heather, rare wildlife.',
    price: 'From $3,900',
    link: '#',
  },
  {
    title: 'Kilimanjaro Lemosho Route',
    imageUrl: '/mountain2-package.jpg',
    shortDescription: '7-day summit with comfort camps.',
    price: 'From $6,200',
    link: '#',
  },
  {
    title: 'Ngorongoro Crater & Highlands',
    imageUrl: '/mountain2-package.jpg',
    shortDescription: 'Crater descent + Maasai walks.',
    price: 'From $5,700',
    link: '#',
  },
];

export default function TripsCarousel() {
  return (
    <section className="trips-section" aria-label="Explore our safari trips">
      <div className="trips-container">
        <header className="trips-header">
          <h2 className="trips-headline">Explore Our Trips</h2>
          <p className="trips-subheadline">
            Discover unforgettable safari adventures across East Africa, blending luxury, wildlife, and culture.
          </p>
        </header>

        <Swiper
          spaceBetween={32}
          slidesPerView={1.2}
          centeredSlides={true}
          loop={true}
          keyboard={{ enabled: true }}
          mousewheel={{ forceToAxis: true }}
          breakpoints={{
            640: { slidesPerView: 1.3, spaceBetween: 20 },
            768: { slidesPerView: 2.2, spaceBetween: 24 },
            1024: { slidesPerView: 3.1, spaceBetween: 32 },
          }}
          className="trips-swiper"
        >
          {trips.map((trip, index) => (
            <SwiperSlide key={index}>
              <article className="trip-card">
                <a
                  href={trip.link}
                  className="trip-link"
                  aria-label={`View details for ${trip.title}`}
                >
                  <div
                    className="trip-image"
                    style={{ backgroundImage: `url(${trip.imageUrl})` }}
                  >
                    <div className="trip-overlay"></div>

                    {/* Bottom-Aligned Text Stack */}
                    <div className="trip-content-stack">
                      <div className="trip-text-content">
                        <h3 className="trip-title">{trip.title}</h3>
                        <div className="trip-reveal">
                          <p className="trip-description">{trip.shortDescription}</p>
                          <p className="trip-price">{trip.price}</p>
                        </div>
                      </div>
                    </div>

                    <button className="trip-explore" aria-label="Explore this trip">
                      Explore
                    </button>
                  </div>
                </a>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}